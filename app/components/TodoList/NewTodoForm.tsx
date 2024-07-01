import { newTodo } from "../../../utils/actions";

const NewTodoForm = () => {
    return (
        <div className="container mx-auto py-4 w-1/2">
            <form action={newTodo} className="flex gap-4">
                <div className="flex-auto w-78">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            name="content"
                            className="grow"
                            placeholder="Add Todos"
                        />
                    </label>
                </div>
                <button className="btn btn-neutral" type="submit">
                    create new todo
                </button>
            </form>
        </div>
    );
};

export default NewTodoForm;
