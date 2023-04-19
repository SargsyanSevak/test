import React, { useRef } from 'react';
import { FaPlay,FaPause } from 'react-icons/fa';
interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

  return (
    <div className='w-20 h-20 gap-4 flex justify-center items-center absolute bottom-0 audio_player'>
      <audio src={src} ref={audioRef} />
      <FaPlay  onClick={handlePlay}  className='text-white hover:text-teal-400 cursor-pointer transition-all'/>
      <FaPause onClick={handlePause} className='text-white hover:text-teal-400 cursor-pointer transition-all'/>
    </div>
  );
};

export default AudioPlayer;