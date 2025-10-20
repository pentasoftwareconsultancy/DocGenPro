import { keyframes } from '@mui/system';

// Custom keyframe animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideInUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInDown = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
`;

// Animation utilities
export const animationMixins = {
  // Smooth transitions
  smoothTransition: (properties = 'all', duration = '0.3s', easing = 'ease-in-out') => ({
    transition: `${properties} ${duration} ${easing}`
  }),
  
  // Hover effects
  hoverLift: {
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    }
  },
  
  hoverScale: {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)'
    }
  },
  
  // Button animations
  buttonPress: {
    transition: 'transform 0.1s ease-in-out',
    '&:active': {
      transform: 'scale(0.98)'
    }
  },
  
  // Loading animations
  loadingPulse: {
    animation: `${pulse} 2s infinite`
  },
  
  loadingBounce: {
    animation: `${bounce} 1s infinite`
  },
  
  // Entrance animations
  fadeInAnimation: {
    animation: `${fadeIn} 0.5s ease-in-out`
  },
  
  slideInUpAnimation: {
    animation: `${slideInUp} 0.5s ease-out`
  },
  
  slideInDownAnimation: {
    animation: `${slideInDown} 0.5s ease-out`
  },
  
  slideInLeftAnimation: {
    animation: `${slideInLeft} 0.5s ease-out`
  },
  
  slideInRightAnimation: {
    animation: `${slideInRight} 0.5s ease-out`
  },
  
  scaleInAnimation: {
    animation: `${scaleIn} 0.4s ease-out`
  },
  
  // Staggered animations
  staggeredDelay: (index, baseDelay = 100) => ({
    animationDelay: `${index * baseDelay}ms`
  })
};

// Common animation configurations
export const animationConfig = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  },
  
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  }
};

export default animationMixins;