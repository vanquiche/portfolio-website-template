import { MutableRefObject, useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (ref: MutableRefObject<HTMLElement | null>, threshold?: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const hasRender = useRef(false)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: threshold || 0.5,
  };
  function entryCallback(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (entry.isIntersecting) {
      hasRender.current = true;
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entryCallback, options);
    if (ref && ref.current) observer.observe(ref.current)
    return () => {
      if (ref && ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return {
    isVisible,
    hasRender
  };
};

export default useIntersectionObserver;
