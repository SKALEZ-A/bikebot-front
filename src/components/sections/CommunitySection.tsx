import React from 'react';
import { motion } from 'framer-motion';

interface CommunitySectionProps {
  title: string;
  description: string;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({
  title,
  description
}) => {
  return (
    <section className="relative bg-figma-black py-20">
      <div className="max-w-figma-content mx-auto px-4">
        <div className="flex flex-col items-center space-y-12">
          
          {/* Content Container */}
          <div className="space-y-8 max-w-4xl text-center">
            
            {/* Section Title with Orange "Monad" */}
            <motion.h2 
              className="text-figma-h2 font-inter font-medium leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span 
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 50%, #666666 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Built for the{' '}
              </span>
              <span className="text-figma-orange">Monad</span>
              <span 
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 50%, #666666 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {' '}Community
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-figma-body-large font-inter text-figma-light-gray leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          </div>

          {/* Community Visual - Matching Figma Design Exactly */}
          <motion.div 
            className="relative w-full max-w-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Main Container with rounded corners - exact Figma dimensions */}
            <div className="relative bg-transparent rounded-3xl overflow-hidden shadow-figma-card">
              
              {/* Community Interface Container - exact height from Figma */}
              <div className="relative w-full h-[626px] rounded-3xl overflow-hidden">
                
                {/* Background Image - Monad Community NFTs - properly fitted */}
                <div className="absolute inset-0">
                  <img 
                    src="/images/monad-communities-background-59dff6.png" 
                    alt="Monad Community NFTs"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Bottom brown/dark overlay - matching Figma */}
                <div className="absolute bottom-0 left-0 right-0 h-[73px] bg-figma-bg-community" />

                {/* Bike and Chat Bubble Container - moves together from right to left */}
                <motion.div 
                  className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, x: 300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  animate={{ x: [-150, 150] }}
                  transition={{ 
                    x: { duration: 8, repeat: Infinity, ease: "linear", repeatType: "reverse" },
                    opacity: { duration: 1.2, delay: 0.6 },
                  }}
                >
                  {/* Ground shadow for the bike - positioned on brown floor */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[160px] h-[15px] bg-black/40 rounded-full blur-sm z-0" />
                  
                  {/* BikeBot Logo positioned on the brown floor */}
                  <img 
                    src="/images/bikebot-logo-figma-460371.png" 
                    alt="BikeBot Logo"
                    className="w-[100px] h-[70px] object-contain drop-shadow-lg relative z-10"
                  />

                  {/* Chat Bubble - attached to the bike, positioned at top right */}
                  <div className="absolute -top-[60px] -right-[80px] bg-figma-white rounded-2xl p-3 shadow-lg max-w-[200px] z-20">
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-figma-monad-purple rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-figma-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-figma-text-light leading-tight">
                          Hi, I help them Transact Easily
                        </p>
                      </div>
                    </div>
                    
                    {/* Chat Bubble Tail pointing down towards bike */}
                    <div className="absolute -bottom-2 left-6 w-3 h-3 bg-figma-white transform rotate-45" />
                  </div>
                </motion.div>

                {/* White indicator dot - exact Figma positioning */}
                {/* <motion.div 
                  className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-figma-white rounded-full z-10"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                /> */}
              </div>

              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-figma-monad-purple/10 to-figma-orange/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;