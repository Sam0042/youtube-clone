
import { useState } from "react";

const categories = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "Programming",
    "React",
    "JavaScript",
    "Podcasts",
    "News",
    "Recently uploaded",
    "Watched",
    "New to you",
];

function CategoryBar() {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className="sticky top-16 z-30 w-full bg-[#0f0f0f] px-3 py-3 md:px-6">
            <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activeCategory === category
                                ? "bg-white text-black"
                                : "bg-[#272727] text-white hover:bg-[#3f3f3f]"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategoryBar;
