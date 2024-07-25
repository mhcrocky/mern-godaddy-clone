import type { Request, Response } from "express";
import Todo from "../model/todo.model";

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