"use client";

import useContactForm from "@/app/hooks/useContactForm";
import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { FaEnvelope, FaPhone, FaUser, FaTimes } from "react-icons/fa";
import { useTranslations } from "next-intl";
import ContactButton from "./ContactButton";

const ContactForm: FC = () => {
  const t = useTranslations("Index");
  const {
    inputValues,
    handleSubmitForm,
    handleChange,
    isDisabled,
    handleFormSubmittion,
    toggleModalOpen,
    toggleModalClose,
    isNumberValid,
    isContactFormOpen,
  } = useContactForm();

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          <ContactButton
            onClick={toggleModalOpen}
            className="justify-end lg:px-6 navbutton"
          />
        </div>
      </div>

      <Transition appear show={isContactFormOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={toggleModalClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden transition-all transform bg-white shadow-xl rounded-2xl">
                  <button
                    onClick={toggleModalClose}
                    className="absolute p-2 rounded-full top-3 right-3 bg-white"
                    aria-label="Close modal"
                  >
                    {isContactFormOpen && <FaTimes className="w-6 h-6" />}
                  </button>
                  <div className="px-4 py-6 mx-auto">
                    <div className="flex items-center justify-center shrink-0">
                      <h1 className="text-xl font-semibold text-black sm:text-2xl">
                        {t("form_title")}
                      </h1>
                    </div>
                    <p className="mt-8 mb-8 font-light text-center text-black lg:mb-16 sm:text-xl">
                      {t("form_subtitle")}
                    </p>
                    <form
                      action="#"
                      className="space-y-8"
                      onSubmit={handleFormSubmittion}
                    >
                      <div>
                        <label
                          htmlFor="text"
                          className="flex items-center mb-2 text-black"
                        >
                          <FaUser className="inline-block w-5 h-5 mr-2" />
                          {t("form_name")}
                        </label>
                        <input
                          id="text"
                          name="nameInput"
                          value={inputValues.nameInput}
                          onChange={handleChange}
                          type="text"
                          maxLength={50}
                          autoComplete="current-password"
                          required
                          className="relative block w-full px-3 py-2 text-black border rounded-md appearance-none focus:z-10 focus:outline-none sm:text-sm"
                          placeholder={t("form_name_placeholder")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="flex items-center mb-2 font-medium text-black"
                        >
                          <FaPhone className="inline-block w-5 h-5 mr-2" />
                          {t("form_number")}
                        </label>
                        <input
                          id="number"
                          name="numberInput"
                          value={inputValues.numberInput}
                          onChange={handleChange}
                          type="tel"
                          maxLength={20}
                          autoComplete="current-password"
                          required
                          className="relative block w-full px-3 py-2 text-black border rounded-md appearance-none focus:z-10 focus:outline-none sm:text-sm"
                          placeholder={t("form_number_placeholder")}
                        />
                        {!isNumberValid && (
                          <p className="mt-1 text-xs text-warning">
                            {t("form_number_tip")}
                          </p>
                        )}
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="flex items-center mb-2 font-medium text-black"
                        >
                          <FaEnvelope className="inline-block w-5 h-5 mr-2" />
                          {t("form_message")}
                        </label>
                        <textarea
                          id="message"
                          name="descriptionInput"
                          maxLength={600}
                          value={inputValues.descriptionInput}
                          onChange={handleChange}
                          className="relative block w-full px-3 py-2 text-black border rounded-md appearance-none focus:z-10 focus:outline-none sm:text-sm"
                          placeholder={t("form_message_placeholder")}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        onClick={() => handleSubmitForm}
                        disabled={isDisabled}
                        className={`w-full px-5 py-3 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none bg-darkgreen text-white border border-darkgreen ${
                          isDisabled
                            ? "opacity-50 pointer-events-none"
                            : "hover:text-darkgreen hover:bg-white"
                        }`}
                      >
                        {t("form_button_send")}
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ContactForm;
