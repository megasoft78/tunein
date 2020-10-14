
FROM node:14-slim

WORKDIR /server

COPY *.json ./

RUN rm -R node_modules/
RUN npm install
RUN npm install typescript tsc-watch -g

EXPOSE 5000

CMD [ "npm", "start" ]
