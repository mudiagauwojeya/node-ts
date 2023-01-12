import { randomUUID } from "crypto";
import { RequestHandler } from "express";

// type
type PostMemberBodyType = {
	id?: string;
	name: string;
	email: string;
};

export const getMembersController: RequestHandler = async (req, res, _next) => {
	const sessionId = req.session.id;
	console.log(sessionId);
	const response = await fetch("http://localhost:4000/members");
	const members = (await response.json()) as PostMemberBodyType;
	res.status(200).json(members);
};

export const postMembersController: RequestHandler = async (
	req,
	res,
	_next
) => {
	const id = randomUUID();
	const { name, email } = req.body as PostMemberBodyType;

	const user = { id, name, email };

	const response = await fetch("http://localhost:4000/members", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
	res.status(201);
};

export const patchMembersController: RequestHandler = async (
	req,
	res,
	_next
) => {
	const { id, name, email } = req.body as PostMemberBodyType;
	const response = await fetch(`http://localhost:4000/members?id=${id}`);
	const memberToUpdate = await response.json();
	console.log(memberToUpdate);
	const updatedMember = {
		...memberToUpdate[0],
		name,
		email,
	};
	console.log(updatedMember);
	await fetch(`http://localhost:4000/members/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatedMember),
	});
	res.status(200).json("Updated member");
};
