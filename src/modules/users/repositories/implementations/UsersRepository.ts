import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const idAlreadyExist = this.users.find((user) => user.id === id);

    return idAlreadyExist;
  }

  findByEmail(email: string): User | undefined {
    const emailAlreadyExist = this.users.find((user) => user.email === email);

    return emailAlreadyExist;
  }

  turnAdmin(receivedUser: User): User {
    const changeUser = this.users.find((user) => user.id === receivedUser.id);

    changeUser.admin = true;
    changeUser.updated_at = new Date();

    this.users.map((user) => {
      if (user.id === changeUser.id) {
        return changeUser;
      }

      return user;
    });

    return changeUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
