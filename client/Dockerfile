# FROM node:14-slim

# WORKDIR /app

# COPY ./package.json ./
# COPY ./package-lock.json ./
# # COPY ./yarn.lock ./app

# RUN npm install

# COPY . ./

# EXPOSE 3000

# CMD [ "npm", "start" ]

FROM node:14-slim

WORKDIR /client

COPY *.json ./

RUN rm -R node_modules/
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]