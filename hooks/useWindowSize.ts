import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [dimensions, setDimensions] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  function resizeWindow() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeWindow);
      return () => window.removeEventListener('resize', resizeWindow);
    }
  }, [resizeWindow]);

  return {
    dimensions
  }
};

export default useWindowSize;
