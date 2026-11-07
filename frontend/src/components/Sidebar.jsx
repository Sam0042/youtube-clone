
import {
    House,
    Clapperboard,
    Tv,
    History,
    ListVideo,
    Clock,
    ThumbsUp,
    Flame,
    Music2,
    Gamepad2,
    Newspaper,
    Trophy,
    Settings,
    Flag,
    CircleHelp,
    MessageSquareWarning,
    X,
} from "lucide-react";

function Sidebar({ isOpen, onClose }) {
    const mainLinks = [
        { icon: House, label: "Home" },
        { icon: Clapperboard, label: "Shorts" },
        { icon: Tv, label: "Subscriptions" },
    ];

    const personalLinks = [
        { icon: History, label: "History" },
        { icon: ListVideo, label: "Playlists" },
        { icon: Clock, label: "Watch later" },
        { icon: ThumbsUp, label: "Liked videos" },
    ];

    const exploreLinks = [
        { icon: Flame, label: "Trending" },
        { icon: Music2, label: "Music" },
        { icon: Gamepad2, label: "Gaming" },
        { icon: Newspaper, label: "News" },
        { icon: Trophy, label: "Sports" },
    ];

    const bottomLinks = [
        { icon: Settings, label: "Settings" },
        { icon: Flag, label: "Report history" },
        { icon: CircleHelp, label: "Help" },
        { icon: MessageSquareWarning, label: "Send feedback" },
    ];

    const renderLinks = (links) =>
        links.map(({ icon: Icon, label }) => (
            <button
                key={label}
                onClick={onClose}
                className="flex w-full items-center gap-6 rounded-xl px-3 py-2.5 text-left text-sm text-white transition-colors hover:bg-[#272727]"
            >
                <Icon size={22} />
                <span>{label}</span>
            </button>
        ));

    return (
        <div
            className={`fixed inset-0 z-40 transition-[visibility] duration-300 ${isOpen ? "visible" : "invisible delay-300"
                }`}
        >
            {/* Backdrop */}
            <button
                aria-label="Close sidebar"
                onClick={onClose}
                className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
            />

            {/* Sidebar panel */}
            <aside
                className={`absolute bottom-0 left-0 top-16 flex w-64 flex-col overflow-y-auto bg-[#0f0f0f] px-3 pb-6 shadow-2xl transition-transform duration-300 ease-in-out sm:w-72 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Mobile header */}
                <div className="flex items-center justify-between border-b border-[#303030] py-3 md:hidden">
                    <span className="text-sm font-semibold">Menu</span>
                    <button
                        onClick={onClose}
                        aria-label="Close sidebar"
                        className="rounded-full p-2 hover:bg-[#272727]"
                    >
                        <X size={21} />
                    </button>
                </div>

                <div className="space-y-1 border-b border-[#303030] py-3">
                    {renderLinks(mainLinks)}
                </div>

                <div className="space-y-1 border-b border-[#303030] py-3">
                    <h3 className="px-3 pb-2 text-base font-semibold">You</h3>
                    {renderLinks(personalLinks)}
                </div>

                <div className="space-y-1 border-b border-[#303030] py-3">
                    <h3 className="px-3 pb-2 text-base font-semibold">Explore</h3>
                    {renderLinks(exploreLinks)}
                </div>

                <div className="border-b border-[#303030] py-5">
                    <p className="px-3 text-sm text-white">
                        Sign in to like videos, comment, and subscribe.
                    </p>
                    <button className="ml-3 mt-3 flex items-center gap-2 rounded-full border border-[#3ea6ff] px-3 py-2 text-sm font-medium text-[#3ea6ff] hover:bg-[#263850]">
                        Sign in
                    </button>
                </div>

                <div className="space-y-1 py-3">
                    {renderLinks(bottomLinks)}
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;
