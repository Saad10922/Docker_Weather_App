# Use Node.js base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Build Tailwind output.css
RUN npx tailwindcss -i ./input.css -o ./output.css

# Expose port and start server (if applicable)
EXPOSE 3000
CMD ["npx", "http-server", "-p", "3000"]
