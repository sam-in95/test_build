import React, { useRef, useEffect, useState } from "react";

import classes from "./MouseCursor.module.css";

const MouseCursor = (props) => {
  const dot = useRef(null);
  const dotDiv = useRef(null);
  const [mouseCursorData, setMouseCursorData] = useState("bbb");

  const cursorVisible = useRef(true);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);

  let stage = "";
  let scale = 1;

  useEffect(() => {
    const mouseMove = (e) => {
      cursorVisible.current = true;

      endX.current = e.pageX;
      endY.current = e.pageY;

      dot.current.style.top = endY.current + "px";
      dot.current.style.left = endX.current + "px";

      setMouseCursorData(props.mouseDataHandler);

      // switch (e.target.getAttribute("data-cursor")) {
      //   case "name":
      //     dotDiv.current.setAttribute(
      //       "date-name",
      //       e.target.getAttribute("data-name")
      //     );
      //     if ((stage = "name")) return;
      //     stage = "name";
      //     scale = 5;
      // }
      // dotDiv.current.style.transform = `scale(${scale})`;
    };

    const mouseDown = (e) => {
      scale *= 0.8;
      dotDiv.current.style.transform = `scale(${scale})`;
    };

    const mouseUp = (e) => {
      scale *= 1.25;
      dotDiv.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  // 마우스 커서 호버관리
  // useEffect(() => {
  //   const mouseCursorChange = () => {
  //     setMouseCursorData(props.mouseDataHandler);
  //     console.log(mouseCursorData);
  //   };

  //   window.addEventListener("mousemove", mouseCursorChange);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseCursorChange);
  //   };
  // }, [mouseCursorData]);

  return (
    <div className={classes.mouse_cursor} ref={dot}>
      <div ref={dotDiv}>{mouseCursorData}</div>
    </div>
  );
};

export default MouseCursor;
