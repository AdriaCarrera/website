/* eslint-disable */
// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import { Element, SVG } from "@svgdotjs/svg.js";
import "@svgdotjs/svg.filter.js";

const HeroHomeAnimation = () => {
  const svgRef = useRef(null);
  const containerWidth = useRef(null);
  const containerHeight = useRef(null);
  const animationRefs = useRef({
    circles: {},
    worms: {},
    wormCircles: {},
    timeouts: new Set(),
  });

  // Memoize the gradient creation to avoid recreating it on every render
  const createGradient = (draw: Element, color1: string, color2: string) => {
    return draw
      .gradient("linear", function (add: { stop: (arg0: number, arg1: string) => void }) {
        add.stop(0.41, color1);
        add.stop(0.95, color2);
      })
      .from(0, 0)
      .to(0, 1);
  };

  // Memoize the shadow filter creation
  const createShadowFilter = (draw: Element, color1: string) => {
    return draw.filter(function (add) {
      var blur = add.offset(0, 0).in(color1).gaussianBlur(4);
      add.blend(add.$source, blur);
    });
  };

  const drawCircle = (draw: Element, points: number[], radius: number, color1: string, color2: string) => {
    const gradient = createGradient(draw, color1, color2);

    return draw
      .path(
        `
      M ${points[0]},${points[1] - radius} 
      A ${radius} ${radius} 0 1,1 ${points[0]},${points[1] + radius}
      A ${radius} ${radius} 0 1,1 ${points[0]},${points[1] - radius}
    `
      )
      .fill("none")
      .stroke({
        width: 2,
        color: gradient,
        opacity: 0.16,
      });
  };

  const animateCircle = (draw: Element, path: Element, direction: string, color1: string, color2: string) => {
    const gradient = createGradient(draw, color1, color2);
    const shadowFilter = createShadowFilter(draw, color1);

    const wormPath = path
      .clone()
      .fill("none")
      .stroke({
        width: 2.8,
        color: gradient,
        opacity: 1,
      })
      .filterWith(shadowFilter);

    draw.add(wormPath);

    const worm = draw
      .rect(100, 100)
      .move(path.pointAt(0).x / 2, path.pointAt(0).y)
      .fill(color1);

    wormPath.maskWith(worm);
    worm.hide();

    const initialDelay = Math.random() * 2000;
    const timeoutId = setTimeout(() => animateMask(worm, path, wormPath, direction), initialDelay);
    animationRefs.current.timeouts.add(timeoutId);

    return [wormPath, worm];
  };

  const animateMask = (worm, path, wormPath, orientation) => {
    const pathLength = path.length();

    if (worm.__animating) return;
    worm.__animating = true;

    const startPos = orientation === "toTop" ? 1 : 0;
    const endPos = orientation === "toTop" ? 0 : 1;

    const randomDelay = Math.random() * 4000;

    wormPath.show();
    worm.show();

    worm
      .animate(1500, "<>")
      .during((pos) => {
        const t = startPos + (endPos - startPos) * pos;
        const point = path.pointAt(pathLength * t);

        if (point) {
          worm.center(point.x, point.y);
        }
      })
      .after(() => {
        worm.hide();
        wormPath.hide();
        worm.__animating = false;

        const timeoutId = setTimeout(() => animateMask(worm, path, wormPath, orientation), randomDelay);
        animationRefs.current.timeouts.add(timeoutId);
      });
  };

  const cleanCircles = () => {
    // Clear all timeouts
    animationRefs.current.timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    animationRefs.current.timeouts.clear();

    // Remove all SVG elements
    Object.values(animationRefs.current.circles).forEach((circle) => circle?.remove());
    Object.values(animationRefs.current.worms).forEach((worm) => worm?.remove());
    Object.values(animationRefs.current.wormCircles).forEach((wormCircle) => wormCircle?.remove());

    // Clear references
    animationRefs.current.circles = {};
    animationRefs.current.worms = {};
    animationRefs.current.wormCircles = {};
  };

  const drawCircles = () => {
    const draw = SVG(svgRef.current);
    const objectLayerDimensions = document.getElementById("heroAnimation").getBoundingClientRect();
    containerWidth.current = objectLayerDimensions.width;
    containerHeight.current = objectLayerDimensions.height;

    cleanCircles();

    const xMiddle = parseFloat((containerWidth.current / 2).toFixed(1));
    const yMiddle = parseFloat((containerHeight.current / 2).toFixed(1));

    // Draw all circles with their respective configurations
    const circleConfigs = [
      { id: "circle1", pos: [xMiddle - 28, yMiddle + 12], radius: 223, color1: "#19FF83", color2: "#28B86A", direction: "toBottom" },
      { id: "circle2", pos: [xMiddle + 4, yMiddle - 12], radius: 223, color1: "#19FF83", color2: "#28B86A", direction: "toBottom" },
      { id: "circle3", pos: [xMiddle - 10, yMiddle - 24], radius: 223, color1: "#C890FF", color2: "#8A4BC9", direction: "toTop" },
      { id: "circle4", pos: [xMiddle, yMiddle], radius: 223, color1: "#C890FF", color2: "#8A4BC9", direction: "toTop" },
      { id: "circleTL", pos: [xMiddle - 502, yMiddle - 283], radius: 256, color1: "#C890FF", color2: "#8A4BC9", direction: "toTop" },
      { id: "circleBL", pos: [xMiddle - 786, yMiddle + 1], radius: 368, color1: "#19FF83", color2: "#28B86A", direction: "toTop" },
      { id: "circleTR", pos: [xMiddle + 512, yMiddle - 392], radius: 269, color1: "#19FF83", color2: "#28B86A", direction: "toBottom" },
      { id: "circleBR", pos: [xMiddle + 590, yMiddle + 2], radius: 192, color1: "#C890FF", color2: "#8A4BC9", direction: "toTop" },
    ];

    circleConfigs.forEach((config) => {
      const circle = drawCircle(draw, config.pos, config.radius, config.color1, config.color2);
      circle.id(config.id);
      animationRefs.current.circles[config.id] = circle;

      const [wormCircle, worm] = animateCircle(draw, circle, config.direction, config.color1, config.color2);
      animationRefs.current.wormCircles[config.id] = wormCircle;
      animationRefs.current.worms[config.id] = worm;
    });
  };

  useEffect(() => {
    drawCircles();

    // Debounce the resize handler to prevent too many redraws
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(drawCircles, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      cleanCircles();
    };
  }, []);

  return (
    <div className="relative">
      <svg ref={svgRef} className="w-[2314px] h-[1324px] md:scale-100 scale-70 origin-center" />
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[114px] h-[80px] md:w-[178px] md:h-[126px]"
        viewBox="0 0 178 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M89.5904 61.8864C100.127 61.8864 110.348 65.6284 118.132 72.9623L161.75 114H140.835L107.762 82.8938C102.897 78.3331 96.4099 75.894 89.5987 75.894C82.7878 75.894 76.3012 78.3331 71.4362 82.8938L38.3629 114H17.4477L61.0662 72.9623C68.85 65.6368 79.0622 61.8864 89.6074 61.8864H89.5904ZM89.5904 52.1218C79.0539 52.1218 68.8334 48.3797 61.0495 41.0458L17.4394 0H38.3546L71.4279 31.106C76.2929 35.6667 82.7795 38.1058 89.5904 38.1058C96.4016 38.1058 102.888 35.6667 107.753 31.106L140.827 0H161.742L118.123 41.0375C110.339 48.363 100.127 52.1134 89.5821 52.1134L89.5904 52.1218Z"
          fill="url(#paint0_linear_628_177)"
        />
        <path
          d="M53.1078 57.0081L7.54328 95.7652C4.14198 98.8558 0.25 97.3942 0.25 92.8335V21.1743C0.25 16.6136 4.14198 15.1518 7.54328 18.2424L53.1078 56.9997V57.0081Z"
          fill="url(#paint1_linear_628_177)"
        />
        <defs>
          <linearGradient id="paint0_linear_628_177" x1="125.079" y1="7.94283e-07" x2="36.2755" y2="136.64" gradientUnits="userSpaceOnUse">
            <stop offset="0.575" stopColor="white" />
            <stop offset="0.9988" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_628_177" x1="125.079" y1="7.94283e-07" x2="36.2755" y2="136.64" gradientUnits="userSpaceOnUse">
            <stop offset="0.575" stopColor="white" />
            <stop offset="0.9988" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroHomeAnimation;
