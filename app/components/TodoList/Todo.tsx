"use client";
import { useTransition } from "react";
import { completeTodo } from "../../../utils/actions";

type TodoProps = {
    todo: {
        id: string;
        content: string;
        completed: boolean;
    };
};

const Todo = ({ todo: { id, content, completed } }: TodoProps) => {
    // eslint-disable-next-line no-unused-vars
    const [isPending, startTransition] = useTransition();

    return (
        <div className="form-control border-b-2">
            <label className="label cursor-pointer">
                <span
                    className={`text-lg ${completed ? "line-through text-gray-800" : ""}`}
                >
                    {" "}
                    {content}
                </span>
                <input
                    onChange={() => startTransition(() => completeTodo(id))}
                    type="checkbox"
                    checked={completed}
                    className="checkbox"
                />
            </label>
        </div>
    );
};
export default Todo;
