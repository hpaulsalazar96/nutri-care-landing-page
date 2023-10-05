'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ButtonPrimary } from './../buttons/ButtonPrimary'
import { CalendlyWidget } from '../misc/CalendlyWidget'

type Props = {
    children:React.ReactNode,
    addClass?:string
}

export const ModalCalendly: React.FC<Props> = ({children, addClass}) => {
  let [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(!isOpen)
    
    
  }

  const openModal = () => {
    setIsOpen(!isOpen)
    
    
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <ButtonPrimary addClass={addClass} onClick={openModal}>{children}</ButtonPrimary>
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
            <div className="" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center mt-40 text-center items-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-100"
              >
                <Dialog.Panel className=" h-auto m-auto transform overflow-hidden rounded-2xl bg-nutricare-200 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  </Dialog.Title>
                  <div className="mt-2">
                    <CalendlyWidget addClass='w-screen/2 h-96'/>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
  )
}