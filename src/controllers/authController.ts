import type { NextFunction, Request, Response } from "express";
import User from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const verifyUser = async (req: Request, res: Response) => {
  try {
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
      const id = decoded?.userId
      const user = await User.findById(id);
      // check user exist and token is listed in whitelist
      if (user?.email && user?.whitelist.filter(val => val === accessToken).length) {
        return res.status(200).json({
          message: "login success",
          data: {
            email: user.email,
          }
        });
      } else {
        return res
          .status(401)
          .json({ message: "This session has expired. Please login" });
      }
    })
  } catch (error) {
    return res.status(404).send({ error: "Authentication Error" });
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;
    console.log(email, password);
    const existEmail = await User.findOne({
      email,
    });

    if (existEmail) {
      return res.status(400).send({ error: "Please use another email" });
    }

    Promise.all([existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword: string) => {
              const newUser = new User({
                password: hashedPassword,
                email: email,
              });
              newUser
                .save()
                .then((result) => {
                  return res
                    .status(201)
                    .send({ success: "user register successfully" });
                })
                .catch((err) => {
                  return res.status(500).send({ err });
                });
            })
            .catch((error) => {
              return res.status(500).send({ error: "Error hashing password" });
            });
        }
      })
      .catch((error) => {
        const err = error as Error;
        res.status(500).json({ message: err.message });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    User
      .findOne({ email })
      .then(async (user) => {
        bcrypt
          .compare(password, user?.password || "")
          .then((passwordCheck) => {
            if (!passwordCheck)
              return res.status(400).send({ error: 'Password is incorrect!!!' });

            const token = jwt.sign(
              {
                userId: user?._id,
              },
              process.env.SECRET_ACCESS_TOKEN as string,
              { expiresIn: "24h" }
            );

            let whitelist = user?.whitelist || [];
            whitelist.push(token);

            User.findOneAndUpdate({
              email: user?.email
            }, {
              whitelist: whitelist
            }).then((user) => {
              console.log(user)
            })
              .catch(() => {
                return res.status(404).send({ error: "user not found" });
              });
            res.cookie("SessionID", token, {
              maxAge: 20 * 60 * 1000, // would expire in 20minutes
              httpOnly: true, // The cookie is only accessible by the web server
              secure: true,
              sameSite: "none",
            });
            return res.status(200).json({
              message: "login success",
              email: user?.email,
              token: token
            });
          })
          .catch((error) => {
            return res.status(404).send({ error: "password don't match" });
          });
      })
      .catch((error) => {
        return res.status(404).send({ error: "user not found" });
      });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
};

export const logOut = async (req: Request, res: Response) => {
  try {
    const accessToken = req.headers['_token']; // get the session cookie from request header
    if (!accessToken) return res.sendStatus(204); // No content
    jwt.verify(accessToken as string, process.env.SECRET_ACCESS_TOKEN as string, async (err, decoded: any) => {

      const id = decoded?.userId
      const user = await User.findById(id);
      let whitelist = user?.whitelist || [];
     
      await User.findByIdAndUpdate(id,{
        whitelist:  whitelist.filter(val=> val !== accessToken as string)
      });

    })
    res.status(200).json({ message: 'You are logged out!' });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
}