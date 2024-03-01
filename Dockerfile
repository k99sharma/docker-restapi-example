FROM node:18-alpine
WORKDIR /app 
ADD . .
RUN npm install -g nodemon
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "dev"]