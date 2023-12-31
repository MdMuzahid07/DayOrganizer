import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import 'animate.css';

const FilteringModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState();

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert("wow,great one!")
    };

    return (
        <section>

            <button onClick={() => setIsOpen(!isOpen)} className="text-white"><BsThreeDotsVertical /></button>

            {
                isOpen && <div className="w-72 p-4 h-48 absolute top-24 -right-1 rounded-l-md mt-4 border border-2 border-white animate__animated animate__fadeInRight z-50" style={{ background: "#FFD9C0" }}>

                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                        <input onChange={handleSearch} value={search} className="bg-white placeholder-red-300 rounded-full w-40 px-3" placeholder="Find your plan" type="text" name="" id="" />

                        <button className="px-3 border border-4 border-blue-300 text-xs rounded-full text-white font-bold" style={{ background: "#8CC0DE" }}>Find</button>
                    </form>

                    <div className="flex items-center gap-2 my-5">
                        <button className="text-xs text-white border border-2 border-white font-bold px-3 rounded-full" style={{ background: "#CCEEBC" }}>All</button>
                        <button className="text-xs text-white border border-2 border-white font-bold px-3 rounded-full" style={{ background: "#FFD9C0" }}>Incomplete</button>
                        <button className="text-xs text-lime-400 border border-2 border-white font-bold px-3 rounded-full" style={{ background: "#FAF0D7" }}>Complete</button>
                    </div>

                    <hr className="border-t-2 border-white mb-4" />

                    <div className="flex flex-wrap items-center gap-2">
                        <button className="text-xs text-white font-bold px-3 border border-2 border-white rounded-full bg-green-400">Low Priority</button>
                        <button className="text-xs text-white font-bold px-3 border border-2 border-white rounded-full bg-yellow-400">Medium Priority</button>
                        <button className="text-xs text-white font-bold px-3 border border-2 border-white rounded-full bg-red-400">Most Priority</button>
                    </div>

                </div>
            }
        </section>
    );
};

export default FilteringModal;