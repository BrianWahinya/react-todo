import { useDraggable } from "@dnd-kit/core";

const DraggableCard = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, isDragging } =
    useDraggable({
      id,
    });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "grab" }}
    >
      {children}
    </div>
  );
};
export default DraggableCard;
