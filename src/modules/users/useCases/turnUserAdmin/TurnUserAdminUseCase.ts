import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userNotExist = this.usersRepository.findById(user_id);

    if (!userNotExist) {
      throw new Error("Mensagem do erro");
    }

    const changedUser = this.usersRepository.turnAdmin(userNotExist);

    return changedUser;
  }
}

export { TurnUserAdminUseCase };
