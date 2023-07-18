import { cloneElement } from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ElevationScroll = ({ children }: any) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;
