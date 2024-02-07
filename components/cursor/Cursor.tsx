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
    </div>
  );
};

export default Cursor;
