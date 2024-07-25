import type { NextFunction, Request, Response } from "express";
import Todo from "../model/todo.model";
import User from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
type GetFn = (token: string) => Promise<boolean>;

declare namespace Express {
  export interface Request {
    userid?: string // I use string for example, you can put other type
  }
}
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
export const create = async (req: Request, res: Response) => {
  try {
    const { title, done, userId } = req.body;
    Todo.create({
      title: title,
      userId: res.get('userid')
    }
    ).then(() => {
      res.status(201).send({
        success: "Todo created successfully"
      });
    }).catch(() => {
      return res.status(404).send({ error: "Network Error" });
    })
  } catch (error) {
    return res.status(500).send({ error: "Network Error" });
  }
}
export const update = async (req: Request, res: Response) => {
  try {
    const { title, userId, id } = req.body;

    if (userId !== res.get('userid')) {
      return res.status(404).send({ error: "Unallowed user!!" });
    } else {
      Todo.findByIdAndUpdate(
        id,
        { title }
      ).then(() => {
        res.status(201).send({ success: "Todo updated successfully" });
      }).catch(() => {
        return res.status(404).send({ error: "Network Error" });
      })
    }
  } catch (error) {
    return res.status(500).send({ error: "Network Error" });
  }
}
export const get = async (req: Request, res: Response) => {
  try {
    Todo.find({
      userId: res.get('userid'),
    }).then((result) => {
      res.status(201).send({
        success: "Todo updated successfully",
        data: result
      });
    }).catch(() => {
      return res.status(404).send({ error: "Network Error" });
    })
  } catch (error) {
    return res.status(500).send({ error: "Network Error" });
  }
}
export const destory = async (req: Request, res: Response) => {
  try {
    const { id, userId } = req.body;
    if (userId !== res.get('userid')) {
      return res.status(404).send({ error: "Unallowed user!!" });
    } else {
      Todo.findOneAndDelete({ id, userId },
      ).then(() => {
        res.status(201).send({ success: "Todo deleted successfully" });
      }).catch(() => {
        return res.status(404).send({ error: "Network Error" });
      })
    }
  } catch (error) {
    return res.status(500).send({ error: "Network Error" });
  }
}