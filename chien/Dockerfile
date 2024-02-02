# POUR RUN LES 2 EN MEME TEMPS
# Stage 1: Build React App
FROM node:14-alpine as build
WORKDIR /app
COPY ./client/package*.json ./
RUN npm install
COPY ./client ./
RUN npm run build

# Stage 2: Build Express Server
FROM node:14-alpine
WORKDIR /app
COPY ./server/package*.json ./
RUN npm install
COPY ./server ./

# Copy built React app from Stage 1
COPY --from=build /app/build ./client/build

# Expose the port on which the Express server will run
EXPOSE 5000

# Start the Express server
CMD ["npm", "start"]

