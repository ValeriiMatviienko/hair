import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const Signin = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="hidden md:block">
          <button
            type="button"
            className="flex justify-end px-4 py-4 text-xl font-medium text-white border rounded-full hover:border-pink bg-darkgreen lg:px-8 navbutton hover:text-lightgold hover:bg-green"
            onClick={openModal}
          >
            Contact me
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <div className="flex items-center justify-center">
                          <Image
                            src="/images/5908.jpg"
                            alt="logo"
                            width={46}
                            height={46}
                          />
                          <Link
                            href="/"
                            className="ml-4 text-2xl font-semibold text-black"
                          >
                            Chef&apos;s Kitchen
                          </Link>
                        </div>
                        <h2 className="mt-10 text-3xl font-bold tracking-tight text-center text-lightgrey">
                          Sign in to your account
                        </h2>
                      </div>
                      <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                          <div>
                            <label htmlFor="email-address" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="email-address"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-none appearance-none rounded-t-md border-lightgrey border-opacity-40 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Email address"
                            />
                          </div>
                          <div>
                            <label htmlFor="password" className="sr-only">
                              Password
                            </label>
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-none appearance-none rounded-b-md border-lightgrey border-opacity-40 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Password"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="w-4 h-4 text-indigo-600 rounded border-lightgrey focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="remember-me"
                              className="block ml-2 text-sm text-gray-900"
                            >
                              Remember me
                            </label>
                          </div>

                          <div className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Forgot your password?
                            </a>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md group bg-pink hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <LockClosedIcon
                                className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                              />
                            </span>
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
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

export default Signin;
