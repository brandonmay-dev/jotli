import { ratelimit } from "../config/redis.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit(req.ip);
    if (!success) {
      return res.status(429).json({ error: "Too many requests" });
    }
    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default rateLimiter;
