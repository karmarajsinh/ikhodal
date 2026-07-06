import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import type { DevotionalTrack } from '../types';
import { DEVOTIONAL_TRACKS } from '../data/devotionalData';

interface AudioContextType {
  isPlaying: boolean;
  currentTrack: DevotionalTrack | null;
  playbackProgress: number; // Current playback time in seconds
  duration: number; // Total duration in seconds
  volume: number; // 0 to 1
  isMuted: boolean;
  trackQueue: DevotionalTrack[];
  playTrack: (track: DevotionalTrack, queue?: DevotionalTrack[]) => void;
  pauseTrack: () => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setVolume: (vol: number) => void;
  setIsMuted: (muted: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<DevotionalTrack | null>(null);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [trackQueue, setTrackQueue] = useState<DevotionalTrack[]>(DEVOTIONAL_TRACKS);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const onTimeUpdate = () => {
      setPlaybackProgress(audio.currentTime);
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const onEnded = () => {
      nextTrack();
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, [trackQueue, currentTrack]);

  // Handle volume and mute status updates
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Handle currentTrack source and play/pause status changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (!currentTrack) {
      audioRef.current.pause();
      return;
    }

    const sourceChanged = audioRef.current.src !== currentTrack.audioUrl;
    if (sourceChanged) {
      audioRef.current.src = currentTrack.audioUrl;
      audioRef.current.load();
    }

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn('Audio playback failed or was interrupted: ', err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [currentTrack, isPlaying]);

  const playTrack = (track: DevotionalTrack, queue?: DevotionalTrack[]) => {
    if (queue) {
      setTrackQueue(queue);
    }
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!currentTrack && trackQueue.length > 0) {
      setCurrentTrack(trackQueue[0]);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setPlaybackProgress(time);
    }
  };

  const nextTrack = () => {
    if (!currentTrack || trackQueue.length === 0) return;
    const currentIndex = trackQueue.findIndex((t) => t.id === currentTrack.id);
    if (currentIndex !== -1 && currentIndex < trackQueue.length - 1) {
      setCurrentTrack(trackQueue[currentIndex + 1]);
      setIsPlaying(true);
    } else {
      // Loop to beginning
      setCurrentTrack(trackQueue[0]);
      setIsPlaying(true);
    }
  };

  const prevTrack = () => {
    if (!currentTrack || trackQueue.length === 0) return;
    const currentIndex = trackQueue.findIndex((t) => t.id === currentTrack.id);
    if (currentIndex !== -1 && currentIndex > 0) {
      setCurrentTrack(trackQueue[currentIndex - 1]);
      setIsPlaying(true);
    } else {
      // Go to last
      setCurrentTrack(trackQueue[trackQueue.length - 1]);
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        currentTrack,
        playbackProgress,
        duration,
        volume,
        isMuted,
        trackQueue,
        playTrack,
        pauseTrack,
        togglePlay,
        seek,
        nextTrack,
        prevTrack,
        setVolume,
        setIsMuted,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
