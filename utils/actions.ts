"use server";

import { revalidatePath } from "next/cache";
import db from "./db";

export const completeTodo = async (id: string) => {
    await db.todo.update({
        where: { id },
        data: {
            completed: true,
        },
    });
    revalidatePath("/todos");
};

export const newTodo = async (formData: FormData) => {
    // eslint-disable-next-line no-unused-vars
    const todo = await db.todo.create({
        data: {
            content: String(formData.get("content")),
        },
    });

    revalidatePath("/todos");
};
