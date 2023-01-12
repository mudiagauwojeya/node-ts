import { Request, Response, NextFunction } from "express";

export const isAuthenticated = (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	if (req.session.id) next();
	else next("route");
};
