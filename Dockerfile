FROM node:22-bookworm-slim AS base
WORKDIR /app

# Install system deps for native builds
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install --force && npm rebuild lightningcss --build-from-source

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "dev"]
