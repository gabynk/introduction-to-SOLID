import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const searchUser = this.usersRepository.findById(user_id);

    if (!searchUser) {
      throw new Error("Mensagem do erro");
    }

    return searchUser;
  }
}

export { ShowUserProfileUseCase };
