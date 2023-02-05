import { useEffect, useState, useRef } from "react";

export default () => {
  const cardRef = useRef(null);
  const [size, setSize] = useState();

  useEffect(() => {
    const { width, height } = (cardRef?.current?.getBoundingClientRect()) || {};
    setSize({ width: Math.ceil(width), height: Math.ceil(height) });
  }, [cardRef])

  return { size, cardRef };
}