import React from 'react';
import { motion } from 'framer-motion';

interface TeamSectionProps {
  title: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ title }) => {
  return (
    <section className="relative bg-figma-black py-20">
      <div className="max-w-figma-content mx-auto px-4">
        <div className="flex flex-col items-center space-y-20">
          
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
                background: 'linear-gradient(180deg, #FFFFFF 50%, #666666 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {title}
            </h2>
          </motion.div>

          {/* Team Visual Container - Centered purple rounded rectangle */}
          <motion.div 
            className="relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main Container with Figma Purple Gradient Background */}
            <div 
              className="relative rounded-[53px] overflow-hidden mx-auto border-0"
              style={{
                background: 'linear-gradient(28.9deg, #1B0922 0%, #1B0922 17.62%, #1A0822 81.5%, #1C0923 100%)',
                width: '100%',
                maxWidth: '1012px',
                height: '621px',
                border: 'none',
                outline: 'none',
                borderRadius: '35px'
              }}
            >
              
              {/* Cooking Pot Image - Centered in the purple container */}
              <div className="absolute inset-0 flex justify-center items-center p-8" style={{ background: 'transparent' }}>
                <motion.div 
                  className="relative w-full h-full flex justify-center items-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: 'transparent' }}
                >
                  <img 
                    src="/images/figma-exports/cooking-pot-clean.png"
                    alt="Team Cooking Features"
                    className="w-full h-full max-w-[500px] max-h-[400px] object-contain border-0"
                    style={{ 
                      filter: 'drop-shadow(0 0 0 transparent)',
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                      boxShadow: 'none'
                    }}
                  />
                </motion.div>
              </div>

              {/* BikeBot Logo Overlay - Positioned as in Figma */}
              <motion.div 
                className="absolute bottom-16 left-20 z-10"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="/images/bikebot-logo-460371.png"
                  alt="BikeBot Logo"
                  className="w-16 h-12 object-contain"
                />
              </motion.div>

              {/* Monad Logo - Positioned as in Figma */}
              <motion.div 
                className="absolute top-16 right-20 z-10"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="/images/monad-logo.svg"
                  alt="Monad Logo"
                  className="w-8 h-8 object-contain"
                />
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div 
                className="absolute top-16 left-1/4 w-4 h-4 bg-[#FC7B0D] rounded-full blur-sm opacity-70"
                animate={{ 
                  y: [-8, 8, -8],
                  opacity: [0.5, 0.9, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute bottom-16 right-1/3 w-3 h-3 bg-[#0EAD3A] rounded-full blur-sm opacity-70"
                animate={{ 
                  y: [8, -8, 8],
                  opacity: [0.5, 0.9, 0.5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* Additional floating elements for atmosphere */}
              <motion.div 
                className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#6E54FF] rounded-full blur-sm opacity-60"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>

            {/* Subtle glow effect around the purple container */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B0922]/10 to-[#1C0923]/10 rounded-[53px] blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;