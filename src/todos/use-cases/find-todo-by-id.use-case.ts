import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByIdRepository } from "../repository";

@Injectable()
export class FindTodoByIdUseCase{
    constructor(
        private readonly findByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
    )   {}

    async FindById(id: string) {
        try {
            this.logger.log(`Finding item ${id}`);

            const result = await this.findByIdRepository.execute(id);

            this.logger.log(`Uten ${id} found successfully`);
            return result;
        }   catch (error) {
            this.logger.error(`Error to find item: ${error.message}`)
            throw error;
        }
    }
}