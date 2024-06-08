FROM node:20.14 AS builder

WORKDIR /app

COPY . .

RUN yarn install

CMD [ "yarn", "start" ]
