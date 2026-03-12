import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared databases/databases/prisma.database";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class DeleteTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async delete(id: string) {
        return await this.prisma.todo.delete({ 
            where: {id}
         })
    }
}