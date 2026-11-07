
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "Programming",
    "React",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Technology",
    "Podcasts",
    "Comedy",
    "Movies",
    "Animation",
    "Sports",
    "Football",
    "Basketball",
    "News",
    "Travel",
    "Food",
    "Cooking",
    "Fitness",
    "Education",
    "Science",
    "Documentaries",
    "Fashion",
    "Beauty",
    "Recently uploaded",
    "Watched",
    "New to you",
];

function CategoryBar() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const scrollRef = useRef(null);

    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;

        setCanScrollLeft(scrollLeft > 1);
        setCanScrollRight(
            scrollLeft + clientWidth < scrollWidth - 1
        );
    };

    const scrollCategories = (direction) => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: direction * 300,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const container = scrollRef.current;

        if (!container) return;

        updateScrollButtons();

        container.addEventListener("scroll", updateScrollButtons);
        window.addEventListener("resize", updateScrollButtons);

        return () => {
            container.removeEventListener("scroll", updateScrollButtons);
            window.removeEventListener("resize", updateScrollButtons);
        };
    }, []);

    return (
        <div className="sticky top-16 z-30 w-full bg-[#0f0f0f] px-3 py-3 md:px-6">
            <div className="relative">

                {/* Scrollable categories */}
                <div
                    ref={scrollRef}
                    className="flex items-center gap-3 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium cursor-pointer transition-colors ${activeCategory === category
                                ? "bg-white text-black"
                                : "bg-[#272727] text-white hover:bg-[#3f3f3f]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Left scroll button */}
                {canScrollLeft && (
                    <button
                        onClick={() => scrollCategories(-1)}
                        aria-label="Scroll categories left"
                        className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f] text-white shadow-lg transition-colors hover:bg-[#3f3f3f] cursor-pointer"
                    >
                        <ChevronLeft size={22} />
                    </button>
                )}

                {/* Right scroll button */}
                {canScrollRight && (
                    <button
                        onClick={() => scrollCategories(1)}
                        aria-label="Scroll categories right"
                        className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f] text-white shadow-lg transition-colors hover:bg-[#3f3f3f] cursor-pointer"
                    >
                        <ChevronRight size={22} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default CategoryBar;
