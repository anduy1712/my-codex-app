import { useCallback, useEffect, useRef } from "react";

const useMountedState = () => {
  const mountedRef = useRef(false);
  const isMounted = useCallback(() => mountedRef.current, []);
  const a = 3;

  console.log(a)

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
};

export default useMountedState;
