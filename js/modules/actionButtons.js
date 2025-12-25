import { showNotification } from './notifications.js';

export function initActionButtons() {
  const btnA = document.querySelector('.btn-a');
  const btnB = document.querySelector('.btn-b');

  if (btnA) {
    btnA.addEventListener('click', () => {
      showNotification('Button A clicked! Create New Task feature coming soon.', 'info');
    });
  }

  if (btnB) {
    btnB.addEventListener('click', () => {
      showNotification('Button B clicked! Export Report feature coming soon.', 'info');
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initActionButtons);