import db from "../../../utils/db";
import TodoList from "../../components/TodoList/TodoList";

const getData = async () => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));
    const todos = await db.todo.findMany({});
    console.log("Fetched todos:", todos);
    return todos;
};

const TodosPage = async () => {
    const todos = await getData();
    return (
        <div>
            <TodoList todos={todos} />
        </div>
    );
};
export default TodosPage;
