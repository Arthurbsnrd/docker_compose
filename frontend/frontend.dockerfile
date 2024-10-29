FROM node:16

WORKDIR /app

COPY . .

RUN npm install -g serve

EXPOSE 8080
CMD ["serve", "-s", "."]
