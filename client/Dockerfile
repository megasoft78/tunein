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

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]