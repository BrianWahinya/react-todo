import Task from "../Task/Task";
import { useTasksContext } from "../../context/TasksContext.jsx";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import "./tasks.css";
import DraggableCard from "../DnD/DraggableCard.jsx";
import DroppableContainer from "../DnD/DroppableContainer.jsx";
import { useState } from "react";

const showTasks = (items) => {
  const allTasks = items.map((item) => {
    return (
      <DraggableCard key={item.id} id={item.id}>
        <DroppableContainer id={item.id}>
          <Task {...item} />
        </DroppableContainer>
      </DraggableCard>
    );
  });
  return allTasks;
};

const Tasks = () => {
  const { tasks, reorderTasks } = useTasksContext();
  const [activeItem, setActiveItem] = useState(null);

  const handleDragEnd = (event) => {
    // console.log(event);
    setActiveItem(null);
    const { active, over } = event;
    if (active?.id && over?.id && active?.id !== over?.id) {
      // const reordered = arrayMove(tasks, active.id, over.id);
      const draggedIndex = tasks.findIndex((item) => item.id === active.id);
      const droppedIndex = tasks.findIndex((item) => item.id === over.id);
      const draggedItem = tasks[draggedIndex];
      const reordered = tasks
        .toSpliced(draggedIndex, 1)
        .toSpliced(droppedIndex, 0, draggedItem);
      reorderTasks(reordered);
    }
  };

  const handleDragStart = (event) => {
    // console.log(event);
    const { active } = event;
    if (active?.id) {
      const draggedIndex = tasks.findIndex((item) => item.id === active.id);
      const draggedItem = tasks[draggedIndex];
      setActiveItem(draggedItem);
    }
  };

  return (
    <div className="div-tasks">
      {tasks.length > 0 ? (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          {showTasks(tasks)}
          <DragOverlay>{activeItem && <Task {...activeItem} />}</DragOverlay>
        </DndContext>
      ) : (
        "Please add a task"
      )}
    </div>
  );
};

export default Tasks;
