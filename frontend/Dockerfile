# Use an official Node.js image to build the Tailwind CSS
FROM node:alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Generate Tailwind configuration file
RUN npx tailwindcss init

# Build Tailwind CSS
RUN npm run build

# Now, use the NGINX image to serve the static files
FROM nginx:alpine

# Copy the Tailwind CSS output and the rest of the files to the NGINX directory
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
