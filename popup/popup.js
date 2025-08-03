document.addEventListener('DOMContentLoaded', function() {
  const toggleEnhancementBtn = document.getElementById('toggle-enhancement');
  const statusDot = document.querySelector('.status-dot');
  const statusText = document.querySelector('.status-text');

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentTab = tabs[0];
    const isFPLSite = currentTab.url && currentTab.url.includes('fantasy.premierleague.com');
    
    if (isFPLSite) {
      statusDot.classList.add('active');
      statusDot.classList.remove('inactive');
      statusText.textContent = 'Active on FPL website';
    } else {
      statusDot.classList.add('inactive');
      statusDot.classList.remove('active');
      statusText.textContent = 'Not on FPL website';
      toggleEnhancementBtn.disabled = true;
    }
  });

  toggleEnhancementBtn.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleEnhancement' }, function(response) {
        if (response && response.success) {
          const isEnabled = response.enabled;
          toggleEnhancementBtn.textContent = isEnabled ? 'Disable Enhancement' : 'Enable Enhancement';
          showNotification(isEnabled ? 'Enhancement enabled!' : 'Enhancement disabled!');
        } else {
          showNotification('Failed to toggle enhancement');
        }
      });
    });
  });

  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: #00ff85;
      color: #37003c;
      padding: 10px 15px;
      border-radius: 6px;
      font-size: 0.9em;
      font-weight: 600;
      z-index: 1000;
      animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
}); 