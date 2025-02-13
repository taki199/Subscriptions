import express from "express";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";

import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();
// api/v1/auth/sign-up
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("welcome to the subscription tracker api");
});

app.listen(PORT, async () => {
  console.log(`susbscripton tracker api is running on port ${PORT}`);
  await connectToDatabase();
});

export default app;
