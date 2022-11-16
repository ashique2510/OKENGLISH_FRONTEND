import React from "react";

const images = ["https://res.cloudinary.com/dtldzc9tg/image/upload/v1668584280/PhotoRoom-20221116_084039_1_ytwwwd.png", "https://res.cloudinary.com/dtldzc9tg/image/upload/v1668584332/PhotoRoom-20221116_095710_1_1_rdehl6.png", "https://res.cloudinary.com/dtldzc9tg/image/upload/v1668584350/PhotoRoom-20221116_101408_1_fskumv.png"];
const delay =3000;

function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((item, index) => (
          <div
            className="slide"
            key={index}
          >

              <img style={{height:'100%',width:'100%'}} src={item} alt="img" />

          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider

