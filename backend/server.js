import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import {configurePassport} from "./config/passport.js";

import { connectdb } from "./config/db.js";
import { router as userRouter } from "./routes/user.routes.js";
import { router as postsRouter } from "./routes/post.routes.js";
import { router as contactRouter } from "./routes/contact.routes.js";
dotenv.config();
const app = express();



//middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "abhishek",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

configurePassport(passport); // Passport configuration

connectdb();

//routes configuration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/contact", contactRouter);



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
