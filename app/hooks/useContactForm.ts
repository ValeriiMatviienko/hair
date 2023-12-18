import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { InputType, ToggleModalProps } from "../types/types";
import { useTranslations } from "next-intl";
import { useNavigationContext } from "../context/NavigationContext";

const useContactForm = () => {
  const t = useTranslations("Index");
  const { isContactFormOpen, setIsContactFormOpen } = useNavigationContext();
  const [inputValues, setInputValues] = useState<InputType>({
    nameInput: "",
    numberInput: "",
    descriptionInput: "",
  });
  const [isNumberValid, setIsNumberValid] = useState<boolean>(true);

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

  const handleSubmitForm = useCallback(
    (setIsOpen: (isOpen: boolean) => void) => {
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
          setIsContactFormOpen(false);
        })
        .catch(() => {
          toast.error(t("messageError"));
        });

      resetInputs();
      toggleModal({ open: false, setIsOpen });
    },
    [inputValues, resetInputs, setIsContactFormOpen, t, toggleModal]
  );

  const handleChange = useCallback(
    (e: { target: { name: string; value: string } }) => {
      const { name, value } = e.target;
      if (name === "numberInput") {
        const isValid = /^\d*$/.test(value);
        setIsNumberValid(isValid);
        if (!isValid) return;
      }
      setInputValues((prevState) => ({ ...prevState, [name]: value }));
    },
    [setInputValues]
  );

  const isDisabled = Object.values(inputValues).some((value) => value === "");

  const handleFormSubmittion = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmitForm(setIsContactFormOpen);
    },
    [handleSubmitForm, setIsContactFormOpen]
  );

  const toggleModalOpen = useCallback(() => {
    setIsContactFormOpen(true);
  }, [setIsContactFormOpen]);

  const toggleModalClose = useCallback(() => {
    resetInputs();
    setIsNumberValid(true);
    setIsContactFormOpen(false);
  }, [resetInputs, setIsContactFormOpen]);

  return {
    inputValues,
    handleSubmitForm,
    handleChange,
    isDisabled,
    handleFormSubmittion,
    toggleModalOpen,
    toggleModalClose,
    isNumberValid,
    isContactFormOpen,
  };
};

export default useContactForm;
