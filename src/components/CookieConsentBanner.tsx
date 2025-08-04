'use client';

import { useState, useEffect } from 'react';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem('cookieConsent');
    if (hasConsented === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 border-t border-foreground/10 p-4 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground/80">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.{' '}
            <a 
              href="/privacy-policy" 
              className="underline hover:no-underline text-foreground"
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-4 py-2 text-sm border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-4 py-2 text-sm bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}