import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlreadyExist = this.usersRepository.findById(user_id);

    if (!userAlreadyExist || userAlreadyExist?.admin === false) {
      throw new Error("Mensagem do erro");
    }

    const allList = this.usersRepository.list();

    return allList;
  }
}

export { ListAllUsersUseCase };
