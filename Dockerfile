# # Build stage
# FROM node:20-alpine AS builder

# WORKDIR /app

# # Copy package files
# COPY package*.json yarn.lock ./
# COPY nx.json tsconfig.base.json ./

# # Install dependencies
# RUN yarn install --frozen-lockfile

# # Copy source code
# COPY . .

# # Build the project with nx
# RUN yarn run build

# Nginx stage
FROM nginx:alpine

WORKDIR /app

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built applications from builder stage
COPY dist/apps/host /usr/share/nginx/html/host
COPY dist/apps/about /usr/share/nginx/html/about
COPY dist/apps/cart /usr/share/nginx/html/cart
COPY dist/apps/shop /usr/share/nginx/html/shop

COPY dist/apps/host/module-federation.manifest.docker.json /usr/share/nginx/html/host/module-federation.manifest.json

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
