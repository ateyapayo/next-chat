"use client";

import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { useState } from "react";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: User[];
}
const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState();

  return <div>GroupChatModal</div>;
};

export default GroupChatModal;
