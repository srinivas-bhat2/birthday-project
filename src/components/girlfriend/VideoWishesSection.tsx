import { useState } from "react";
import { useVideoWishes } from "../../hooks/useVideoWishes";
import VideoWishCard from "./VideoWishCard";
import { Loader, StepBack, SkipForward, StepForward } from "lucide-react";

export default function VideoWishesSection() {
  const { wishes, loading } = useVideoWishes();

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  // Calculate the end index for the videos to display
  const visibleWishes = wishes.slice(currentIndex, currentIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < wishes.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader className="w-8 h-8 text-red-500 animate-spin" />
      </div>
    );
  }

  if (wishes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 font-handwriting text-xl">
          No video wishes yet. Your friends will add them soon! 💝
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Render visible video wishes */}
        {visibleWishes.map((wish) => (
          <VideoWishCard key={wish.id} wish={wish} />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-gray-800 text-white p-4 text-3xl rounded-full hover:bg-gray-500 disabled:opacity-50"
        >
       <StepBack />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= wishes.length}
          className="bg-gray-800 text-white p-4 text-3xl rounded-full hover:bg-gray-700 disabled:opacity-50"
        >
          <StepForward />
        </button>
      </div>
    </div>
  );
}
