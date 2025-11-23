# Stage 1 — Build Stage
# --------------------------
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package.json first (layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the code
COPY . .

# --------------------------
# Stage 2 — Runtime Stage
# --------------------------
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files
COPY --from=builder /app /app

# Expose app port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
