import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroSectionProps {
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  subtitle,
  ctaText,
  onCtaClick
}) => {
  const { scrollY } = useScroll();

  // Scroll-based transforms for bike animation (left to center movement)
  const bikeX = useTransform(scrollY, [0, 800], [-200, 0]);
  const bikeOpacity = useTransform(scrollY, [0, 400], [1, 0.8]);

  return (
    <section className="relative h-[750px] md:h-[900px] bg-figma-hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-background-figma.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative blur element - exact Figma positioning */}
      <div className="absolute -left-[468px] -top-[193px] w-[670px] h-[690px] bg-[#150828] rounded-full blur-[500px] opacity-100" />

      {/* Header with Logo - exact Figma positioning with responsive design */}
      <motion.div
        className="absolute top-[47px] left-4 right-4 lg:left-[84px] lg:right-[84px] h-[78px] bg-[#1B083A]/90 backdrop-blur-sm rounded-[50px] border border-[#FC8217] flex items-center justify-between px-4 lg:px-[88px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* BikeBot Logo - properly displayed */}
          <img
            src="/images/bikebot-logo-navbar.png"
            alt="BikeBot Logo"
            className="w-[60px] h-[42px] lg:w-[80px] lg:h-[56px] object-contain"
          />
          <span className="text-[18px] lg:text-[24px] font-inter font-semibold text-white leading-[1.2em]">
            BikeBot
          </span>
        </div>

        {/* CTA Button in Header - responsive */}
        <motion.button
          onClick={onCtaClick}
          className="bg-[#45236A] hover:bg-[#45236A]/80 text-white px-[20px] py-[8px] lg:px-[30px] lg:py-[10px] rounded-[50px] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.4),inset_0px_-4px_4px_rgba(0,0,0,0.4)] transition-all duration-300 flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-[8px] h-[8px] lg:w-[10px] lg:h-[10px] bg-white rounded-full" />
          <span className="text-[14px] lg:text-[18px] font-medium leading-[1.33em]">Start Trading</span>
        </motion.button>
      </motion.div>

      {/* Main Content Container - perfectly centered as in Figma */}
      <div className="absolute top-[162px] left-1/2 transform -translate-x-1/2 w-full max-w-[1488px] flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-[32px] px-4 py-8">

          {/* Main Content Area - centered container with better spacing */}
          <div className="flex flex-col items-center gap-[16px] w-full">

            {/* Main Headline with Monad Logo - professional spacing */}
            <div className="relative w-full max-w-[1200px] h-auto flex items-center justify-center">
              <div className="flex flex-col items-center justify-center text-center px-4 lg:px-8">
                <motion.h1
                  className="text-[32px] sm:text-[44px] lg:text-[64px] font-inter font-semibold text-center leading-[1.1em] w-full max-w-[900px] relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <span
                    style={{
                      background: 'linear-gradient(180deg, #FFFFFF 0%, #666666 57.69%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Easy Interaction With Monad
                  </span>
                  {/* Monad Logo positioned right beside "Monad" text - smaller and better positioned */}
                  <motion.img
                    src="/images/monad-logo-56586a.png"
                    alt="Monad Logo"
                    className="inline-block w-4 h-4 sm:w-5 sm:h-5 lg:w-[32px] lg:h-[32px] object-contain ml-1 lg:ml-2 align-middle"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                  <br />
                  <span
                    style={{
                      background: 'linear-gradient(180deg, #666666 0%, #666666 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Using{' '}
                  </span>
                  <span
                    style={{
                      color: '#FC810D'
                    }}
                  >
                    Bikebot
                  </span>
                </motion.h1>
              </div>
            </div>

            {/* Subtitle - professional spacing and sizing */}
            <motion.p
              className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal text-[#FAFAFA] text-center leading-[1.6em] w-full max-w-[800px] px-4 lg:px-0 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Main CTA Button - smaller outlined design as in Figma */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              onClick={onCtaClick}
              className="w-auto px-8 py-3 bg-transparent hover:bg-[#45236A]/20 text-white rounded-full border-2 border-[#45236A] transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-[12px] h-[12px] bg-[#45236A] rounded-full" />
                <span className="text-[16px] font-medium leading-[1em]">{ctaText}</span>
              </div>
            </motion.button>
          </motion.div>

          {/* BikeBot Motorcycle Animation - better spacing and positioning */}
          <motion.div
            className="relative w-full max-w-[468px] h-[160px] sm:h-[200px] lg:h-[280px] flex justify-center items-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* Single Ground/Road Design - matching Figma exactly */}
            <div className="absolute bottom-0 left-0 w-full">
              {/* Single road surface with subtle styling */}
              <div className="relative w-full h-[15px] lg:h-[20px] bg-gradient-to-r from-gray-800/60 via-gray-700/60 to-gray-800/60 rounded-sm opacity-80">
                {/* Subtle road markings */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] lg:h-[2px] transform -translate-y-1/2">
                  <motion.div
                    className="w-full h-full opacity-40"
                    style={{
                      background: 'repeating-linear-gradient(to right, #FFFFFF 0px, #FFFFFF 15px, transparent 15px, transparent 30px)'
                    }}
                    animate={{
                      x: [0, 30]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Speed Lines - cleaner design matching Figma */}
            <div className="absolute inset-0">
              {/* Horizontal speed lines behind bike - more subtle */}
              <motion.div
                className="absolute bottom-8 sm:bottom-12 lg:bottom-[60px] left-0 w-full h-[2px] lg:h-[4px]"
                animate={{
                  scaleX: [0.6, 1, 0.6],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: 'repeating-linear-gradient(to right, #FFFFFF 0px, #FFFFFF 60px, transparent 60px, transparent 120px)'
                }}
              />
            </div>

            {/* BikeBot Motorcycle - exact Figma positioning with smaller mobile size */}
            <motion.div
              className="relative z-10"
              style={{
                x: bikeX,
                opacity: bikeOpacity
              }}
              animate={{
                y: [-2, 2, -2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src="/images/bikebot-motorcycle-460371.png"
                alt="BikeBot Motorcycle"
                className="w-[240px] h-[160px] sm:w-[320px] sm:h-[220px] lg:w-[420px] lg:h-[300px] object-contain"
              />

              {/* Chat Bubble with "Super Fast Txn" - cleaner positioning */}
              <motion.div
                className="absolute top-[10px] right-[-40px] sm:top-[15px] sm:right-[-50px] lg:top-[20px] lg:right-[-75px] w-[90px] sm:w-[110px] lg:w-[140px] h-[40px] sm:h-[45px] lg:h-[48px] bg-white rounded-[12px] lg:rounded-[16px] flex items-center justify-center shadow-md"
                animate={{
                  scale: [1, 1.03, 1],
                  rotate: [-0.5, 0.5, -0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-[#311C52] text-[11px] sm:text-[13px] lg:text-[14px] font-medium leading-[1.2em] text-center px-2 lg:px-3">
                  Super Fast Txn
                </div>
                {/* Chat bubble tail - cleaner design */}
                <div className="absolute bottom-[-5px] lg:bottom-[-6px] left-[12px] lg:left-[16px] w-0 h-0 border-l-[5px] lg:border-l-[6px] border-r-[5px] lg:border-r-[6px] border-t-[5px] lg:border-t-[6px] border-l-transparent border-r-transparent border-t-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - exact Figma positioning */}
        {/* <motion.div
          className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-[6px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex flex-col items-center">
            <svg className="w-[35px] h-[35px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <svg className="w-[35px] h-[35px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <span className="text-white text-[20px] font-semibold uppercase tracking-wider leading-[0.8em]">Scroll</span>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;