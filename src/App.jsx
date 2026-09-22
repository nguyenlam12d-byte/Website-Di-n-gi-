import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';
import ProgressBar from './components/ProgressBar';
import SpeakerNotes from './components/SpeakerNotes';
import SlideNavigator from './components/SlideNavigator';

// Import all slides
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';
import Slide11 from './components/slides/Slide11';
import Slide12 from './components/slides/Slide12';
import Slide13 from './components/slides/Slide13';
import Slide14 from './components/slides/Slide14';
import SlideRevenue from './components/slides/SlideRevenue';

const TOTAL_SLIDES = 13;

const slides = [
  Slide1, Slide2, Slide3, SlideRevenue,
  Slide6, Slide7, Slide8, Slide9, Slide10, 
  Slide12, Slide13, Slide14, Slide11
];

// Cinematic 3D Slide Variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1200 : -1200,
    opacity: 0,
    scale: 0.85,
    zIndex: 1,
  }),
  center: {
    zIndex: 2,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1200 : -1200,
    opacity: 0,
    scale: 1.15, // Creates deep 3D effect
  })
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = useCallback((newDirection) => {
    if (isAnimating) return; // Anti-spam lock
    setCurrentSlide((prev) => {
      const nextSlide = prev + newDirection;
      if (nextSlide >= 0 && nextSlide < TOTAL_SLIDES) {
        setDirection(newDirection);
        return nextSlide;
      }
      return prev;
    });
  }, [isAnimating]);

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentSlide || index < 0 || index >= TOTAL_SLIDES) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide, isAnimating]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 's' || e.key === 'S') {
        setShowNotes(prev => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
          });
        } else {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <>
      <div className="presentation-container">
        <Background slideIndex={currentSlide} />
        
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.6 },
              scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setTimeout(() => setIsAnimating(false), 50)} 
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
          >
            <CurrentSlideComponent isActive={true} />
          </motion.div>
        </AnimatePresence>

        <ProgressBar current={currentSlide} total={TOTAL_SLIDES} />
        <SlideNavigator current={currentSlide} total={TOTAL_SLIDES} onNavigate={goToSlide} />
        
        {/* Hover zones for mouse navigation */}
        <div 
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '10%', cursor: 'pointer', zIndex: 10 }}
          onClick={() => paginate(-1)}
        />
        <div 
          style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '10%', cursor: 'pointer', zIndex: 10 }}
          onClick={() => paginate(1)}
        />
      </div>

      <AnimatePresence>
        {showNotes && (
          <SpeakerNotes slideIndex={currentSlide} onClose={() => setShowNotes(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
