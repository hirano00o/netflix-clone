FROM node:20-alpine

ARG REACT_APP_TMDB_API_KEY
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "npm", "start"]
