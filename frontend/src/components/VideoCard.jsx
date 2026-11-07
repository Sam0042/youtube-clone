
import { MoreVertical } from "lucide-react";

function VideoCard({ video }) {
    return (
        <article className="group min-w-0 cursor-pointer">
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-[#272727]">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:rounded-none group-hover:scale-105"
                    loading="lazy"
                />

                {/* Duration */}
                <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                    {video.duration}
                </span>
            </div>

            {/* Video Information */}
            <div className="mt-3 flex gap-3">
                {/* Channel Avatar */}
                <img
                    src={video.channelAvatar}
                    alt={video.channel}
                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                    loading="lazy"
                />

                {/* Title and Metadata */}
                <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-white">
                        {video.title}
                    </h3>

                    <p className="mt-1 truncate text-xs text-gray-400">
                        {video.channel}
                    </p>

                    <p className="text-xs text-gray-400">
                        {video.views} · {video.uploadedAt}
                    </p>
                </div>

                {/* More Options */}
                <button
                    aria-label="More video options"
                    className="h-fit shrink-0 rounded-full p-1 text-white hover:bg-[#272727]"
                >
                    <MoreVertical size={20} />
                </button>
            </div>
        </article>
    );
}

export default VideoCard;
