import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { InputType, ToggleModalProps } from "../types/types";
import { useTranslations } from "next-intl";

const useContactForm = () => {
  const t = useTranslations("Index");
  const [inputValues, setInputValues] = useState<InputType>({
    nameInput: "",
    numberInput: "",
    descriptionInput: "",
  });

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
      })
      .catch(() => {
        toast.error(t("messageError"));
      });

    resetInputs();
    toggleModal({ open: false, setIsOpen });
  };

  return { inputValues, setInputValues, handleSubmitForm, toggleModal };
};

export default useContactForm;
