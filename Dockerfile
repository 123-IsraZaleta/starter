#FROM node:14-alpine

#RUN mkdir -p /app

#WORKDIR /app

#COPY package.json /app/

#RUN npm install

#COPY . /app

#EXPOSE 3000

#CMD ["node", ""]

FROM node:14-alpine

WORKDIR /app/src

COPY package.json /app/src/

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]