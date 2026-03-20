import { Injectable, Logger } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoUseCase, DeleteTodoUseCase, FindAllTodosUseCase, FindTodoByIdUseCase, UpdateTodoUseCase } from './use-cases';
@Injectable()
export class TodosService {

constructor(
  private readonly logger: Logger,
  private readonly createtodousecase: CreateTodoUseCase,
  private readonly findalltodosusecase: FindAllTodosUseCase,
  private readonly findtodobyidusecase: FindTodoByIdUseCase,
  private readonly updatetodousecase: UpdateTodoUseCase,
  private readonly deletetodousecase: DeleteTodoUseCase,
) {}

  async create(data: CreateTodoDto) {
    return await this.createtodousecase.execute(data);
  }

  async findAll() {
    return await this.findalltodosusecase.execute();
  }

  async findOne(id: string) {
    return await this.findtodobyidusecase.FindById(id);
  }

  async update(id: string, data: UpdateTodoDto) {
    return await this.updatetodousecase.update(id, data);
  }

  async remove(id: string) {
    return await this.deletetodousecase.execute(id);
  }
}
