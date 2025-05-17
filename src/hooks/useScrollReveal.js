import { useEffect, useRef } from 'react';

export function useScrollReveal(className = 'fadeInUp') {
  const ref = useRef(null);          

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add(className);
          io.disconnect();           
        }
      },
      { threshold: 0.3 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [className]);

  return ref;                        
}
