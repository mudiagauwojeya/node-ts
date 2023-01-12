import express from "express";

// middlewares

// controllers
import {
	getUserController,
	postUserController,
} from "../Controllers/userController";

const router = express.Router();

router.get("/", getUserController);

router.post("/", postUserController);

export { router as User };
