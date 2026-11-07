
import { useState } from "react";
import { Plus, LoaderCircle } from "lucide-react";

const initialFormData = {
    title: "",
    channel: "",
    channelAvatar: "",
    thumbnail: "",
    views: "",
    uploadedAt: "",
    duration: "",
    category: "",
};

function AddVideoForm({ onVideoCreated, apiUrl }) {
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setMessage("");
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");
        setError("");
        setValidationErrors({});

        try {
            const response = await fetch(`${apiUrl}/api/videos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                if (response.status === 400 && result.errors) {
                    setValidationErrors(result.errors);
                    throw new Error(result.message || "Validation failed.");
                }

                throw new Error(result.message || "Failed to create video.");
            }

            onVideoCreated(result.data);
            setFormData(initialFormData);
            setMessage("Video added successfully!");
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const fields = [
        { name: "title", label: "Video title", placeholder: "Enter video title" },
        { name: "channel", label: "Channel name", placeholder: "Enter channel name" },
        { name: "channelAvatar", label: "Channel avatar URL", placeholder: "https://example.com/avatar.jpg" },
        { name: "thumbnail", label: "Thumbnail URL", placeholder: "https://example.com/thumbnail.jpg" },
        { name: "views", label: "Views", placeholder: "200, 400K, 1M" },
        { name: "uploadedAt", label: "Upload date", placeholder: "1 week ago" },
        { name: "duration", label: "Duration", placeholder: "12:35" },
        { name: "category", label: "Category", placeholder: "Travel" },
    ];

    return (
        <section className="mx-4  rounded-xl border border-[#303030] bg-[#181818] p-5 md:mx-6">
            <h2 className="mb-4 text-lg font-semibold text-white">
                Add a new video
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {fields.map((field) => (
                        <div key={field.name}>
                            <label
                                htmlFor={field.name}
                                className="mb-2 block text-sm text-gray-300"
                            >
                                {field.label}
                            </label>

                            <input
                                id={field.name}
                                type="text"
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                className="w-full rounded-lg border border-[#303030] bg-[#0f0f0f] px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                            />

                            {validationErrors[field.name] && (
                                <p className="mt-1 text-xs text-red-400">
                                    {validationErrors[field.name]}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading ? (
                        <>
                            <LoaderCircle size={18} className="animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            <Plus size={18} />
                            Add video
                        </>
                    )}
                </button>

                {message && (
                    <p className="text-sm text-green-400">{message}</p>
                )}

                {error && (
                    <p className="text-sm text-red-400">{error}</p>
                )}
            </form>
        </section>
    );
}

export default AddVideoForm;
