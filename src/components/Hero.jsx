import React from 'react';
import Slider from 'react-slick';
import { Volume2, VolumeX } from 'lucide-react';


const Hero = () => {
  const [isMuted, setIsMuted] = React.useState(true);
  const sliderRef = React.useRef(null);

  const toggleMute = (e) => {
    e.stopPropagation();
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    // Apply to ALL videos in the slider (including clones)
    const videos = document.querySelectorAll('.hero-slider video');
    videos.forEach(video => {
      video.muted = newMutedState;
      video.defaultMuted = newMutedState;
    });
  };

  const handleAfterChange = (current) => {
    const allVideos = document.querySelectorAll('.hero-slider video');
    allVideos.forEach(video => video.pause());

    setTimeout(() => {
      const activeSlide = document.querySelector('.hero-slider .slick-active video');
      if (activeSlide) {
        activeSlide.currentTime = 0;
        // Ensure the new video respects the CURRENT mute state
        activeSlide.muted = isMuted;
        activeSlide.play().catch(e => console.log("Play error", e));
      }
    }, 100);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: false,
    cssEase: "linear",
    arrows: true,
    pauseOnHover: false,
    afterChange: handleAfterChange,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: i => (
      <div
        className="w-2.5 h-2.5 bg-white/50 hover:bg-white transition-all rounded-full cursor-pointer mt-4"
      />
    )
  };

  const videos = ['/assets/hero3.mp4', '/assets/hhero2.mp4'];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleAfterChange(0);
      // Initial mute state sync
      const videos = document.querySelectorAll('.hero-slider video');
      videos.forEach(video => {
        video.muted = true;
        video.defaultMuted = true;
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Slider Background */}
      <div className="absolute inset-0 z-0">
        <Slider ref={sliderRef} {...settings} className="h-full w-full hero-slider">
          {videos.map((vid, index) => (
            <div key={index} className="h-screen w-full relative outline-none focus:outline-none">
              <video
                key={vid}
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => sliderRef.current.slickNext()}
              >
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Slider>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-10 right-10 z-50 w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-black/60 transition-all cursor-pointer shadow-lg hover:scale-110"
        aria-label={isMuted ? "Unmute Video" : "Mute Video"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

    </section>
  );
};

// Custom Arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "50px", zIndex: 30 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "50px", zIndex: 30 }}
      onClick={onClick}
    />
  );
}

export default Hero;
