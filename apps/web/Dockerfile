# 1. Base image
FROM node:26-alpine AS base
RUN apk update && apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app

# 2. Pruning stage
FROM base AS prepare
RUN yarn global add turbo@^2
COPY . .
# Replace 'nextjs' with the name of your app as defined in package.json
RUN turbo prune @apps/web --docker 

# 3. Builder stage
FROM base AS builder
# Install dependencies only when the lockfile changes
COPY --from=prepare /app/out/json/ .
RUN yarn install
# Build the project
COPY --from=prepare /app/out/full/ .

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

RUN yarn turbo build

# 5. Runner stage
FROM base AS runner
# Don't run production as root for security reasons
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer /app/apps/web/.next/standalone ./
COPY --from=installer /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer /app/apps/web/public ./apps/web/public

CMD ["node", "apps/web/server.js"]