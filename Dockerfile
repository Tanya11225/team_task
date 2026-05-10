FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY frontend/package*.json ./frontend/
COPY frontend/backend/package*.json ./frontend/backend/

# Install root dependencies (concurrently)
RUN npm ci --only=production

# Install backend dependencies
RUN npm install --prefix frontend/backend --production=false

# Install frontend dependencies
RUN npm install --prefix frontend --production=false

# Copy source code
COPY . .

# Build frontend
RUN npm run build --prefix frontend

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]