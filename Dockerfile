FROM node:18-alpine as serve-stage

ENV NODE_ENV production

USER node

COPY ./node_modules ./node_modules
COPY ./dist ./dist

EXPOSE 8888

CMD ["node", "dist/src/main.js"]
