import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Popover, Transition } from '@headlessui/react';

const navigation = [
	{ name: 'Anasayfa', href: '/', class: 'font-medium uppercase transition duration-300 hover:text-orange-500 ' },
	{ name: 'Hakkımızda', href: '/about', class: 'font-medium uppercase transition duration-300 hover:text-orange-500 ' },
	{ name: 'Hizmetlerimiz', href: '/services', class: 'font-medium uppercase transition duration-300 hover:text-orange-500 ' },
	{ name: 'Ürünlerimiz', href: '/products', class: 'font-medium uppercase transition duration-300 hover:text-orange-500 ' },
	{ name: 'Referanslar', href: '/references', class: 'font-medium uppercase transition duration-300 hover:text-orange-500 ' },
	{ name: 'Bizden Haberler', href: '/blog', class: 'font-medium uppercase transition duration-300 hover:text-orange-500 ' },
	{ name: 'İletişim', href: '/contact', class: 'font-medium uppercase transition duration-300 hover:text-orange-500  -mx-4 rounded-2xl bg-orange-500 py-2 px-4  text-white hover:bg-gray-900' },
];

export default function MainMenu() {
	const router = useRouter();
	return (
		<Popover>
            <div className="relative  px-4 sm:px-0">
				<nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
					<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
						<div className="flex items-center justify-between w-full md:w-auto">
							<div className="-mr-2 flex items-center md:hidden">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Menüyü Aç</span>
									<MenuIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
					</div>
					<div className="hidden md:block md:space-x-8">
						{navigation.map((item) => (
							<Link key={item.name} href={item.href}>
								<a className={item.class}>{item.name}</a>
							</Link>
						))}
					</div>
				</nav>
			</div>
			<Transition as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
				<Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
						<div className="px-5 pt-4 flex items-center justify-between">
							<div className="-mr-2">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Menüyü Kapat</span>
									<XIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Link key={item.name} href={item.href}>
									<a className="block px-3 py-2 rounded-md font-medium uppercase transition duration-300 hover:text-orange-500">{item.name}</a>
								</Link>
							))}
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}