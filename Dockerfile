From node:16

WORKDIR /usr/src/app

COPY userapi/package*.json ./

RUN npm ci

COPY userapi .

EXPOSE 3000

CMD ["npm","start"]