# Create image based off of the official Node 6 image
FROM node:9.11.1-slim

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# Expose the port the app runs in
EXPOSE 3000

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new dir
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm update && \
    npm install

# Get all the code needed to run the app
COPY . .

# Serve the app
CMD ["npm", "start"]
