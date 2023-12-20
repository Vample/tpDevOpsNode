FROM node:20.10

WORKDIR /srv

COPY server.js .
COPY /html/ ./html
COPY package.json .
COPY bonjour-api-router.js .
COPY back-bonjour.js .

RUN npm install

CMD ["node", "server.js"]
