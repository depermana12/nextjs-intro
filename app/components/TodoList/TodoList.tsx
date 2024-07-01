import Todo from "./Todo";

const TodoList = ({ todos }) => {
    return (
        <div className="container mx-auto py-4 w-1/2">
            {todos.map((todo) => {
                return <Todo todo={todo} key={todo.id} />;
            })}
        </div>
    );
};
export default TodoList;
