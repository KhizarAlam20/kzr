import React, { useRef, useState } from 'react';

export default function Video({
    getBackgroundColor,
    getTextColor,
    handleMouseEnter,
    handleMouseLeave,
}) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const updateProgress = () => {
        setCurrentTime(videoRef.current.currentTime);
        setDuration(videoRef.current.duration);
    };

    const handleSeek = (e) => {
        const seekTo = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
        videoRef.current.currentTime = seekTo;
    };

    return (
        <div
            className="style-links col-span-5 relative w-full overflow-hidden rounded-[10px] h-[32vh] hover:scale-95 hover:mr-3 transition-all duration-1000 ease-in-out hover:shadow-lg"
            style={{
                backgroundColor: getBackgroundColor(4),
                color: getTextColor(4),
                marginTop: "-23vh",
            }}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                onTimeUpdate={updateProgress}
                src={require('../assets/video2.mp4')}
                onClick={togglePlay}
            >
                Your browser does not support the video tag.
            </video>

            {/* Custom Controls */}
            <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-between z-10">
                <button
                    className="text-white"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>

                <div className="flex items-center space-x-2">
                    <span className="text-white">{Math.floor(currentTime)}</span>
                    <div
                        className="relative w-[100px] h-2 bg-gray-600 rounded-full cursor-pointer"
                        onClick={handleSeek}
                    >
                        <div
                            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                            style={{
                                width: `${(currentTime / duration) * 100}%`,
                            }}
                        />
                    </div>
                    <span className="text-white">{Math.floor(duration)}</span>
                </div>

                <button className="text-white" aria-label="Mute/Unmute">
                    🔊
                </button>
            </div>
        </div>
    );
}
