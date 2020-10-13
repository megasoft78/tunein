
FROM node:14-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install tsc-watch -g

EXPOSE 5000

CMD [ "npm", "start" ]
