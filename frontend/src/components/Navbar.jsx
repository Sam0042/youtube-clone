
import {
    Menu,
    Search,
    Play,
    EllipsisVertical,
    CircleUserRound,
    Plus,
    Bell,
    Mic,
} from "lucide-react";

function Navbar({ onMenuClick }) {
    return (
        <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-[#0f0f0f] px-3 text-white md:px-6">
            {/* Left: Hamburger and Logo */}
            <div className="flex shrink-0 items-center gap-3 md:gap-5">
                <button
                    onClick={onMenuClick}
                    aria-label="Toggle sidebar"
                    className="rounded-full p-2 hover:bg-white/10"
                >
                    <Menu size={26} />
                </button>

                <div className="flex cursor-pointer items-center gap-1">
                    <div className="flex h-7 w-9 items-center justify-center rounded-lg bg-[#ff0033]">
                        <Play size={17} fill="white" className="text-white" />
                    </div>

                    <span className="text-xl font-bold tracking-tighter md:text-2xl">
                        YouTube
                    </span>

                    <span className="mb-3 ml-1 text-[10px] text-gray-400">
                        ID
                    </span>
                </div>
            </div>

            {/* Middle: Search */}
            <div className="flex flex-1 items-center justify-end gap-2 md:mx-8 md:max-w-2xl md:justify-center">
                <button className="rounded-full p-2 hover:bg-white/10 md:hidden">
                    <Search size={25} />
                </button>

                <form
                    className="hidden h-10 flex-1 items-center overflow-hidden rounded-full border border-[#303030] bg-[#121212] focus-within:border-blue-500 md:flex"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="Search"
                        className="h-full min-w-0 flex-1 bg-transparent px-5 text-base outline-none"
                    />

                    <button
                        type="submit"
                        className="flex h-full w-16 items-center justify-center border-l border-[#303030] bg-white/10 hover:bg-white/20"
                    >
                        <Search size={21} />
                    </button>
                </form>

                <button className="hidden rounded-full bg-white/10 p-3 hover:bg-white/20 lg:block">
                    <Mic size={20} />
                </button>
            </div>

            {/* Right: Actions */}
            <div className="flex shrink-0 items-center gap-1 md:gap-3">
                <button className="rounded-full p-2 hover:bg-white/10 md:hidden">
                    <EllipsisVertical size={24} />
                </button>

                <button className="hidden items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20 md:flex">
                    <Plus size={20} />
                    Create
                </button>

                <button className="hidden rounded-full p-2 hover:bg-white/10 md:block">
                    <Bell size={22} />
                </button>

                <button className="flex items-center gap-2 rounded-full border border-[#3ea6ff] px-1.5 py-2 text-sm font-medium text-[#3ea6ff] hover:bg-[#263850] md:px-4">
                    <CircleUserRound size={23} />
                    <span>Sign in</span>
                </button>
            </div>
        </header>
    );
}

export default Navbar;
