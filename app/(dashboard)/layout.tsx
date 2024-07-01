import NewTodoForm from "../components/TodoList/NewTodoForm";

const DashboardLayout = ({ children }) => {
    return (
        <div className="md:container md:mx-auto">
            <div>
                <h1>Dashboard layout: Todos</h1>
            </div>
            <div>
                <NewTodoForm />
            </div>
            <div>{children}</div>
        </div>
    );
};
export default DashboardLayout;
