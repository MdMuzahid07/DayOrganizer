import { useSelector } from "react-redux";
import Todo from "./Todo";

const Tasks = () => {
    const todos = useSelector(state => state.todos);

    return (
        <main className="h-full w-full px-3 py-5 overflow-y-scroll pb-96">

            {
                todos?.map((task) => <Todo task={task} key={task._id} />)
            }
        </main>
    );
};

export default Tasks;