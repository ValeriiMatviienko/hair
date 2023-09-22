import useContactForm from "@/app/hooks/useContactForm";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "react-toastify/dist/ReactToastify.css";

interface ContactFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ContactForm = ({ isOpen, setIsOpen }: ContactFormProps) => {
  const { inputValues, setInputValues, handleSubmitForm, toggleModal } =
    useContactForm();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const isDisabled = Object.values(inputValues).some((value) => value === "");
  const handleFormSubmittion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitForm(setIsOpen);
  };
  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          <button
            type="button"
            className="justify-end px-6 py-4 text-xl font-semibold rounded-full lg:px-12 navbutton bg-darkgreen text-white hover:text-darkgreen hover:bg-white border border-darkgreen"
            onClick={() => toggleModal({ open: true, setIsOpen })}
          >
            Contact Me
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => toggleModal({ open: false, setIsOpen })}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-8">
                    <div className="flex items-center justify-center flex-shrink-0">
                      <h1 className="text-2xl font-semibold text-black sm:text-4xl">
                        Contact form
                      </h1>
                    </div>
                    <p className="mt-8 mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
                      Fill in the form to contact me
                    </p>
                    <form
                      action="#"
                      className="space-y-8"
                      onSubmit={handleFormSubmittion}
                    >
                      <div>
                        <label
                          htmlFor="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Name
                        </label>
                        <input
                          id="text"
                          name="nameInput"
                          value={inputValues.nameInput}
                          onChange={handleChange}
                          type="text"
                          autoComplete="current-password"
                          required
                          className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-md appearance-none border-linegrey focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Name..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Number
                        </label>
                        <input
                          id="number"
                          name="numberInput"
                          value={inputValues.numberInput}
                          onChange={handleChange}
                          type="tel"
                          autoComplete="current-password"
                          required
                          className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-md appearance-none border-linegrey focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          name="descriptionInput"
                          value={inputValues.descriptionInput}
                          onChange={handleChange}
                          className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-md appearance-none border-linegrey focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        onClick={() => handleSubmitForm}
                        disabled={isDisabled}
                        className={`w-full px-5 py-3 text-sm font-medium text-center  rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300 bg-darkgreen text-white border border-darkgreen ${
                          isDisabled
                            ? "opacity-50 pointer-events-none"
                            : "hover:text-darkgreen hover:bg-white"
                        }`}
                      >
                        Send message
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
