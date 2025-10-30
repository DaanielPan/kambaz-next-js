import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

interface ModuleControlButtonsProps {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void; // ✅ added
}

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule, // ✅ added
}: ModuleControlButtonsProps) {
  return (
    <div className="float-end">
      {/* ✅ Pencil Edit Button */}
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary me-3"
      />

      {/* ✅ Trash Delete Button */}
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteModule(moduleId)}
      />

      <GreenCheckmark />
      <BsPlus className="fs-1" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
