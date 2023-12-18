import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { InputType, ToggleModalProps } from "../types/types";
import { useTranslations } from "next-intl";
import { useNavigationContext } from "../context/NavigationContext";

const useContactForm = () => {
  const t = useTranslations("Index");
  const [inputValues, setInputValues] = useState<InputType>({
    nameInput: "",
    numberInput: "",
    descriptionInput: "",
  });
  const [showToastContainer, setShowToastContainer] = useState<boolean>(false);
  const { setIsContactFormOpen } = useNavigationContext();

  const resetInputs = useCallback(() => {
    setInputValues({
      nameInput: "",
      numberInput: "",
      descriptionInput: "",
    });
  }, []);
  const toggleModal = useCallback(
    ({ open, setIsOpen }: ToggleModalProps) => {
      !open && resetInputs();
      setIsOpen(open);
    },
    [resetInputs]
  );

  const handleSubmitForm = (setIsOpen: (isOpen: boolean) => void) => {
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputValues.nameInput,
        number: inputValues.numberInput,
        message: inputValues.descriptionInput,
      }),
    })
      .then((response) => response.json())
      .then((_data) => {
        toast.success(t("messageSent"));
        setShowToastContainer(true);
        setIsContactFormOpen(false);
      })
      .catch(() => {
        toast.error(t("messageError"));
        setShowToastContainer(true);
      });

    resetInputs();
    toggleModal({ open: false, setIsOpen });
  };

  return {
    inputValues,
    setInputValues,
    handleSubmitForm,
    toggleModal,
  };
};

export default useContactForm;
