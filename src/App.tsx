import HeroSection from './components/sections/HeroSection';
import TelegramSection from './components/sections/TelegramSection';
import AboutSection from './components/sections/AboutSection';
import CapabilitiesSection from './components/sections/CapabilitiesSection';
import GettingStartedSection from './components/sections/GettingStartedSection';
import TeamSection from './components/sections/TeamSection';
import CommunitySection from './components/sections/CommunitySection';
import SocialSection from './components/sections/SocialSection';

function App() {
  const handleCtaClick = () => {
    // Handle CTA button click - could open Telegram bot or scroll to next section
    window.open('https://t.me/bikebot_xyz', '_blank');
  };



  const gettingStartedSteps = [
    {
      number: 1,
      title: "Step 1",
      description: "Make sure you have minted the 1 million Nads Monad Testnet Nft if you haven't.",
      image: "/images/step1-screenshot-figma.png",
      hasButton: false
    },
    {
      number: 2,
      title: "Step 2", 
      description: "Click Below to start using BikeBot and make sure to connect with the same wallet address used to mint, so you'll get access.",
      image: "/images/telegram-interface-figma.png",
      hasButton: true,
      buttonText: "Start Trading on Monad with Ease",
      onButtonClick: handleCtaClick
    }
  ];

  return (
    <div className="min-h-screen bg-figma-black">
      <HeroSection
        title="Easy Interaction With Monad Using Bikebot"
        subtitle="Join 30,000+ folks to enjoy super-fast swaps on monad chain on BikeBot"
        ctaText="Start Trading on Monad with Ease"
        onCtaClick={handleCtaClick}
      />
      
      <TelegramSection
        title="Power up your Monad experience directly from Telegram"
        features={[
          "Good for all Monad trades",
          "Easy to Use", 
          "Fast"
        ]}
      />

      <AboutSection
        title="Who Are we?"
        description="BikeBot is a fast, secure, and intuitive Telegram bot designed to bring seamless interaction with the Monad blockchain directly to your fingertips. Whether you're a developer, blockchain enthusiast, or everyday user exploring the Monad testnet, BikeBot makes on-chain activity effortless — no dApps, no clutter, just simple Telegram-based commands that work."
      />

      <CapabilitiesSection
        title="What Can You Do With BikeBot"
      />

      <GettingStartedSection
        title="Let's Help You Join Other Folks"
        subtitle="Join 30,000+ to start using Bikebot In 2 simple steps"
        steps={gettingStartedSteps}
      />

      <TeamSection
        title="Team Is Cooking More Features..."
      />

      <CommunitySection
        title="Built for the Monad Community"
        description="BikeBot is made for the Monad community by builders who believe in speed, efficiency, and decentralization. As Monad grows, so will BikeBot. With deeper features, mainnet support, and multi-platform access coming soon."
      />

      <SocialSection
        title="Meet the worldwide community."
        description="Join a fast-growing community of Bikeboters and innovators connected all over the world, for faster Monad interaction"
      />
    </div>
  );
}

export default App;