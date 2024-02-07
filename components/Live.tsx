import { useMyPresence, useOthers } from "@/liveblocks.config";
import LiveCursor from "./cursor/LiveCursor";
import React, { useCallback } from "react";

const Live = () => {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
  }, []);
  return (
    <div>
      <LiveCursor others={others} />
    </div>
  );
};

export default Live;
