import Modal from "../Modal/Modal";
import { AlertTriangle } from "lucide-react";
import {
  ConfirmContent,
  IconWrapper,
  MessageText,
  SubText,
  ButtonGroup,
  CancelButton,
  ConfirmButton,
} from "./ConfirmModal.styles";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  subMessage = "This action cannot be undone.",
  confirmText = "Yes, Confirm",
  cancelText = "Cancel",
  isDestructive = true,
  isLoading = false,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="400px">
      <ConfirmContent>
        {isDestructive && (
          <IconWrapper>
            <AlertTriangle size={24} />
          </IconWrapper>
        )}
        <MessageText>{message}</MessageText>
        {subMessage && <SubText>{subMessage}</SubText>}

        <ButtonGroup>
          <CancelButton onClick={onClose} disabled={isLoading}>
            {cancelText}
          </CancelButton>
          <ConfirmButton
            onClick={onConfirm}
            $isDestructive={isDestructive}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : confirmText}
          </ConfirmButton>
        </ButtonGroup>
      </ConfirmContent>
    </Modal>
  );
};

export default ConfirmModal;
