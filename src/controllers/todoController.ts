import type { Request, Response } from "express";
import Todo from "../model/todo.model";
import User from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
type GetFn = (token: string) => Promise<boolean>;

export const create = async (req: Request, res: Response) => {
  try {
    const { title, done, userId } = req.body;
    Todo.create(
      { title, done, userId }
    ).then(() => {
      res.status(201).send({ success: "Todo created successfully" });
    }).catch(() => {
      return res.status(404).send({ error: "Network Error" });
    })
  } catch (error) {
    return res.status(500).send({ error: "Network Error" });
  }
}
export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const { title, done } = req.body;
    Todo.findByIdAndUpdate(
      id,
      { title, done }
    ).then(() => {
      res.status(201).send({ success: "Todo updated successfully" });
    }).catch(() => {
      return res.status(404).send({ error: "Network Error" });
    })
  } catch (error) {
    return res.status(500).send({ error: "Network Error" });
  }
}