import express from "express";
import {
	getMembersController,
	patchMembersController,
	postMembersController,
} from "../Controllers/memberController";
import { isAuthenticated } from "../middlewares/session";

const router = express.Router();

router.get("/", isAuthenticated, getMembersController);
router.post("/", isAuthenticated, postMembersController);
router.patch("/", isAuthenticated, patchMembersController);

export { router as Member };
