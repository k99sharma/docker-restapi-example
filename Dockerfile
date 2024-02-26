FROM node:18-alpine
WORKDIR /app 
ADD . .
RUN npm install
EXPOSE 8080
CMD ["node", "index.js"]