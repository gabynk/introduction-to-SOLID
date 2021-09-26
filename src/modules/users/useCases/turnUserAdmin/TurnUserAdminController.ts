import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const changedUserAdmin = this.turnUserAdminUseCase.execute({
        user_id,
      });

      return response.status(201).json(changedUserAdmin);
    } catch (err) {
      return response.status(404).json({ error: "Mensagem do erro" });
    }
  }
}

export { TurnUserAdminController };
