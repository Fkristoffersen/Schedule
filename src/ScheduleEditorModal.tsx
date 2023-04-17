import React from "react";
import Modal from "react-modal";
import ScheduleEditor from "./ScheduleEditor";

interface ScheduleEditorModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function ScheduleEditorModal({ isOpen, onRequestClose }: ScheduleEditorModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "70%",
          overflow: "auto",
          outline: "none",
          padding: "20px"
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }
      }}
    >
      <h2>Edit School Schedule</h2>
      <div>
      <ScheduleEditor />
    </div>
      {/* Add your school schedule editor component here */}
    </Modal>
  );
}

export default ScheduleEditorModal;
