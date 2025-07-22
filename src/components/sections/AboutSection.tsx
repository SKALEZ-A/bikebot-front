import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  title: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description
}) => {
  return (
    <section className="relative bg-figma-black py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-16 w-96 h-96 bg-figma-hero-start rounded-full blur-figma-large opacity-20" />
        <div className="absolute right-1/4 bottom-16 w-64 h-64 bg-figma-monad-purple rounded-full blur-figma-medium opacity-15" />
      </div>

      <div className="relative z-10 max-w-figma-content mx-auto px-4">
        <div className="flex flex-col items-center space-y-24">
          
          {/* Section Title */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-figma-h2 font-inter font-medium leading-tight"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #666666 57.69%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {title}
            </h2>
          </motion.div>

          {/* Main Content Container */}
          <motion.div 
            className="w-full max-w-5xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Dark Card Container */}
            <div className="relative">
              {/* Outer Card with Gradient Border Effect */}
              <div className="bg-figma-dark-card rounded-figma-card p-6 shadow-figma-card border border-figma-text-secondary/10">
                
                {/* Inner Card */}
                <div className="bg-figma-card-dark rounded-figma-small p-8 shadow-figma-feature">
                  
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                      <p className="text-figma-body-medium font-inter text-figma-text-secondary leading-relaxed">
                        {description}
                      </p>
                      
                      {/* Mission Statement */}
                      <div className="border-l-4 border-figma-orange pl-6">
                        <p className="text-figma-body-medium font-inter text-figma-light-gray leading-relaxed italic">
                          Our mission is to bridge the gap between decentralized infrastructure and user-friendly tools, 
                          making Web3 access as easy as sending a message. Built for speed, optimized for Monad, 
                          and powered by community feedback — BikeBot is your gateway to blockchain interaction, reimagined.
                        </p>
                      </div>
                    </div>

                    {/* BikeBot Motorcycle Visual */}
                    <div className="flex-shrink-0 w-full lg:w-auto">
                      <motion.div 
                        className="relative"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {/* BikeBot Motorcycle Container with Purple Gradient Background */}
                        <div className="relative w-full max-w-sm mx-auto lg:w-80 lg:h-80 h-64 flex items-center justify-center rounded-3xl overflow-hidden">
                          {/* Purple Gradient Background - matching Figma design */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 opacity-90"></div>
                          
                          {/* Animated Speed Lines - across the entire background */}
                          <div className="absolute inset-0 overflow-hidden">
                            <motion.div 
                              className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              animate={{ x: [-100, 100] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div 
                              className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: [-100, 100] }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                            />
                            <motion.div 
                              className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              animate={{ x: [-100, 100] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1 }}
                            />
                            <motion.div 
                              className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                              animate={{ x: [-100, 100] }}
                              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.8 }}
                            />
                            <motion.div 
                              className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                              animate={{ x: [-100, 100] }}
                              transition={{ duration: 1.9, repeat: Infinity, ease: "linear", delay: 1.2 }}
                            />
                          </div>
                          
                          {/* Motorcycle Image - positioned naturally without white circle */}
                          <div className="relative z-10 flex items-center justify-center">
                            <img 
                              src="/images/bikebot-motorcycle-460371.png" 
                              alt="BikeBot Motorcycle"
                              className="w-48 h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl"
                            />
                          </div>
                        </div>

                        {/* Floating Decorative Elements */}
                        <motion.div 
                          className="absolute -top-4 -right-4 w-8 h-8 bg-figma-orange rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        <motion.div 
                          className="absolute -bottom-4 -left-4 w-6 h-6 bg-figma-green rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-figma-monad-purple/5 to-figma-orange/5 rounded-figma-card blur-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;