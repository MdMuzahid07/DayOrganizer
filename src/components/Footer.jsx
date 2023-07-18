import { useState } from "react";

const Footer = () => {
    const [inputValue, setInputValue] = useState();

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert("working?")
    };

    return (
        <form onSubmit={handleSubmit} className="h-14 px-3 py-1 absolute bottom-0 w-full rounded-b-md flex items-center justify-between" style={{ background: "#CCEEBC" }}>
            <input onChange={handleInput} value={inputValue} className="bg-white placeholder-red-300 rounded-full w-72 px-4 py-2" placeholder="Write your day" type="text" name="" id="" />

            <button className="px-4 py-2 rounded-full text-white font-bold" style={{ background: "#8CC0DE" }}>Add</button>
        </form>
    );
};

export default Footer;