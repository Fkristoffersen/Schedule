import React, { useState } from "react";
import ScheduleEditorModal from "./ScheduleEditorModal";

function ScheduleEditorButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButtonClick() {
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Edit Schedule</button>
      <ScheduleEditorModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
    </div>
  );
}

export default ScheduleEditorButton;
