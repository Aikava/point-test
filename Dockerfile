FROM node:11

COPY src/server/dist /app/server
COPY src/client/dist /app/static
COPY package.json /app/package.json
COPY node_modules /app/node_modules

WORKDIR /app

ENV NODE_CONFIG_DIR=/app/server/config
ENV NODE_PATH=/app
ENV NODE_ENV=local
ENV STATIC_DIR=/app/static
ENV DB_CONNECTION=postgres://user:password@pg1:5432/point_test

CMD npm run start:server

