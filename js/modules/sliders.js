export function initSliders() {
    initSlider('slider1', 'slider1Prev', 'slider1Next');
    initSlider('slider2', 'slider2Prev', 'slider2Next');
  }
  
  function initSlider(sliderId, prevBtnId, nextBtnId) {
    const slider = document.getElementById(sliderId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
  
    if (!slider || !prevBtn || !nextBtn) return;
  
    const scrollAmount = 300;
  
    prevBtn.addEventListener('click', () => {
      slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
  
    nextBtn.addEventListener('click', () => {
      slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  
    updateSliderButtons();
    slider.addEventListener('scroll', updateSliderButtons);
  
    function updateSliderButtons() {
      const isAtStart = slider.scrollLeft <= 0;
      const isAtEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10;
  
      prevBtn.style.opacity = isAtStart ? '0.5' : '1';
      prevBtn.style.cursor = isAtStart ? 'default' : 'pointer';
      prevBtn.disabled = isAtStart;
  
      nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
      nextBtn.style.cursor = isAtEnd ? 'default' : 'pointer';
      nextBtn.disabled = isAtEnd;
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', initSliders);