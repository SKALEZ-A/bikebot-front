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
    <section className="relative h-[884px] bg-figma-hero-gradient overflow-hidden">
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

      {/* Header with Logo - exact Figma positioning */}
      <motion.div
        className="absolute top-[47px] left-[84px] right-[84px] h-[78px] bg-[#1B083A]/90 backdrop-blur-sm rounded-[50px] border border-[#FC8217] flex items-center justify-between px-[88px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-4">
          {/* BikeBot Logo */}
          <img
            src="/images/bikebot-logo-460371.png"
            alt="BikeBot Logo"
            className="w-[80px] h-[56px] object-contain"
          />
          <span className="text-[24px] font-inter font-semibold text-white leading-[3em]">
            BikeBot
          </span>
        </div>

        {/* CTA Button in Header */}
        <motion.button
          onClick={onCtaClick}
          className="bg-[#45236A] hover:bg-[#45236A]/80 text-white px-[30px] py-[10px] rounded-[50px] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.4),inset_0px_-4px_4px_rgba(0,0,0,0.4)] transition-all duration-300 flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-[10px] h-[10px] bg-white rounded-full" />
          <span className="text-[18px] font-medium leading-[1.33em]">Start Trading</span>
        </motion.button>
      </motion.div>

      {/* Main Content Container - responsive with Figma positioning */}
      <div className="absolute top-[162px] left-4 right-4 lg:left-[121px] lg:right-[121px] lg:w-[1488px] flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-[48px] px-4 py-12">

          {/* Main Content Area */}
          <div className="flex flex-col items-center gap-[2px]">

            {/* Main Headline with Monad Logo - responsive Figma layout */}
            <div className="relative w-full max-w-[1456px] h-auto lg:h-[192px] flex items-center justify-center">
              <div className="flex flex-col items-center px-2 lg:px-[8px]">
                <motion.h1
                  className="text-3xl sm:text-5xl lg:text-[72px] font-inter font-semibold text-center leading-[1em] w-full max-w-[1019px]"
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #666666 57.69%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Easy Interaction With Monad<br />Using Bikebot
                </motion.h1>
              </div>

              {/* Monad Logo positioned exactly as in Figma */}
              <motion.div
                className="absolute right-2 sm:right-4 lg:right-[20px] top-2 sm:top-4 lg:top-[20px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <img
                  src="/images/monad-logo-56586a.png"
                  alt="Monad Logo"
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-[64px] lg:h-[64px] object-contain"
                />
              </motion.div>
            </div>

            {/* Subtitle - responsive Figma styling */}
            <motion.p
              className="text-lg sm:text-xl lg:text-[24px] font-inter font-normal text-[#FAFAFA] text-center leading-[2.04em] w-full max-w-[1019px] px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Main CTA Button - responsive Figma styling */}
          <motion.div
            className="flex justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              onClick={onCtaClick}
              className="w-full sm:w-auto max-w-[508px] h-[88px] bg-[#45236A] hover:bg-[#45236A]/90 text-white rounded-[100px] border-[3px] border-[#45236A] transition-all duration-300 flex items-center justify-center px-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-[20px] h-[20px] bg-white rounded-full" />
                <span className="text-lg sm:text-xl lg:text-[24px] font-medium leading-[1em]">{ctaText}</span>
              </div>
            </motion.button>
          </motion.div>

          {/* BikeBot Motorcycle Animation - responsive Figma positioning */}
          <motion.div
            className="relative w-full max-w-[468px] h-[200px] sm:h-[250px] lg:h-[325px] flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* Speed Lines - responsive positioning */}
            <div className="absolute inset-0">
              {/* Horizontal speed lines */}
              <motion.div
                className="absolute bottom-8 sm:bottom-12 lg:top-[263px] left-0 w-full h-[1px] lg:h-[7px]"
                animate={{
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: 'repeating-linear-gradient(to right, #FFFFFF 0px, #FFFFFF 84px, transparent 84px, transparent 168px)'
                }}
              />
            </div>

            {/* BikeBot Motorcycle - responsive positioning */}
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
                className="w-full h-full max-w-[468px] max-h-[325px] object-contain"
              />

              {/* Chat Bubble with "Super Fast Txn" - responsive positioning */}
              <motion.div
                className="absolute -top-4 sm:-top-6 lg:top-[11px] -right-12 sm:-right-16 lg:left-[624px] w-[120px] sm:w-[140px] lg:w-[165px] h-[60px] sm:h-[80px] lg:h-[100px] bg-white rounded-[20px] flex items-center justify-center shadow-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [-1, 1, -1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-[#311C52] text-sm sm:text-base lg:text-[16px] font-medium leading-[1.5em] text-center px-2 lg:px-[14px] py-1 lg:py-[8px]">
                  Super Fast Txn
                </div>
                {/* Chat bubble tail */}
                <div className="absolute bottom-[-8px] left-[20px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - exact Figma positioning */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;