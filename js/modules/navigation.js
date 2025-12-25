export function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
  
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
  
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
  
        const navText = item.querySelector('span').textContent;
        const pageTitle = document.querySelector('.page-header h1');
        if (pageTitle) {
          pageTitle.textContent = `${navText} Overview`;
        }
      });
    });
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', initNavigation);