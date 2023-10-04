'use client'

import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, DevicePhoneMobileIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { appsLinks } from './../utils/appsLinks'
import Link from 'next/link'

export const MenuDropdown = () => {

    const [onActive, setOnActive] = useState(false)

    const { patientsUrl, doctorsUrl } = appsLinks

    const onDropdown = ({ target }: any) => {
        setOnActive(!onActive)
    }

    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex font-medium tracking-wide py-2 px-5 sm:px-8 border hover:border-nutricare-100 text-nutricare-100 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:text-nutricare-100 transition-all hover:shadow-nutricare-md" onClick={onDropdown}>
                        Apps
                        {
                            onActive ?
                                <ChevronUpIcon
                                    className="ml-2 -mr-1 h-5 w-5 text-nutricare-100 hover:text-nutricare-100"
                                    aria-hidden="true"
                                />
                                :
                                <ChevronDownIcon
                                    className="ml-2 -mr-1 h-5 w-5 text-nutricare-100 hover:text-nutricare-100"
                                    aria-hidden="true"
                                />
                        }
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white-300 shadow-lg shadow-nutricare-300 ring-1 ring-nutricare-100 ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href={patientsUrl} target='_blank'>
                                        <button
                                            className={`${active ? 'border border-nutricare-200 text-white' : 'border border-gray-500 text-nutricare-200'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            <DevicePhoneMobileIcon
                                                className="h-5 w-5 mr-2 text-nutricare-200 hover:text-nutricare-100"
                                                aria-hidden="true"
                                            />
                                            Pacientes NC
                                        </button>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href={doctorsUrl} target='_blank'>
                                        <button
                                            className={`${active ? 'border border-nutricare-200 text-white' : 'border border-gray-500 text-nutricare-200'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            <UserGroupIcon
                                                className="h-5 w-5 mr-2 text-nutricare-200 hover:text-nutricare-100"
                                                aria-hidden="true"
                                            />
                                            Doctores NC
                                        </button>
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}