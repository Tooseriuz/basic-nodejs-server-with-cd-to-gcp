FROM node:20.14 AS builder

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8080

CMD [ "yarn", "start" ]
