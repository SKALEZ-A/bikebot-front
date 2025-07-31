import React from 'react';
import { motion } from 'framer-motion';

interface SocialSectionProps {
  title: string;
  description: string;
}

const SocialSection: React.FC<SocialSectionProps> = () => {
  return (
    <section
      className="relative overflow-hidden lg:min-h-[1061px] min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #282828 0%, #060606 100%)'
      }}
      aria-labelledby="social-section-title"
      role="region"
    >
      {/* Desktop Layout - Exact Figma positioning */}
      <div className="hidden lg:block relative w-full h-[1061px]">

        {/* Purple Half-Circle - Left side only as per Figma */}
        <motion.div
          className="absolute left-0 top-0 w-[600px] h-[1061px] overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {/* Half Circle Shape */}
          <div
            className="absolute -left-[300px] top-[80px] w-[600px] h-[600px] rounded-full"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 50%, #4C1D95 100%)'
            }}
          />
        </motion.div>

        {/* Main Content Container */}
        <div className="absolute left-[120px] top-[180px] w-[800px]">
          {/* Main Title - Positioned on the half-circle */}
          <motion.h2
            id="social-section-title"
            className="font-helvetica font-normal text-[72px] leading-[1.1] mb-[40px] max-w-[500px]"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Meet the<br />
            worldwide<br />
            community.
          </motion.h2>

          {/* Description Text */}
          <motion.p
            className="font-dm-sans text-[24px] leading-[1.4] text-white/90 max-w-[480px] mb-[60px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Join a fast-growing community of Bikeboters and innovators connected all over the world, for faster Monad interaction
          </motion.p>
        </div>

        {/* Right Side - Social Media Links */}
        <motion.div
          className="absolute right-[120px] top-[240px] w-[600px] space-y-[80px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >

          {/* Telegram Card */}
          <motion.div
            className="flex items-center group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
          >
            <a
              href="https://t.me/bikebot_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full"
              aria-label="Join BikeBot Telegram Community"
            >
              {/* Telegram Icon */}
              <div className="flex-shrink-0 mr-[24px]">
                <div className="w-[60px] h-[60px] rounded-xl bg-[#0088cc] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-[32px] h-[32px]" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.24-.02.38z"/>
                  </svg>
                </div>
              </div>

              {/* Telegram Content */}
              <div className="flex-1">
                <div className="flex items-center mb-[8px]">
                  <h3 className="font-dm-sans font-bold text-[32px] text-white mr-[12px]">
                    Telegram
                  </h3>
                  <motion.svg 
                    className="w-[20px] h-[20px]" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </div>
                <p className="font-dm-sans text-[18px] leading-[1.4] text-white/70 max-w-[400px]">
                  Join the only Bikebot Telegram Community to get the latest news and updates from across the ecosystem.
                </p>
              </div>
            </a>
          </motion.div>

          {/* X (Twitter) Card */}
          <motion.div
            className="flex items-center group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
          >
            <a
              href="https://twitter.com/Bikebot_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full"
              aria-label="Follow BikeBot on X (formerly Twitter)"
            >
              {/* X Icon */}
              <div className="flex-shrink-0 mr-[24px]">
                <div className="w-[60px] h-[60px] bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <svg className="w-[28px] h-[28px]" viewBox="0 0 24 24" fill="#D0D0D0">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </div>

              {/* X Content */}
              <div className="flex-1">
                <div className="flex items-center mb-[8px]">
                  <h3 className="font-dm-sans font-bold text-[32px] text-white mr-[12px]">
                    X (Formerly Twitter)
                  </h3>
                  <motion.svg 
                    className="w-[20px] h-[20px]" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </div>
                <p className="font-dm-sans text-[18px] leading-[1.4] text-white/70 max-w-[400px]">
                  Follow @Bikebot_xyz to get the latest news and updates from across the ecosystem.
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Footer - Bottom center */}
        <motion.div
          className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-[12px]">
            <span className="font-dm-sans text-[20px] text-white/80">
              Built by - Team BikeBot with
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-[24px] h-[22px]" viewBox="0 0 30 26" fill="#CD3642">
                <path d="M15 25.35l-1.45-1.32C8.4 19.36 5 16.28 5 12.5 5 9.42 7.42 7 10.5 7c1.74 0 3.41.81 4.5 2.09C16.09 7.81 17.76 7 19.5 7 22.58 7 25 9.42 25 12.5c0 3.78-3.4 6.86-8.55 11.54L15 25.35z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden relative min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 max-w-6xl mx-auto px-4 py-20">
          <div className="space-y-16">

            {/* Mobile Content */}
            <motion.div
              className="text-center space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Mobile Title */}
              <h2
                className="font-helvetica font-normal text-4xl md:text-6xl leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.44) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Meet the worldwide community.
              </h2>

              {/* Mobile Description */}
              <p className="font-dm-sans text-lg md:text-xl leading-relaxed text-white max-w-2xl mx-auto">
                Join a fast-growing community of Bikeboters and innovators connected all over the world, for faster Monad interaction
              </p>
            </motion.div>

            {/* Mobile Social Links */}
            <div className="space-y-8">

              {/* Mobile Telegram */}
              <motion.a
                href="https://t.me/bikebot_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-6 p-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.24-.02.38z"
                        fill="#0088cc"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-dm-sans font-bold text-xl md:text-2xl text-white mb-2">
                      Telegram
                    </h3>
                    <p className="font-dm-sans text-sm md:text-base text-white/70 leading-relaxed">
                      Join the only Bikebot Telegram Community to get the latest news and updates from across the ecosystem.
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Mobile X (Twitter) */}
              <motion.a
                href="https://twitter.com/Bikebot_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-6 p-4">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20 flex-shrink-0">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#D0D0D0">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-dm-sans font-bold text-xl md:text-2xl text-white mb-2">
                      X (Formerly Twitter)
                    </h3>
                    <p className="font-dm-sans text-sm md:text-base text-white/70 leading-relaxed">
                      Follow @Bikebot_xyz to get the latest news and updates from across the ecosystem.
                    </p>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Sticky Footer - Always at bottom */}
        <motion.div
          className="mt-auto py-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center space-x-3">
              <span className="font-dm-sans text-base md:text-lg text-white/80">
                Built by - Team BikeBot with
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 30 26" fill="#CD3642">
                  <path d="M15 25.35l-1.45-1.32C8.4 19.36 5 16.28 5 12.5 5 9.42 7.42 7 10.5 7c1.74 0 3.41.81 4.5 2.09C16.09 7.81 17.76 7 19.5 7 22.58 7 25 9.42 25 12.5c0 3.78-3.4 6.86-8.55 11.54L15 25.35z" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Background Sphere - Subtle */}
        <motion.div
          className="absolute -left-32 top-0 w-64 h-64 opacity-20 pointer-events-none"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'linear-gradient(180deg, #673E8A 63.94%, #1F1133 100%)'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;