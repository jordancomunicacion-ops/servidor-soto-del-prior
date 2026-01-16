FROM node:20-bullseye-slim

WORKDIR /app

# Enable OpenSSL legacy provider if needed (though bullseye usually fine, just safe setup for node 17+)
# ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy root package.json
COPY package.json ./

# Copy app package.json
COPY apps/api/package.json ./apps/api/

# Install dependencies
RUN npm install

# Copy app source
COPY apps/api ./apps/api

# Generate Prisma Client
WORKDIR /app/apps/api
RUN npx prisma generate

# Build
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
