import { useDroppable } from "@dnd-kit/core";

const DroppableContainer = ({ id, children }) => {
  const { isOver, attributes, listeners, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        background: isOver ? "#f0f0f0" : "transparent",
        padding: "10px",
        minHeight: "100px",
      }}
    >
      {children}
    </div>
  );
};

export default DroppableContainer;
