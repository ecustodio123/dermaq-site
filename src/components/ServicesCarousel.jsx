import { useEffect, useMemo, useRef, useState } from "react";

const VISIBLE_ITEMS = 4;
const AUTOPLAY_MS = 2000;

function ServicesCarousel({ services }) {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const DRAG_THRESHOLD = 45;

  const total = services.length;

  useEffect(() => {
    if (total <= 1 || isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setStartIndex((previous) => (previous + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [isPaused, total]);

  const visibleServices = useMemo(() => {
    if (total === 0) {
      return [];
    }

    return Array.from({ length: VISIBLE_ITEMS }, (_, offset) => {
      const itemIndex = (startIndex + offset) % total;
      return {
        ...services[itemIndex],
        _itemIndex: itemIndex,
        _offset: offset,
      };
    });
  }, [services, startIndex, total]);

  const goPrev = () => {
    if (total === 0) {
      return;
    }
    setStartIndex((previous) => (previous - 1 + total) % total);
  };

  const goNext = () => {
    if (total === 0) {
      return;
    }
    setStartIndex((previous) => (previous + 1) % total);
  };

  if (total === 0) {
    return null;
  }

  const onMouseDown = (event) => {
    setIsDragging(true);
    setIsPaused(true);
    dragStartX.current = event.clientX;
  };

  const onMouseMove = (event) => {
    if (!isDragging) {
      return;
    }

    const delta = event.clientX - dragStartX.current;

    if (delta >= DRAG_THRESHOLD) {
      goPrev();
      dragStartX.current = event.clientX;
    } else if (delta <= -DRAG_THRESHOLD) {
      goNext();
      dragStartX.current = event.clientX;
    }
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <div className={`services-carousel ${isDragging ? "is-dragging" : ""}`}>
      <div
        className="services-carousel__viewport"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
      >
        <div className="services-carousel__track">
          {visibleServices.map((service) => (
            <article
              className="service-card"
              key={`${service.title}-${service._itemIndex}-${service._offset}-${startIndex}`}
            >
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesCarousel;
