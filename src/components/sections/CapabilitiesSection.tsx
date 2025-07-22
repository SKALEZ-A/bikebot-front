import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface CapabilitiesSectionProps {
  title: string;
}

const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = () => {
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

  // Refs for scroll-triggered animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Animation for cards spreading out on scroll
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  // Card container variants
  const cardContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  // Individual card variants - different for mobile and desktop
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: (i: number) => ({
      opacity: 1,
      y: isMobile ? i * 70 : i * 100, // Consistent spacing between cards
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Feature cards data with exact positioning from Figma
  // Using the exact padding values from the Figma layout
  const featureCards = [
    {
      icon: "★",
      color: "#FC7B0D", // Orange
      text: "View wallet balances",
      paddingLeft: "0px", // First card has no left padding
    },
    {
      icon: "★",
      color: "#552396", // Purple
      text: "Send & receive testnet tokens",
      paddingLeft: "100px", // Second card has 100px left padding
    },
    {
      icon: "★",
      color: "#0EAD3A", // Green
      text: "Interact with smart contracts",
      paddingLeft: "200px", // Third card has 200px left padding
    },
    {
      icon: "★",
      color: "#000000", // Black
      text: "Check transaction Status",
      paddingLeft: "300px", // Fourth card has 300px left padding
    },
    {
      icon: "★",
      color: "#FFFFFF", // White
      text: "Get Monad network stats",
      paddingLeft: "400px", // Fifth card has 400px left padding
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-black py-20 overflow-hidden min-h-[900px]">
      {/* 3D Blue Icosahedron - Positioned exactly as in Figma */}
      <div className="absolute left-0 lg:-left-[150px] top-[120px] lg:top-[180px]">
        {/* Blue glow background - Sized to match Figma */}
        <div className="absolute left-0 top-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-[rgba(6,12,162,0.25)] blur-[60px] sm:blur-[80px] lg:blur-[120px]"></div>

        {/* 3D Icosahedron - Sized to match Figma */}
        <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px]">
          <img
            src="/images/blue-icosahedron.png"
            alt="3D Blue Icosahedron"
            className="w-full h-full object-contain brightness-125"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Section Title - Exact Figma styling */}
          <motion.h2
            className="text-[32px] sm:text-[48px] lg:text-[72px] font-inter font-medium leading-[1.1em] mb-20 text-center"
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
              What Can You Do With <span style={{ color: '#FCA017', WebkitTextFillColor: '#FCA017' }}>BikeBot</span>
            </span>
          </motion.h2>

          {/* Feature Cards - Positioned to the right of hexagon with proper spacing */}
          <div className="w-full max-w-[1400px] mt-8 relative">
            <motion.div
              className="relative"
              variants={cardContainerVariants}
              initial="hidden"
              animate={controls}
              style={{
                height: isMobile ? '600px' : '700px',
                marginLeft: isMobile ? '0' : '400px' // Push cards to the right on desktop to avoid hexagon overlap
              }}
            >
              {/* Dynamically generate feature cards */}
              {featureCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="absolute top-0 w-full"
                  custom={index}
                  variants={cardVariants}
                >
                  {/* Apply different styling for mobile and desktop */}
                  {isMobile ? (
                    // Mobile layout - centered cards
                    <div
                      className="flex items-center gap-4 bg-[#16171A] rounded-[16px] py-3 px-4 mx-auto w-[95%]"
                    >
                      <div className="flex-shrink-0 text-[18px] mr-2" style={{ color: card.color }}>
                        {card.icon}
                      </div>
                      <span className="text-[16px] text-[#FAFAFA] font-normal">
                        {card.text}
                      </span>
                    </div>
                  ) : (
                    // Desktop layout - staggered cards with increasing left padding, positioned to the right of hexagon
                    <div
                      className="flex flex-col"
                      style={{ paddingLeft: card.paddingLeft }} // Apply exact padding from Figma
                    >
                      <div
                        className="flex items-center gap-6 bg-[#16171A] rounded-[27px] py-6 px-10"
                        style={{
                          transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`, // Subtle slant alternating direction
                          width: 'fit-content', // Width based on content
                          boxShadow: 'inset 0px 11px 5.3px 0px rgba(14, 16, 15, 1)' // Exact shadow from Figma
                        }}
                      >
                        <div className="flex-shrink-0 text-[26px] mr-2" style={{ color: card.color }}>
                          {card.icon}
                        </div>
                        <span className="text-[20px] text-[#FAFAFA] font-normal">
                          {card.text}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Spacer to maintain section height */}
            <div className="h-[15px] sm:h-[20px] lg:h-[35px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;