import FilteringModal from './FilteringModal';
import { FcTodoList } from 'react-icons/fc';


const Header = () => {
    return (
        <header className="p-3 rounded-t-md" style={{ background: "#8CC0DE" }}>
            <h1 className="text-xl font-bold text-white flex items-center gap-2"><FcTodoList className="bg-white rounded-full p-1" /> Day Organizer</h1>

            <div className="flex items-center justify-between mt-4">
                <p className="px-3 rounded-full border border-2 border-white text-white font-bold text-xs" style={{ background: "#CCEEBC" }}>7</p>

                <div className="flex items-center gap-2">
                    <button className="text-xs text-white border border-2 border-white font-bold px-3 rounded-full" style={{ background: "#CCEEBC" }}>Complete All Tasks</button>
                    <button className="text-xs text-white border border-2 border-white font-bold px-3 rounded-full" style={{ background: "#FFD9C0" }}>Clear All Tasks</button>

                    <FilteringModal />
                </div>
            </div>
        </header>
    );
};

export default Header;