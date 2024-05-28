FROM node:alpine
WORKDIR /usr/app
RUN npm install @nestjs/core
RUN npm install @nestjs/jwt
RUN npm install @nestjs/mongoose
RUN npm install @nestjs/platform-express
RUN npm install @nestjs/serve-static
RUN npm install bcrypt
RUN npm install cookie-parser
COPY . .
CMD node main.js