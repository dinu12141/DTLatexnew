import React from 'react';
import { ArrowRight, Play, Award, Globe, Leaf } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-bg" style={{ backgroundImage: `url('/background.jpg')` }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Welcome text */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
              WELCOME TO
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The World of
            <span className="block text-gradient bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              DTLatex
            </span>
            <span className="block text-lg md:text-xl lg:text-2xl font-normal mt-2 opacity-90">
              Since 2024
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            DTLatex is a leading rubber company specializing in premium latex products and innovative rubber solutions. 
            We deliver exceptional quality and sustainable practices, serving diverse industries worldwide with cutting-edge technology and expertise.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">50+</div>
              <div className="text-sm opacity-80">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-80">Natural Latex</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-80">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              OUR BUSINESS SECTORS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 glass-effect rounded-lg p-4">
              <Award className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium">ISO Certified Quality</span>
            </div>
            <div className="flex items-center justify-center space-x-3 glass-effect rounded-lg p-4">
              <Globe className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium">Global Reach</span>
            </div>
            <div className="flex items-center justify-center space-x-3 glass-effect rounded-lg p-4">
              <Leaf className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium">Sustainable Practices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

