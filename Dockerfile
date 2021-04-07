FROM node:12

WORKDIR /app
EXPOSE 3000

COPY package*.json /app/
RUN npm install

COPY build /app/

CMD ["npm", "start"]
