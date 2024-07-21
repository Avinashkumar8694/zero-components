FROM node:20-alpine3.19

WORKDIR /src

COPY ./plugins-server /src
COPY ./package.json /src
COPY .npmrc /src

RUN npm install --omit=dev

EXPOSE 3000

CMD ["node", "index.js"]
