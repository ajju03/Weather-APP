# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose app port (same as in your app.js)
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]