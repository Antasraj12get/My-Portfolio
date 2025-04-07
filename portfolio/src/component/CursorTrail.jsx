// import React, { useEffect, useRef } from "react";
// import "../styles/CursorTrail.css";

// const CursorTrail = () => {
//   const cursorRef = useRef(null);
//   const mouseX = useRef(0);
//   const mouseY = useRef(0);
//   const currentX = useRef(0);
//   const currentY = useRef(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouseX.current = e.clientX;
//       mouseY.current = e.clientY;
//     };

//     const updatePosition = () => {
//       currentX.current += (mouseX.current - currentX.current) * 0.1;
//       currentY.current += (mouseY.current - currentY.current) * 0.1;

//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${currentX.current}px`;
//         cursorRef.current.style.top = `${currentY.current}px`;
//       }

//       requestAnimationFrame(updatePosition);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     requestAnimationFrame(updatePosition);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return <div ref={cursorRef} className="cursor-trail" />;
// };

// export default CursorTrail;


import React, { useEffect, useRef } from "react";
import "../styles/CursorTrail.css";

const CursorTrail = () => {
  const circleRefs = [useRef(null), useRef(null), useRef(null)];
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  const totalGap = 38; // ~1cm

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const update = () => {
      currentX.current += (mouseX.current - currentX.current) * 0.1;
      currentY.current += (mouseY.current - currentY.current) * 0.1;

      circleRefs.forEach((ref, index) => {
        const circle = ref.current;
        if (circle) {
          const offset = ((index + 1) / circleRefs.length) * totalGap;
          circle.style.left = `${currentX.current}px`;
          circle.style.top = `${currentY.current + offset}px`;
        }
      });

      requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={circleRefs[0]} className="cursor-dot dot-smallest" />
      <div ref={circleRefs[1]} className="cursor-dot dot-medium" />
      <div ref={circleRefs[2]} className="cursor-dot dot-largest" />
    </>
  );
};

export default CursorTrail;
