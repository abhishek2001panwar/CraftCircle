import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import {configurePassport} from "./config/passport.js";
import { upload } from "./utils/multer.js";
import path from "path";
import { fileURLToPath } from "url";
import { connectdb } from "./config/db.js";

//routes import
import { router as userRouter } from "./routes/user.routes.js";
import { router as postsRouter } from "./routes/post.routes.js";
import { router as contactRouter } from "./routes/contact.routes.js";
import { router as resumeRouter } from "./routes/resume.routes.js";
//server.js 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//dotenv configuration

dotenv.config();

//express configuration
const app = express();

//cors configuration/policy
app.use(cors({
  origin: process.env.frontendURL,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization, Origin, X-Requested-With, Accept",
}));

//middleware configuration


app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

//passport configuration
app.use(passport.initialize());
app.use(passport.session());
configurePassport(passport); 


//database connection

connectdb();


//routes configuration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/resume", resumeRouter);




//server configuration
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
