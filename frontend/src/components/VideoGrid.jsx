
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import AddVideoForm from "./AddVideoForm";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function VideoSkeleton() {
    return (
        <div className="animate-pulse">
            {/* Thumbnail skeleton */}
            <div className="aspect-video rounded-xl bg-[#272727]" />

            {/* Video information skeleton */}
            <div className="mt-3 flex gap-3">
                {/* Channel avatar */}
                <div className="h-9 w-9 shrink-0 rounded-full bg-[#272727]" />

                <div className="flex-1 space-y-2 pt-1">
                    {/* Video title */}
                    <div className="h-3 w-11/12 rounded bg-[#272727]" />
                    <div className="h-3 w-8/12 rounded bg-[#272727]" />

                    {/* Channel name */}
                    <div className="h-2.5 w-5/12 rounded bg-[#272727]" />

                    {/* Views and upload date */}
                    <div className="h-2.5 w-7/12 rounded bg-[#272727]" />
                </div>
            </div>
        </div>
    );
}

function VideoGrid() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchVideos = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${API_URL}/api/videos`);

            if (!response.ok) {
                throw new Error("Failed to fetch videos.");
            }

            const result = await response.json();

            if (!result.success || !Array.isArray(result.data)) {
                throw new Error("Invalid response from the server.");
            }

            setVideos(result.data);
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    const handleVideoCreated = (newVideo) => {
        setVideos((prevVideos) => [newVideo, ...prevVideos]);
    };

    return (
        <>
            <AddVideoForm
                apiUrl={API_URL}
                onVideoCreated={handleVideoCreated}
            />

            {loading ? (
                <section className="grid grid-cols-1 gap-x-4 gap-y-8 px-4 pb-8 sm:grid-cols-2 md:px-6 lg:grid-cols-3 2xl:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <VideoSkeleton key={index} />
                    ))}
                </section>
            ) : error ? (
                <div className="flex flex-col items-center justify-center gap-4 py-20">
                    <p className="text-red-400">{error}</p>

                    <button
                        onClick={fetchVideos}
                        className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-200"
                    >
                        Retry
                    </button>
                </div>
            ) : videos.length === 0 ? (
                <div className="py-20 text-center text-gray-400">
                    No videos found.
                </div>
            ) : (
                <section className="grid grid-cols-1 gap-x-4 gap-y-8 px-4 pb-8 sm:grid-cols-2 md:px-6 lg:grid-cols-3 2xl:grid-cols-4">
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </section>
            )}
        </>
    );
}

export default VideoGrid;
