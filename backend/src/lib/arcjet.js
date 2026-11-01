import arcjet, { shield, slidingWindow } from "@arcjet/node";
import { ENV } from "./env.js";

export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }),
    slidingWindow({ mode: "LIVE", interval: "1h", max: 500 }),
  ],
});
