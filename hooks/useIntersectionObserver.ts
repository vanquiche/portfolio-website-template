import { MutableRefObject, useState, useEffect } from 'react';

const useIntersectionObserver = (ref: MutableRefObject<HTMLElement | null>) => {
  const [isVisible, setIsVisible] = useState(false);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };
  function entryCallback(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entryCallback, options);
    if (ref && ref.current) observer.observe(ref.current);
    return () => {
      if (ref && ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return {
    isVisible,
  };
};

export default useIntersectionObserver;
