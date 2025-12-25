export function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }
  
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="bi bi-info-circle"></i>
        <span>${message}</span>
      </div>
    `;
  
    // Add styles if not already present
    if (!document.querySelector('#notification-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'notification-styles';
      styleSheet.textContent = `
        .notification {
          position: fixed;
          top: 90px;
          right: 24px;
          background: white;
          padding: 16px 20px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 10000;
          animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s forwards;
          max-width: 350px;
        }
  
        .notification-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }
  
        .notification i {
          font-size: 24px;
          color: #2563eb;
        }
  
        .notification span {
          font-size: 14px;
          color: #1e293b;
          font-weight: 500;
        }
  
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
  
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }
  
        @media (max-width: 768px) {
          .notification {
            top: 80px;
            right: 16px;
            left: 16px;
            max-width: none;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  
    document.body.appendChild(notification);
  
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 3000);
  }