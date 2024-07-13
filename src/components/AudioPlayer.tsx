import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"

import sakura from "@/assets/sakura.mp3";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const AudioPlaying = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
]


const AudioPlayer = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.03;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const handleClick = () => {
    if (!isPlayingMusic) {
      setIsPlayingMusic(true);
    } else {
    setIsPlayingMusic(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {!isPlayingMusic ? (
          <div className="w-[2rem] h-[2rem]">
            <img 
              src="/assets/icons/audio.svg"
              className="w-full h-full invert-white"
            /> 
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            {AudioPlaying.map((stroke, i) => (
              <motion.span
                key={stroke.id} 
                animate={{
                  height: [10,20,10],
                }}
                transition={{
                  delay: 0 + i * 0.3,
                  duration: 1.1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-[2px] bg-white"
              />
            ))}
          </div>
        )}
      </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    
  );
};

export default AudioPlayer;