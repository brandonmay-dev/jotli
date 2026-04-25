import { ratelimit } from "../config/redis.js";

let hasLoggedRateLimitFailure = false;

const rateLimiter = async (req, res, next) => {
  if (!ratelimit) {
    return next();
  }

  try {
    const { success } = await ratelimit.limit(req.ip);
    if (!success) {
      return res.status(429).json({ error: "Too many requests" });
    }
    next();
  } catch (error) {
    if (!hasLoggedRateLimitFailure) {
      console.warn(
        "Rate limiting is unavailable. Continuing without rate limiting.",
      );
      hasLoggedRateLimitFailure = true;
    }
    next();
  }
};

export default rateLimiter;
