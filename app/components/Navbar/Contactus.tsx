import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

const Contactusform = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    alert(
      `Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`
    );
    setIsOpen(false);
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const isDisabled = Object.values(inputValues).some((value) => value === "");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className="hidden lg:block">
          <button
            type="button"
            className="justify-end px-6 py-4 text-xl font-semibold bg-transparent rounded-full lg:px-12 navbutton hover:bg-navyblue hover:text-white"
            onClick={openModal}
          >
            Contact Us
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                      <Link
                        href="/"
                        className="text-2xl font-semibold text-black sm:text-4xl"
                      >
                        Desgy Solutions
                      </Link>
                    </div>
                    <p className="mt-8 mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
                      Contact us now? Want to send us a feedback?
                    </p>
                    <form
                      action="#"
                      className="space-y-8"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          htmlFor="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your Name
                        </label>
                        <input
                          id="text"
                          name="input1"
                          value={inputValues.input1}
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
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your email
                        </label>
                        <input
                          id="email"
                          name="input2"
                          value={inputValues.input2}
                          onChange={handleChange}
                          type="email"
                          autoComplete="current-password"
                          required
                          className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-md appearance-none border-linegrey focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="xyz@email.com"
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
                          name="input3"
                          value={inputValues.input3}
                          onChange={handleChange}
                          className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-md appearance-none border-linegrey focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        onClick={handleClick}
                        disabled={isDisabled}
                        className="w-full px-5 py-3 text-sm font-medium text-center text-white rounded-lg disabled:opacity-50 bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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

export default Contactusform;
