# Use lightweight Node image
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the rest of the app
COPY . .

# App runs on port 8080
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]
