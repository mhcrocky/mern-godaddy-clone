import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const getUserId = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["_token"]; // get the session cookie from request header
    if (!authHeader) return res.sendStatus(401); // if there is no cookie from request header, send an unauthorized response.
    const accessToken: string = authHeader as string; // If there is, split the cookie string to get the actual jwt
    jwt.verify(accessToken, process.env.SECRET_ACCESS_TOKEN as string, async (err, decoded: any) => {
      if (err) {
        // if token has been altered or has expired, return an unauthorized error
        return res
          .status(401)
          .json({ message: "This session has expired. Please login" });
      }
      res.append('userid', decoded?.userId)
      next();
    })
  }