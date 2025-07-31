import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GettingStartedSectionProps {
  title: string;
  subtitle: string;
  steps: StepItem[];
}

interface StepItem {
  number: number;
  title: string;
  description: string;
  image?: string;
  hasButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
}

const GettingStartedSection: React.FC<GettingStartedSectionProps> = ({
  title,
  subtitle,
  steps
}) => {
  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile state based on window width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={`relative bg-figma-black ${isMobile ? 'py-12' : 'py-16'}`}>
      <div className="max-w-figma-content mx-auto px-4">
        <div className={`${isMobile ? 'space-y-8' : 'space-y-16'}`}>

          {/* Section Header */}
          <motion.div
            className={`text-center ${isMobile ? 'space-y-4' : 'space-y-6'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Title */}
            <h2
              className={`font-inter font-medium leading-tight ${isMobile ? 'text-[32px]' : 'text-[56px]'}`}
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #666666 57.69%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {title}
            </h2>

            {/* Subtitle */}
            <p className={`font-inter font-bold text-figma-light-gray max-w-2xl mx-auto ${isMobile ? 'text-[16px]' : 'text-[20px]'}`}>
              {subtitle}
            </p>
          </motion.div>

          {/* Steps Container */}
          <motion.div
            className={`grid lg:grid-cols-2 items-stretch max-w-5xl mx-auto ${isMobile ? 'gap-6' : 'gap-12'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
                viewport={{ once: true }}
              >
                {/* Step Card - Responsive sizing for mobile */}
                <div className={`relative bg-figma-orange-gradient shadow-2xl overflow-hidden mx-auto flex flex-col ${
                  isMobile 
                    ? 'rounded-[24px] p-5 max-w-[340px] h-auto min-h-[500px]' 
                    : 'rounded-[38px] p-8 max-w-[584px] h-[912px]'
                }`}>

                  {/* Step Number */}
                  <motion.div
                    className={isMobile ? 'mb-3' : 'mb-4'}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className={`font-inter font-bold text-figma-white leading-tight ${
                      isMobile ? 'text-[36px]' : 'text-[64px]'
                    }`}>
                      Step {step.number}
                    </span>
                  </motion.div>

                  {/* Step Description */}
                  <div className={`flex-shrink-0 ${isMobile ? 'mb-4' : 'mb-6'}`}>
                    <p className={`font-inter text-[#FAFAFA] leading-relaxed font-normal ${
                      isMobile ? 'text-[16px]' : 'text-[24px]'
                    }`}>
                      {step.number === 1 ? (
                        <>
                          Make sure you have minted the <span className="font-bold">1 million Nads</span> Monad Testnet Nft if you haven't.
                        </>
                      ) : step.number === 2 ? (
                        <>
                          Click Below to start using <span className="font-bold">BikeBot</span> and make sure to connect with the same wallet address used to mint, so you'll get access.
                        </>
                      ) : (
                        step.description
                      )}
                    </p>
                  </div>

                  {/* Step Image/Visual */}
                  <motion.div
                    className={`relative flex-1 flex items-center ${isMobile ? 'mb-4' : 'mb-6'}`}
                    whileHover={{ scale: step.image ? 1.02 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.image ? (
                      <div className={`bg-[#803F00] shadow-inner w-full flex items-center justify-center overflow-hidden ${
                        isMobile 
                          ? 'rounded-[20px] p-4 max-h-[280px]' 
                          : 'rounded-[31px] p-8 max-h-[500px]'
                      }`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={step.image}
                            alt={`Step ${step.number} illustration`}
                            className={`${
                              isMobile 
                                ? 'rounded-[16px] max-w-[90%] max-h-[90%]' 
                                : 'rounded-[24px] max-w-[85%] max-h-[85%]'
                            }`}
                            style={{ 
                              objectFit: 'contain',
                              objectPosition: 'center',
                              display: 'block',
                              width: 'auto',
                              height: 'auto'
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className={`bg-[#803F00] shadow-inner w-full flex items-center justify-center ${
                        isMobile 
                          ? 'rounded-[20px] p-3 min-h-[200px] max-h-[280px]' 
                          : 'rounded-[31px] p-6 min-h-[400px] max-h-[500px]'
                      }`}>
                        <div className="text-[#FAFAFA]/50 text-center">
                          <div className={isMobile ? 'text-[32px] mb-1' : 'text-[48px] mb-2'}>📱</div>
                          <p className={isMobile ? 'text-[12px]' : 'text-[16px]'}>Interface Preview</p>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* CTA Button for Step 2 */}
                  {step.hasButton && step.buttonText && (
                    <motion.div
                      className="mt-auto flex-shrink-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <motion.button
                        onClick={step.onButtonClick}
                        className={`w-full bg-[#45236A] hover:bg-[#45236A]/90 text-figma-white rounded-[100px] transition-all duration-300 border-3 border-[#45236A] ${
                          isMobile ? 'px-4 py-2.5' : 'px-6 py-3'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          boxShadow: 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.4), inset 0px -4px 4px 0px rgba(0, 0, 0, 0.4)'
                        }}
                      >
                        <div className={`flex items-center justify-center ${isMobile ? 'space-x-2' : 'space-x-3'}`}>
                          <div className={`bg-figma-white rounded-full ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                          <span className={`font-medium font-inter ${isMobile ? 'text-[14px]' : 'text-[18px]'}`}>
                            {isMobile ? 'Start Trading' : step.buttonText}
                          </span>
                        </div>
                      </motion.button>
                    </motion.div>
                  )}


                </div>

                {/* Connecting Line (between steps) */}
                {index === 0 && steps.length > 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-[#FC8217] to-transparent opacity-60"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;