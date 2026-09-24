import { useState } from "react";
import Modal from "@shared/components/Modal";
import * as S from "./EditRoleModal.styles";

const ROLE_OPTIONS = [
  {
    id: "user",
    title: "Customer (Standard User)",
    description: "Can browse store, add to cart, and place orders. No admin access.",
  },
  {
    id: "admin",
    title: "Administrator (Full Access)",
    description: "Can manage products, orders, users, and modify all system data.",
  },
  {
    id: "demo-admin",
    title: "Demo Administrator (Read-Only)",
    description: "Can view admin dashboards and reports, but modification requests are blocked.",
  },
];

const EditRoleModal = ({
  isOpen,
  onClose,
  user,
  onSave,
  isPending = false,
}) => {
  const [selectedRole, setSelectedRole] = useState(user?.role || "user");

  if (!isOpen || !user) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ userId: user._id || user.id, role: selectedRole });
  };

  const isUnchanged = selectedRole === user.role;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Change Role: ${user.name || "User"}`}
      maxWidth="500px"
    >
      <S.FormContainer onSubmit={handleSubmit}>
        <S.RoleOptionsGroup>
          {ROLE_OPTIONS.map((opt) => (
            <S.RoleOptionCard
              key={opt.id}
              isSelected={selectedRole === opt.id}
            >
              <input
                type="radio"
                name="role"
                value={opt.id}
                checked={selectedRole === opt.id}
                onChange={() => setSelectedRole(opt.id)}
                disabled={isPending}
              />
              <S.RoleTextGroup>
                <S.RoleTitle>{opt.title}</S.RoleTitle>
                <S.RoleDesc>{opt.description}</S.RoleDesc>
              </S.RoleTextGroup>
            </S.RoleOptionCard>
          ))}
        </S.RoleOptionsGroup>

        <S.WarningNote>
          <strong>Security note:</strong> Updating a user&apos;s role may invalidate their
          active sessions and require them to sign in again to receive new permissions.
        </S.WarningNote>

        <S.ModalActions>
          <S.CancelButton
            type="button"
            onClick={onClose}
            disabled={isPending}
          >
            Cancel
          </S.CancelButton>
          <S.SubmitButton
            type="submit"
            disabled={isPending || isUnchanged}
          >
            {isPending ? "Updating Role..." : "Save Role"}
          </S.SubmitButton>
        </S.ModalActions>
      </S.FormContainer>
    </Modal>
  );
};

export default EditRoleModal;
