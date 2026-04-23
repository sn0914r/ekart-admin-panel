import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Overlay, ModalBox, CloseButton, ModalHeader, ModalTitle, ModalContent } from './Modal.styles';

const Modal = ({ isOpen, onClose, title, children, maxWidth = '500px' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalBox $maxWidth={maxWidth} onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={18} />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalBox>
    </Overlay>,
    document.body
  );
};

export default Modal;
