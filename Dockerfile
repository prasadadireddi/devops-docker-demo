FROM node:4.6
WORKDIR /app
ADD . /app
RUN apt-get install git
RUN npm install
EXPOSE 3000
CMD npm start
