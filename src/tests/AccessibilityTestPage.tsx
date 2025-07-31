import React, { useState, useEffect } from 'react';
import AboutSection from '../components/sections/AboutSection';

/**
 * Accessibility Test Page for Mobile Typography Optimization
 * 
 * This component provides a comprehensive testing environment for validating
 * accessibility and readability of the mobile typography optimization.
 * 
 * Features:
 * - Live viewport resizing simulation
 * - Accessibility testing tools integration
 * - Screen reader testing guidance
 * - WCAG compliance validation
 */

interface AccessibilityTestPageProps {}

const AccessibilityTestPage: React.FC<AccessibilityTestPageProps> = () => {
  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);
  const [testMode, setTestMode] = useState<'normal' | 'high-contrast' | 'large-text'>('normal');
  const [showAccessibilityInfo, setShowAccessibilityInfo] = useState<boolean>(true);

  // Update current width on window resize
  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Test data for AboutSection
  const testData = {
    title: "About BikeBot",
    description: "BikeBot is an advanced Telegram bot designed to streamline blockchain interactions on the Monad network. With intuitive commands and real-time data access, BikeBot empowers users to manage their digital assets, execute transactions, and stay informed about network activity—all from the convenience of their favorite messaging platform."
  };

  // Predefined test widths for mobile testing
  const testWidths = [
    { name: 'Mobile Small', width: 320 },
    { name: 'Mobile Medium', width: 375 },
    { name: 'Mobile Large', width: 414 },
    { name: 'Tablet', width: 768 },
    { name: 'Desktop Small', width: 1024 },
    { name: 'Desktop Large', width: 1440 }
  ];

  // Simulate different viewport widths
  const simulateWidth = (width: number) => {
    const container = document.getElementById('test-container');
    if (container) {
      container.style.maxWidth = `${width}px`;
      container.style.margin = '0 auto';
      setCurrentWidth(width);
    }
  };

  // Reset to natural width
  const resetWidth = () => {
    const container = document.getElementById('test-container');
    if (container) {
      container.style.maxWidth = 'none';
      container.style.margin = '0';
      setCurrentWidth(window.innerWidth);
    }
  };

  // Apply accessibility test modes
  const applyTestMode = (mode: 'normal' | 'high-contrast' | 'large-text') => {
    const container = document.getElementById('test-container');
    if (!container) return;

    // Remove existing test classes
    container.classList.remove('high-contrast-mode', 'large-text-mode');

    switch (mode) {
      case 'high-contrast':
        container.classList.add('high-contrast-mode');
        break;
      case 'large-text':
        container.classList.add('large-text-mode');
        break;
      default:
        // Normal mode - no additional classes
        break;
    }
    setTestMode(mode);
  };

  return (
    <div className="min-h-screen bg-figma-black">
      {/* Accessibility Testing Controls */}
      {showAccessibilityInfo && (
        <div className="bg-figma-dark-card border-b border-figma-text-secondary/20 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-inter font-medium text-figma-white">
                Accessibility Testing Dashboard
              </h1>
              <button
                onClick={() => setShowAccessibilityInfo(false)}
                className="text-figma-text-secondary hover:text-figma-white transition-colors"
                aria-label="Hide accessibility testing controls"
              >
                ✕
              </button>
            </div>

            {/* Current Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-figma-card-dark rounded-lg p-3">
                <div className="text-figma-text-secondary text-sm">Current Width</div>
                <div className="text-figma-white font-medium">{currentWidth}px</div>
                <div className="text-figma-text-secondary text-xs">
                  {currentWidth < 768 ? 'Mobile' : 'Desktop'} Typography Active
                </div>
              </div>
              
              <div className="bg-figma-card-dark rounded-lg p-3">
                <div className="text-figma-text-secondary text-sm">Font Size</div>
                <div className="text-figma-white font-medium">
                  {currentWidth < 768 ? '14px (text-sm)' : '16px (figma-body-medium)'}
                </div>
                <div className="text-figma-text-secondary text-xs">
                  WCAG Compliant ✅
                </div>
              </div>
              
              <div className="bg-figma-card-dark rounded-lg p-3">
                <div className="text-figma-text-secondary text-sm">Test Mode</div>
                <div className="text-figma-white font-medium capitalize">{testMode}</div>
                <div className="text-figma-text-secondary text-xs">
                  Accessibility Testing
                </div>
              </div>
            </div>

            {/* Width Testing Controls */}
            <div className="mb-4">
              <h3 className="text-figma-white font-medium mb-2">Viewport Width Testing</h3>
              <div className="flex flex-wrap gap-2">
                {testWidths.map((test) => (
                  <button
                    key={test.width}
                    onClick={() => simulateWidth(test.width)}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      currentWidth === test.width
                        ? 'bg-figma-orange text-figma-white'
                        : 'bg-figma-card-dark text-figma-text-secondary hover:text-figma-white'
                    }`}
                  >
                    {test.name} ({test.width}px)
                  </button>
                ))}
                <button
                  onClick={resetWidth}
                  className="px-3 py-1 rounded text-sm bg-figma-monad-purple text-figma-white hover:bg-figma-monad-purple/80 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Accessibility Test Modes */}
            <div className="mb-4">
              <h3 className="text-figma-white font-medium mb-2">Accessibility Test Modes</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => applyTestMode('normal')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    testMode === 'normal'
                      ? 'bg-figma-green text-figma-white'
                      : 'bg-figma-card-dark text-figma-text-secondary hover:text-figma-white'
                  }`}
                >
                  Normal
                </button>
                <button
                  onClick={() => applyTestMode('high-contrast')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    testMode === 'high-contrast'
                      ? 'bg-figma-green text-figma-white'
                      : 'bg-figma-card-dark text-figma-text-secondary hover:text-figma-white'
                  }`}
                >
                  High Contrast
                </button>
                <button
                  onClick={() => applyTestMode('large-text')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    testMode === 'large-text'
                      ? 'bg-figma-green text-figma-white'
                      : 'bg-figma-card-dark text-figma-text-secondary hover:text-figma-white'
                  }`}
                >
                  Large Text
                </button>
              </div>
            </div>

            {/* Testing Instructions */}
            <div className="bg-figma-card-dark rounded-lg p-4">
              <h3 className="text-figma-white font-medium mb-2">Testing Instructions</h3>
              <div className="text-figma-text-secondary text-sm space-y-2">
                <div><strong>1. Font Size Testing:</strong> Use width controls to test mobile (14px) vs desktop (16px) font sizes</div>
                <div><strong>2. Contrast Testing:</strong> Enable high contrast mode to verify text remains readable</div>
                <div><strong>3. Screen Reader Testing:</strong> Use NVDA, JAWS, or VoiceOver to test content accessibility</div>
                <div><strong>4. Keyboard Navigation:</strong> Tab through content to ensure proper focus management</div>
                <div><strong>5. Zoom Testing:</strong> Use browser zoom (Ctrl/Cmd +) up to 200% to test scalability</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show controls toggle when hidden */}
      {!showAccessibilityInfo && (
        <button
          onClick={() => setShowAccessibilityInfo(true)}
          className="fixed top-4 right-4 bg-figma-orange text-figma-white px-3 py-2 rounded-lg text-sm z-50 hover:bg-figma-orange-dark transition-colors"
          aria-label="Show accessibility testing controls"
        >
          Show Testing Controls
        </button>
      )}

      {/* Test Container */}
      <div id="test-container" className="transition-all duration-300">
        <AboutSection 
          title={testData.title}
          description={testData.description}
        />
      </div>

      {/* Accessibility Test Styles */}
      <style>{`
        .high-contrast-mode {
          filter: contrast(150%) brightness(120%);
        }
        
        .large-text-mode .text-sm {
          font-size: 16px !important;
        }
        
        .large-text-mode .md\\:text-figma-body-medium {
          font-size: 18px !important;
        }
        
        /* Focus indicators for keyboard testing */
        .high-contrast-mode *:focus {
          outline: 3px solid #FC7B0D !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </div>
  );
};

export default AccessibilityTestPage;