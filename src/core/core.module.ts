import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_PIPE, BaseExceptionFilter } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Env, getEnvPath, validateEnv } from './helpers/env';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { validationOptions } from '../shared/constants/validation-options';
import { LoggingExceptionFilter } from './filters/logging-exception.filter';
import { lowercaseKeys } from '../shared/helpers/case';
import { SystemController } from './controllers/system.controller';
import { join } from 'path';
import { NodeEnv } from './constants/node-env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvPath(),
      validate: validateEnv,
      cache: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: (configService: ConfigService<Env, true>) => ({
        cors: configService.get('CORS') && { origin: true, credentials: true },
        debug: configService.get('DEBUG'),
        playground: configService.get('DEBUG'),
        introspection: configService.get('DEBUG'),
        typePaths: ['schema.gql'],
        definitions:
          configService.get('NODE_ENV') !== NodeEnv.PRODUCTION
            ? { path: join(process.cwd(), 'src/schema.ts') }
            : undefined,
        cache: 'bounded',
        csrfPrevention: true,
        fieldResolverEnhancers: ['guards'],
        installSubscriptionHandlers: true,
        context: (context) => ({ ...context, loaders: {} }),
        subscriptions: {
          'subscriptions-transport-ws': {
            onConnect: (connectionParams) => lowercaseKeys(connectionParams),
            context: ({ connection }) => ({
              req: { headers: connection.context },
            }),
          },
          'graphql-ws': {
            onConnect: ({ connectionParams, extra }) =>
              Object.assign(extra, {
                context: lowercaseKeys(connectionParams),
              }),
            context: ({ extra }) => ({ req: { headers: extra.context } }),
          },
        },
      }),
    }),
  ],
  controllers: [SystemController],
  providers: [
    BaseExceptionFilter,
    {
      provide: APP_FILTER,
      useClass: LoggingExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe(validationOptions),
    },
  ],
  exports: [GraphQLModule],
})
export class CoreModule {}
