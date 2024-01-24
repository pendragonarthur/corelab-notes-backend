FROM node:20

WORKDIR /app 

COPY package.json /app

RUN npm install 

COPY . /app

ENV PORT=8800

EXPOSE 8800

CMD [ "npm", "start"]