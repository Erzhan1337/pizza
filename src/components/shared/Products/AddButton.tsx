import { Grid2x2Plus } from "lucide-react";
import { cn } from "@/lib/utils";

function AddButton({
  text,
  handleClick,
  className,
  canMake,
}: {
  text: string;
  handleClick: () => void;
  className?: string;
  canMake: boolean | undefined;
}) {
  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center py-2 px-3 rounded-lg bg-[#FFFAF4] text-primary font-bold cursor-pointer hover:scale-95 transition-all duration-300 ease-linear",
        className,
      )}
    >
      {canMake && <Grid2x2Plus size={20} className="text-primary mr-2" />}
      {text}
    </button>
  );
}

export default AddButton;
