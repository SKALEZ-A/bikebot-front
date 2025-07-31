import React from 'react';
import AboutSection from '../components/sections/AboutSection';

const TypographyTest: React.FC = () => {
  const mockProps = {
    title: 'Typography Testing - About BikeBot',
    description: 'BikeBot is a revolutionary Web3 assistant designed to make blockchain interactions as simple as having a conversation. Built specifically for the Monad ecosystem, BikeBot combines cutting-edge AI with decentralized technology to provide users with seamless access to DeFi protocols, NFT marketplaces, and blockchain analytics.'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Testing Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Mobile Typography Optimization Test
          </h1>
          <p className="text-gray-600 text-sm">
            Resize your browser window to test responsive typography behavior at different breakpoints.
          </p>
          
          {/* Breakpoint Indicators */}
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full block sm:hidden">
              Mobile (&lt;640px)
            </div>
            <div className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full hidden sm:block md:hidden">
              Small (640px-768px)
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full hidden md:block lg:hidden">
              Medium (768px-1024px) - Typography Breakpoint
            </div>
            <div className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full hidden lg:block">
              Large (≥1024px)
            </div>
          </div>
        </div>
      </div>

      {/* Typography Analysis Panel */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Expected Typography Behavior
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Main Description Paragraph</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>Classes Applied:</strong></p>
                <code className="block bg-gray-100 p-2 rounded text-xs">
                  text-sm leading-relaxed md:text-figma-body-medium md:leading-relaxed
                </code>
                <div className="space-y-1">
                  <p><strong>Mobile (&lt;768px):</strong> 14px font size, relaxed line height</p>
                  <p><strong>Desktop (≥768px):</strong> figma-body-medium size, relaxed line height</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Mission Statement</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>Classes Applied:</strong></p>
                <code className="block bg-gray-100 p-2 rounded text-xs">
                  text-sm leading-relaxed md:text-figma-body-medium md:leading-relaxed italic
                </code>
                <div className="space-y-1">
                  <p><strong>Mobile (&lt;768px):</strong> 14px font size, italic, relaxed line height</p>
                  <p><strong>Desktop (≥768px):</strong> figma-body-medium size, italic, relaxed line height</p>
                  <p><strong>Visual Elements:</strong> Orange left border, light gray text</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Widths Reference */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Test Breakpoints Reference
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-red-50 rounded">
              <div className="font-medium text-red-800">Mobile Small</div>
              <div className="text-red-600">320px</div>
            </div>
            <div className="p-3 bg-red-50 rounded">
              <div className="font-medium text-red-800">Mobile Medium</div>
              <div className="text-red-600">375px</div>
            </div>
            <div className="p-3 bg-red-50 rounded">
              <div className="font-medium text-red-800">Mobile Large</div>
              <div className="text-red-600">414px</div>
            </div>
            <div className="p-3 bg-green-50 rounded">
              <div className="font-medium text-green-800">Tablet</div>
              <div className="text-green-600">768px (Breakpoint)</div>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">Desktop Small</div>
              <div className="text-blue-600">1024px</div>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">Desktop Large</div>
              <div className="text-blue-600">1440px</div>
            </div>
          </div>
        </div>
      </div>

      {/* Component Under Test */}
      <AboutSection {...mockProps} />
      
      {/* Footer with Testing Instructions */}
      <div className="bg-gray-100 border-t border-gray-200 p-4 mt-8">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p>
            <strong>Testing Instructions:</strong> Resize your browser window or use browser dev tools 
            to simulate different screen sizes. Typography should change at the 768px breakpoint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypographyTest;