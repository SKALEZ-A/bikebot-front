import React, { useState, useEffect } from 'react';
import AboutSection from '../components/sections/AboutSection';

const TypographyBreakpointTest: React.FC = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [selectedWidth, setSelectedWidth] = useState(window.innerWidth);

  const testWidths = [
    { name: 'Mobile Small', width: 320 },
    { name: 'Mobile Medium', width: 375 },
    { name: 'Mobile Large', width: 414 },
    { name: 'Tablet', width: 768 },
    { name: 'Desktop Small', width: 1024 },
    { name: 'Desktop Large', width: 1440 },
  ];

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const simulateWidth = (width: number) => {
    setSelectedWidth(width);
    // This would typically require more complex viewport simulation
    // For testing purposes, we'll show the expected behavior
  };

  const getExpectedFontSize = (width: number) => {
    return width >= 768 ? 'figma-body-medium (16px)' : 'text-sm (14px)';
  };

  const mockProps = {
    title: 'About BikeBot',
    description: 'BikeBot is a revolutionary Web3 assistant designed to make blockchain interactions as simple as having a conversation. Built specifically for the Monad ecosystem, BikeBot combines cutting-edge AI with decentralized technology to provide users with seamless access to DeFi protocols, NFT marketplaces, and blockchain analytics.'
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Typography Breakpoint Testing</h1>
        
        {/* Control Panel */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Breakpoint Controls</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
            {testWidths.map((test) => (
              <button
                key={test.width}
                onClick={() => simulateWidth(test.width)}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  selectedWidth === test.width
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {test.name}
                <br />
                <span className="text-xs">{test.width}px</span>
              </button>
            ))}
          </div>
          
          <div className="text-sm text-gray-600">
            <p><strong>Current Window Width:</strong> {currentWidth}px</p>
            <p><strong>Selected Test Width:</strong> {selectedWidth}px</p>
            <p><strong>Expected Font Size:</strong> {getExpectedFontSize(selectedWidth)}</p>
            <p><strong>Breakpoint Status:</strong> {selectedWidth >= 768 ? 'Desktop (md:)' : 'Mobile'}</p>
          </div>
        </div>

        {/* Typography Analysis */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Typography Analysis</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Main Description</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Classes: <code>text-sm leading-relaxed md:text-figma-body-medium md:leading-relaxed</code></p>
                <p>Mobile (&lt;768px): 14px font, relaxed line height</p>
                <p>Desktop (≥768px): figma-body-medium font, relaxed line height</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Mission Statement</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Classes: <code>text-sm leading-relaxed md:text-figma-body-medium md:leading-relaxed italic</code></p>
                <p>Mobile (&lt;768px): 14px font, relaxed line height, italic</p>
                <p>Desktop (≥768px): figma-body-medium font, relaxed line height, italic</p>
                <p>Additional: Orange left border, light gray text</p>
              </div>
            </div>
          </div>
        </div>

        {/* Component Preview */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Component Preview</h2>
          <div 
            className="border-2 border-dashed border-gray-300 overflow-hidden"
            style={{ 
              width: selectedWidth < window.innerWidth ? `${selectedWidth}px` : '100%',
              maxWidth: '100%'
            }}
          >
            <AboutSection {...mockProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyBreakpointTest;