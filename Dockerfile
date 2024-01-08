FROM node:20-alpine as serve-stage

ENV NODE_ENV production

USER node

COPY ./node_modules ./node_modules
COPY ./dist ./dist
COPY schema.gql /

EXPOSE 8888

CMD ["node", "dist/main.js"]
