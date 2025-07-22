import React from 'react';
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
  return (
    <section className="relative bg-figma-black py-16">
      <div className="max-w-figma-content mx-auto px-4">
        <div className="space-y-16">

          {/* Section Header */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Title */}
            <h2
              className="text-[56px] font-inter font-medium leading-tight"
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
            <p className="text-[20px] font-inter font-bold text-figma-light-gray max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* Steps Container */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto"
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
                {/* Step Card - Made smaller and more professional with consistent height */}
                <div className="relative bg-figma-orange-gradient rounded-[38px] p-8 shadow-2xl overflow-hidden max-w-[584px] h-[912px] mx-auto flex flex-col">

                  {/* Step Number */}
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-[64px] font-inter font-bold text-figma-white leading-tight">
                      Step {step.number}
                    </span>
                  </motion.div>

                  {/* Step Description */}
                  <div className="mb-6 flex-shrink-0">
                    <p className="text-[24px] font-inter text-[#FAFAFA] leading-relaxed font-normal">
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
                    className="relative mb-6 flex-1 flex items-center"
                    whileHover={{ scale: step.image ? 1.02 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.image ? (
                      <div className="bg-[#803F00] rounded-[31px] p-6 shadow-inner w-full max-h-[500px]">
                        <img
                          src={step.image}
                          alt={`Step ${step.number} illustration`}
                          className="w-full h-auto object-contain rounded-[27px] max-h-[450px]"
                        />
                      </div>
                    ) : (
                      <div className="bg-[#803F00] rounded-[31px] p-6 shadow-inner w-full min-h-[400px] max-h-[500px] flex items-center justify-center">
                        <div className="text-[#FAFAFA]/50 text-center">
                          <div className="text-[48px] mb-2">📱</div>
                          <p className="text-[16px]">Interface Preview</p>
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
                        className="w-full bg-[#45236A] hover:bg-[#45236A]/90 text-figma-white px-6 py-3 rounded-[100px] transition-all duration-300 border-3 border-[#45236A]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          boxShadow: 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.4), inset 0px -4px 4px 0px rgba(0, 0, 0, 0.4)'
                        }}
                      >
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-4 h-4 bg-figma-white rounded-full" />
                          <span className="text-[18px] font-medium font-inter">{step.buttonText}</span>
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