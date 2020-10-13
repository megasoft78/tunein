# FROM node:14.5

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./

# RUN npm install

# # Bundle app source
# COPY . .

# EXPOSE 8080

# CMD [ "npm", "start" ]





# FROM node:14-slim

# WORKDIR /usr/src/app
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# COPY ./package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 5000

# CMD [ "node", "src/index.ts" ]


FROM node:14-slim

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ./package*.json ./

RUN npm install

# RUN npm install pm2 -g
RUN ./node_modules/typescript/bin/tsc -p ./tsconfig.json

RUN npm run build
# COPY ./dist .
COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]
