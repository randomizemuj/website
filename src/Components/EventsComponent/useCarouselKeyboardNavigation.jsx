import { useEffect } from 'react';
//Connects keyboard key event listeners to the arrow and dot buttons
const useCarouselKeyboardNavigation = (containerRef, onPrevButtonClick, onNextButtonClick) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        onPrevButtonClick();
      } else if (event.key === 'ArrowRight') {
        onNextButtonClick();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('keydown', handleKeyDown);
        } else {
          window.removeEventListener('keydown', handleKeyDown);
        }
      },
      { threshold: 0.1 }
    );

    const target = containerRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [containerRef, onPrevButtonClick, onNextButtonClick]);
};

export default useCarouselKeyboardNavigation;
