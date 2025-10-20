import React from 'react';
import { Box, Fade, Slide, Grow, Zoom } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AnimatedContainer = ({ 
  children, 
  animation = 'fade',
  direction = 'up',
  delay = 0,
  duration = 300,
  in: inProp = true,
  ...props 
}) => {
  const theme = useTheme();

  const animationProps = {
    in: inProp,
    timeout: {
      enter: duration,
      exit: duration / 2
    },
    style: {
      transitionDelay: `${delay}ms`
    }
  };

  const renderAnimation = () => {
    switch (animation) {
      case 'slide':
        return (
          <Slide direction={direction} {...animationProps}>
            <Box {...props}>{children}</Box>
          </Slide>
        );
      
      case 'grow':
        return (
          <Grow {...animationProps}>
            <Box {...props}>{children}</Box>
          </Grow>
        );
      
      case 'zoom':
        return (
          <Zoom {...animationProps}>
            <Box {...props}>{children}</Box>
          </Zoom>
        );
      
      case 'fade':
      default:
        return (
          <Fade {...animationProps}>
            <Box {...props}>{children}</Box>
          </Fade>
        );
    }
  };

  return renderAnimation();
};

// Staggered animation for lists
export const StaggeredContainer = ({ children, staggerDelay = 100, ...props }) => {
  return (
    <Box {...props}>
      {React.Children.map(children, (child, index) => (
        <AnimatedContainer
          key={index}
          animation="slide"
          direction="up"
          delay={index * staggerDelay}
          duration={400}
        >
          {child}
        </AnimatedContainer>
      ))}
    </Box>
  );
};

// Page transition wrapper
export const PageTransition = ({ children, ...props }) => {
  return (
    <AnimatedContainer
      animation="fade"
      duration={400}
      sx={{
        minHeight: '100%',
        width: '100%'
      }}
      {...props}
    >
      {children}
    </AnimatedContainer>
  );
};

// Card hover animation
export const HoverCard = ({ children, elevation = 2, hoverElevation = 8, ...props }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        transition: theme.transitions.create([
          'box-shadow',
          'transform'
        ], {
          duration: theme.transitions.duration.short,
          easing: theme.transitions.easing.easeInOut
        }),
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows[hoverElevation]
        },
        boxShadow: theme.shadows[elevation],
        cursor: 'pointer'
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

// Button with ripple effect enhancement
export const AnimatedButton = ({ children, ...props }) => {
  const theme = useTheme();
  
  return (
    <Box
      component="button"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        transition: theme.transitions.create([
          'background-color',
          'box-shadow',
          'transform'
        ], {
          duration: theme.transitions.duration.short
        }),
        '&:hover': {
          transform: 'scale(1.02)'
        },
        '&:active': {
          transform: 'scale(0.98)'
        }
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default AnimatedContainer;