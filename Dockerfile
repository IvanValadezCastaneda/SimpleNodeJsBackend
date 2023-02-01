FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# RUN npm ci --only=production
RUN npm install

# Bundle app source
COPY . .

ENV PORT=3000

EXPOSE 3000

CMD [ "node", "Server.js" ]