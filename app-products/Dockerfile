FROM node:18.16-buster-slim AS builder

RUN npm install --location=global http-server express

WORKDIR /app

COPY package*.json ./

RUN npm install --unsafe-perm

COPY . .
# RUN cp .env.prod .env

RUN npm run build --unsafe-perm

EXPOSE 9090

ENTRYPOINT ["node", "server.js"]
