import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import dotenv from "dotenv";

dotenv.config();

const hasRedisConfig =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;
const isProduction = process.env.NODE_ENV === "production";
const shouldEnableRateLimiting =
  process.env.ENABLE_RATE_LIMITING === "true" ||
  (isProduction && hasRedisConfig);

if (process.env.ENABLE_RATE_LIMITING === "true" && !hasRedisConfig) {
  console.warn(
    "Rate limiting was enabled, but Upstash credentials are missing. Continuing without rate limiting.",
  );
}

// Redis-backed rate limiting is optional in local development.
export const ratelimit = shouldEnableRateLimiting
  ? new Ratelimit({
      redis: new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      }),
      limiter: Ratelimit.slidingWindow(10, "20 s"),
    })
  : null;
