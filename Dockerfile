FROM node:18-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package-lock.json .

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
