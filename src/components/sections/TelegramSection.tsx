import React from 'react';
import { motion } from 'framer-motion';

interface TelegramSectionProps {
  title: string;
  features: string[];
}

const TelegramSection: React.FC<TelegramSectionProps> = () => {
  return (
    <section className="relative min-h-[800px] lg:h-[1387px] bg-black overflow-hidden mt-[8rem] ">
      {/* Background Image - exact Figma positioning */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-background-figma.png"
          alt="Background"
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.114)' }}
        />
      </div>

      {/* Blurred Artboard background element - exact Figma positioning */}
      <div
        className="absolute -left-[178px] top-[508px] w-[473px] h-[372px] blur-[18px] opacity-100"
        style={{
          backgroundImage: 'url(/images/bikebot-logo-460371.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Monad Logo (blurred background) - adjusted to match Figma design */}
      <div className="absolute right-[126px] top-[916px] w-[120px] h-[120px] blur-[10px] opacity-70">
        <img
          src="/images/monad-logo-56586a.png"
          alt="Monad Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content Container - centered and responsive */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[700px] sm:min-h-[900px] lg:min-h-[1200px] flex flex-col items-center justify-center">

          {/* Title and Telegram Icon Container - Centered */}
          <div className="w-full text-center pb-8 sm:pb-12">
            {/* Section Title - Two Lines as in Figma */}
            <motion.h2
              className="text-[32px] sm:text-[48px] lg:text-[72px] font-inter font-medium leading-[1em] mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
                <span
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 50%, #666666 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Power up your{' '}
                </span>
                <span style={{ color: '#FCA017' }}>
                  Monad
                </span>
                <span
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 50%, #666666 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  experience
                </span>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-2">
                <span
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 50%, #666666 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  directly from Telegram
                </span>
                {/* Telegram Icon Inline */}
                <span className="inline-block w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] lg:w-[70px] lg:h-[70px] bg-gradient-to-br from-[#37BBFE] to-[#007DBB] rounded-[12px] sm:rounded-[18px] lg:rounded-[25px] flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.61 7.548c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.42 4.45-4.02c.19-.17-.04-.27-.3-.1L9.28 13.47l-2.38-.75c-.52-.16-.53-.52.11-.77l9.28-3.58c.43-.16.81.11.67.73z" />
                  </svg>
                </span>
              </div>
            </motion.h2>
          </div>

          {/* Center - Phone Interface with Dashed Border */}
          <motion.div
            className="flex justify-center items-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Dashed Border Container - Responsive Dimensions */}
            <div
              className="relative w-[300px] h-[560px] sm:w-[400px] sm:h-[750px] lg:w-[545px] lg:h-[1013px] rounded-[35px] sm:rounded-[50px] lg:rounded-[75px] mx-auto"
              style={{
                background: 'rgba(69, 35, 106, 0.03)',
                border: '3px dashed #FCA017'
              }}
            >
              {/* Phone Interface - Fill Container Completely */}
              <div className="absolute inset-[6px] flex items-center justify-center overflow-hidden rounded-[29px] sm:rounded-[44px] lg:rounded-[69px]">
                <img
                  src="/images/telegram-interface-figma.png"
                  alt="Telegram Bot Interface"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Feature Tags positioned around the phone */}

              {/* "Good for all Monad trades" - Top Right - Adjusted to match Figma */}
              <motion.div
                className="absolute -top-2 -right-4 sm:-top-4 sm:-right-8 lg:-top-6 lg:-right-12 bg-[#6E54FF] text-white px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-full text-[10px] sm:text-[16px] lg:text-[20px] font-medium leading-[1em] shadow-lg whitespace-nowrap"
                style={{
                  boxShadow: '0px 0px 0px 1px rgba(79, 71, 235, 1), 0px 1px 2px 0px rgba(26, 19, 161, 0.5), inset 0px 1px 0.5px 0px rgba(255, 255, 255, 0.33)'
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                Good for all Monad trades
              </motion.div>

              {/* "Easy to Use" - Left Middle - Adjusted to match Figma */}
              <motion.div
                className="absolute -left-6 top-1/2 sm:-left-10 lg:-left-14 lg:top-[458px] bg-[#FCA017] text-white px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-full text-[12px] sm:text-[16px] lg:text-[20px] font-medium leading-[1em] whitespace-nowrap"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                Easy to Use
              </motion.div>

              {/* "Fast" - Bottom Right - Adjusted to match Figma */}
              <motion.div
                className="absolute -right-4 -bottom-6 sm:-right-6 sm:-bottom-8 lg:-right-8 lg:-bottom-12 bg-[#0EAD3A] text-white px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-full text-[12px] sm:text-[16px] lg:text-[20px] font-medium leading-[1em] whitespace-nowrap"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                Fast
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TelegramSection;