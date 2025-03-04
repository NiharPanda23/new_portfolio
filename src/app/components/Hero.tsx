import React from 'react';
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-hidden">
      <Spotlight className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to the Hero Section</h1>
        <p className="mt-4 text-lg text-gray-300">
          Enhance your UI with stunning visuals and animations.
        </p>
      </div>
    </div>
  );
};

export default Hero;
