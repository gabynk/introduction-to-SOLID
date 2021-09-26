import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const showUser = this.showUserProfileUseCase.execute({
        user_id,
      });

      return response.status(201).json(showUser);
    } catch (err) {
      return response.status(404).json({ error: "Mensagem do erro" });
    }
  }
}

export { ShowUserProfileController };
