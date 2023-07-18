import { cloneElement, ReactNode } from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ElevationScroll: React.FC<{ children: ReactNode }> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children as React.ReactElement, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;
