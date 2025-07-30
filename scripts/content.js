(function() {
  'use strict';

  function init() {
    document.body.classList.add('fpl-ux-enhanced');
    
    initPlayerCards();
    observePageChanges();
  }

  function initPlayerCards() {
    const playerCards = document.querySelectorAll('[data-pitch-element]');

    playerCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const modal = document.querySelector('section[aria-labelledby="sheet-title"]');

        if (modal) {
          let fullProfileToggler = modal.querySelector('footer > div > button');

          if (!fullProfileToggler) {
            fullProfileToggler = modal.querySelector('footer > div > span:first-child > button');
          }

          if (fullProfileToggler) {
            fullProfileToggler.click();
          }
        }
      });
    });
  }

  function observePageChanges() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          initPlayerCards();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
      case 'refreshStyles':
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