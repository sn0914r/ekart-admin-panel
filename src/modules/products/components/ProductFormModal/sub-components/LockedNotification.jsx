import { ShieldAlert } from "lucide-react";
import * as S from "../ProductFormModal.styles";

const LockedNotification = () => {
  return (
    <S.NotificationBox>
      <S.NotificationHeader>
        <ShieldAlert size={16} />
        <S.NotificationTitle>Image Management Locked</S.NotificationTitle>
      </S.NotificationHeader>
      <S.NotificationDescription>
        Currently, images are not updatable for existing entries. Please
        generate a new product entity entirely if visual assets require
        remapping.
      </S.NotificationDescription>
    </S.NotificationBox>
  );
};

export default LockedNotification;
