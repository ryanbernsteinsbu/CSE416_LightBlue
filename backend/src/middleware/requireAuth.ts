import { Request, Response, NextFunction } from "express";
export default function requireAuth(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers["x-api-key"];
    const signature = req.headers["x-signature"];
    const timestamp = req.headers["x-timestamp"];

    if (!apiKey || !signature || !timestamp) {
        return res.status(400).send("Missing headers");
    }

    //check if user exists from apiKey

    //validate key with hash
    //update useage
    next();
}
