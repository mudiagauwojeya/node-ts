import express from "express";
import cors from "cors";
import session from "express-session";

// routers
import { User } from "./routes/userRoutes";
import { randomUUID } from "crypto";
import { Member } from "./routes/memberRoutes";

export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sessionOptions = {
	secret: randomUUID(),
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true },
};
app.use(session(sessionOptions));
app.use("/api/v1/user", User);
app.use("/api/v1/member", Member);
