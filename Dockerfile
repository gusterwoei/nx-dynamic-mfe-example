# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json yarn.lock ./
COPY nx.json tsconfig.base.json ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the project with nx
RUN yarn run build

# Nginx stage
FROM nginx:alpine

# WORKDIR /app

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built applications from builder stage
COPY --from=builder dist/apps/host /usr/share/nginx/html
COPY --from=builder dist/apps/about /usr/share/nginx/html/about
COPY --from=builder dist/apps/cart /usr/share/nginx/html/cart
COPY --from=builder dist/apps/shop /usr/share/nginx/html/shop

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
