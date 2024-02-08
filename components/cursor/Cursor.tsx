import { COLORS } from "@/constants";
import CursorSVG from "@/public/assets/CursorSVG";
import { Type } from "lucide-react";

type Props = {
  colors: string;
  x: number;
  y: number;
  message: string;
};
const Cursor = ({ colors, x, y, message }: Props) => {
  return (
    <div
      className=" pointer-events-none absolute top-0 left-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={colors} />
      {message && (
        <div
          className=" absolute left-2 top-5 rounded-3xl px-4 py-2 "
          style={{ backgroundColor: colors }}
        >
          <p className=" text-white">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Cursor;
