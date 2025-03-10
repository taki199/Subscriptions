import express from "express";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";

import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(arcjetMiddleware);
// api/v1/auth/sign-up
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("welcome to the subscription tracker api");
});
app.get("/films", (req, res) => {
  const count = req.query.count;
  if (count) {
    res.send(`here is your count ${count}`);
  }
  res.send("no count");
});

app.listen(PORT, async () => {
  console.log(`susbscripton tracker api is running on port ${PORT}`);
  await connectToDatabase();
});

export default app;
