# ---------- Base ----------
FROM node:12-alpine AS base
WORKDIR /app

# ---------- Builder ----------
# Creates:
# - node_modules: production dependencies (no dev dependencies)
# - build: A production build compiled with Babel
FROM base AS builder
COPY package*.json .babelrc .env* ./
RUN npm install
COPY ./src ./src
RUN npm run build
RUN npm prune --production


# ---------- Release ----------
FROM base AS release
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
EXPOSE 3000
USER node
CMD ["node", "./build/app.js"]