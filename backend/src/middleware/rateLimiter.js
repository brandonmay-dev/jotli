import { Ratelimit } from "@upstash/ratelimit";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit(req.ip);
    if (!success) {
      return res.status(429).json({ error: "Too many requests" });
    }
    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default rateLimiter;
