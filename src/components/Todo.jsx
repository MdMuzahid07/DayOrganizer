import { BsCheck } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { colorSelected, deleted, toggled } from '../states/features/todos/actions';

const Todo = ({ task }) => {
    const { color, todoText, todoTitle, completed, _id } = task;
    const dispatch = useDispatch();


    const handleStatus = (id) => {
        dispatch(toggled(id))
    };

    const priorityStatus = (id, color) => {
        dispatch(colorSelected(id, color))
    };

    return (
        <section className="min-h-24 w-full border border-2 border-white rounded-md mb-4">
            <div className="flex items-center justify-between px-3 py-1 bg-white" >
                <button onClick={() => handleStatus(_id)} className={` border-2 hover:border-green-400 w-5 h-5 ${completed && "border-green-400"} rounded-full`}>
                    <BsCheck className={`hover:text-green-400 ${completed && "text-green-400"}`} />
                </button>
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => priorityStatus(_id, "green")}
                        title="Less Priority" className={`animate__animated animate__fadeInLeft animate__delay-2s border-2 border-green-400 hover:bg-green-400 ${color == "green" && "bg-green-400"} p-2 rounded-full`}></button>

                    <button
                        onClick={() => priorityStatus(_id, "yellow")}
                        title="Medium Priority" className={`animate__animated animate__fadeInLeft animate__delay-2s border-2 border-yellow-400 hover:bg-yellow-400 ${color == "yellow" && "bg-yellow-400"} p-2 rounded-full`}></button>


                    <button onClick={() => priorityStatus(_id, "red")} title="Most Priority" className={`animate__animated animate__fadeInLeft animate__delay-4s  border-2 border-red-400 ${color == "red" && "bg-red-400"} hover:bg-red-400 p-2 rounded-full`}></button>

                    <button onClick={() => dispatch(deleted(_id))} className="ml-2"><RiDeleteBinLine /></button>
                </div>
            </div>
            <div className="p-3 rounded-md" style={{ background: "#FFD9C0" }}>
                <p className="mb-1 text-sm font-bold">{todoTitle}</p>
                <p><small>{todoText}</small></p>
            </div>
        </section >
    );
};

export default Todo;