import { aj } from "../lib/arcjet.js";

export const protectApi = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) return res.status(429).json({ message: "Too many requests" });
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  } catch (error) {
    console.log("Arcjet error", error);
    next();
  }
};
