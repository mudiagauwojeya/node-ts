import { randomUUID } from "crypto";
import { RequestHandler } from "express";

// type
type PostBodyType = {
	name: string;
	email: string;
	avatar: string;
};

export const getUserController: RequestHandler = async (req, res, _next) => {
	const response = await fetch("http://localhost:4000/users");
	const users = await response.json();
	res.status(200).json(users);
};

export const postUserController: RequestHandler = async (req, res, _next) => {
	const id = randomUUID();
	const { name, email, avatar } = req.body as PostBodyType;

	const user = { id, name, email, avatar };

	const response = await fetch("http://localhost:4000/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
	res.status(201);
};
