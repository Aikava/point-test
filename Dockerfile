FROM node:11

COPY src/client/dist /app/static
COPY package.json /app/package.json
COPY node_modules /app/node_modules

WORKDIR /app

ENV NODE_PATH=/app
ENV NODE_ENV=production
ENV STATIC_DIR=/app/static

CMD npm run start:server

