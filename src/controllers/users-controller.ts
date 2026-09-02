import { NextFunction, Request, Response } from "express";

class UsersController {
  async index(request: Request, response: Response) {
    return response.json();
  }

  async create(request: Request, response: Response, next: NextFunction) {
    throw new Error("Lasqueira Amigo!");
    return response.status(201).json({ message: "ok" });
  }

  async show(request: Request, response: Response) {
    return response.json();
  }
}

export { UsersController };
