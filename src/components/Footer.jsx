import { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "../states/features/todos/actions";

const Footer = () => {
    const [todoTitle, setTodoTitle] = useState("Todo Title");
    const [todoText, setTodoText] = useState("Write Your Day");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(added(todoTitle, todoText))
    };

    return (
        <form onSubmit={handleSubmit} className="h-24 px-3 py-1 absolute bottom-0 w-full rounded-b-md flex items-center justify-between" style={{ background: "#CCEEBC" }}>
            <div>
                <input onChange={(e) => setTodoTitle(e.target.value)} value={todoTitle} className="bg-white rounded-lg w-72 px-4 mb-2 py-1" type="text" name="" id="" />
                <input onChange={(e) => setTodoText(e.target.value)} value={todoText} className="bg-white rounded-lg w-72 px-4 py-1" type="text" name="" id="" />
            </div>
            <button type="submit" className="px-4 py-6 rounded-2xl text-white font-bold" style={{ background: "#8CC0DE" }}>Add</button>
        </form>
    );
};

export default Footer;