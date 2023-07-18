import { BsCheck } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';

const Todo = () => {
    return (
        <section className="min-h-24 w-full border border-2 border-white rounded-md mb-4">
            <div className="flex items-center justify-between px-3 py-1 bg-white" >
                <button className="border border-2 hover:border-green-400 rounded-full">
                    <BsCheck className="hover:text-green-400" />
                </button>
                <div className="flex items-center gap-1">
                    <button title="Less Priority" className="animate__animated animate__fadeInLeft animate__delay-2s border border-2 border-green-400 hover:bg-green-400 p-2 rounded-full"></button>
                    <button title="Medium Priority" className="animate__animated animate__fadeInLeft animate__delay-3s border border-2 border-yellow-400 hover:bg-yellow-400 p-2 rounded-full"></button>
                    <button title="Most Priority" className="animate__animated animate__fadeInLeft animate__delay-4s border border-2 border-red-400 hover:bg-red-400 p-2 rounded-full"></button>
                    <button className="ml-2"><RiDeleteBinLine /></button>
                </div>
            </div>
            <div className="p-3 rounded-md" style={{ background: "#FFD9C0" }}>
                <p className="mb-1 text-sm font-bold">Title</p>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatum.</small></p>
            </div>
        </section>
    );
};

export default Todo;