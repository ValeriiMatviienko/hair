import { useState } from "react";
import { toast } from "react-toastify";

interface InputType {
  nameInput: string;
  numberInput: string;
  descriptionInput: string;
}

interface ToggleModalProps {
  open: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useContactForm = () => {
  const [inputValues, setInputValues] = useState<InputType>({
    nameInput: "",
    numberInput: "",
    descriptionInput: "",
  });

  const resetInputs = () => {
    setInputValues({
      nameInput: "",
      numberInput: "",
      descriptionInput: "",
    });
  };
  const toggleModal = ({ open, setIsOpen }: ToggleModalProps) => {
    !open && resetInputs();
    setIsOpen(open);
  };

  const handleSubmitForm = (setIsOpen: (isOpen: boolean) => void) => {
    fetch("https://formspree.io/f/mgejnlnr", {
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
      .then((data) => {
        if (data.ok) {
          toast.success("Message sent!");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      })
      .catch(() => {
        toast.error("Error sending the message. Please try again.");
      });

    resetInputs();
    toggleModal({ open: false, setIsOpen });
  };

  return { inputValues, setInputValues, handleSubmitForm, toggleModal };
};

export default useContactForm;
