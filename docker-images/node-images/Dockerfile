FROM node:5.11.1

RUN apt-get update && apt-get install -y nano

COPY app /opt/app

WORKDIR /opt/app

RUN npm install

CMD ["npm", "start"]
