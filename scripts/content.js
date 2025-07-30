// FPL UX Enhancer - Content Script
// This script runs on https://fantasy.premierleague.com/*

(function() {
  'use strict';

  console.log('FPL UX Enhancer loaded');

  // Wait for DOM to be ready
  function init() {
    // Add custom classes to body for easier styling
    document.body.classList.add('fpl-ux-enhanced');
    
    // Example: Add custom functionality
    // enhanceNavigation();
    // enhancePlayerCards();
    
    // // Listen for dynamic content changes
    // observePageChanges();
  }

  // function enhanceNavigation() {
  //   // Add custom navigation enhancements
  //   const nav = document.querySelector('nav');
  //   if (nav) {
  //     nav.classList.add('fpl-enhanced-nav');
  //   }
  // }

  // function enhancePlayerCards() {
  //   // Enhance player cards if they exist
  //   const playerCards = document.querySelectorAll('[data-testid*="player"]');
  //   playerCards.forEach(card => {
  //     card.classList.add('fpl-enhanced-player-card');
  //   });
  // }

  // function observePageChanges() {
  //   // Watch for dynamic content changes (SPA navigation)
  //   const observer = new MutationObserver((mutations) => {
  //     mutations.forEach((mutation) => {
  //       if (mutation.type === 'childList') {
  //         // Re-apply enhancements when new content is added
  //         enhancePlayerCards();
  //       }
  //     });
  //   });

  //   observer.observe(document.body, {
  //     childList: true,
  //     subtree: true
  //   });
  // }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Listen for messages from popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
      case 'refreshStyles':
        // Remove and re-add the enhanced class to refresh styles
        document.body.classList.remove('fpl-ux-enhanced');
        setTimeout(() => {
          document.body.classList.add('fpl-ux-enhanced');
        }, 10);
        sendResponse({ success: true });
        break;
        
      case 'toggleEnhancement':
        const isEnabled = document.body.classList.contains('fpl-ux-enhanced');
        if (isEnabled) {
          document.body.classList.remove('fpl-ux-enhanced');
        } else {
          document.body.classList.add('fpl-ux-enhanced');
        }
        sendResponse({ success: true, enabled: !isEnabled });
        break;
        
      default:
        sendResponse({ success: false });
    }
  });
})(); 