import { useMyPresence, useOthers } from "@/liveblocks.config";
import LiveCursor from "./cursor/LiveCursor";
import React, { useCallback, useEffect, useState } from "react";
import CursorChat from "./cursor/CursorChat";
import { CursorMode } from "@/types/type";

const Live = () => {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;
  const [cursorState, setCursorstate] = useState({ mode: CursorMode.Hidden });

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } });
  }, []);

  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    setCursorstate({ mode: CursorMode.Hidden });

    updateMyPresence({ cursor: null, message: null });
  }, []);

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } });
  }, []);

  useEffect(() => {
    const onkeyup = (e: KeyboardEvent) => {
      if (e.key === "/") {
        setCursorstate({
          mode: CursorMode.Chat,
          previousMessage: null,
          message: "",
        });
      } else if (e.key === "Escape") {
        updateMyPresence({ message: "" });
        setCursorstate({ mode: CursorMode.Hidden });
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/ ") {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onkeyup);

    return () => {
      window.removeEventListener("keyup", onkeyup);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [updateMyPresence]);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className=" border-5 border-green-500 h-screen w-full flex justify-center items-center text-center"
    >
      <h1 className=" text-2xl text-white">LiveBlock Figma Clone</h1>

      {cursor && (
        <CursorChat
          cursor={cursor}
          cursorState={cursorState}
          setCursorstate={setCursorstate}
          updateMyPresence={updateMyPresence}
        />
      )}
      <LiveCursor others={others} />
    </div>
  );
};

export default Live;
