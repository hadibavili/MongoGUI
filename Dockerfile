FROM node:alpine
COPY . /MongoGUI
WORKDIR /MongoGUI
CMD node index.js
