// @ts-nocheck
import Link from 'next/link';
import Router from 'next/router';
import Logo from './Logo';
import { SearchIcon } from '@heroicons/react/outline';
import MainMenu from './MainMenu';
import UserMenu from './UserMenu';
import Typing from './Typing';
import HeaderTop from './HeaderTop';

const runSearch = () => {
	alert('arama bölümü eklenecek...');
};

export function Header() {
	return (
		<>
			<div className="relative z-50 hidden bg-navy-500 md:block">
				<div className="container mx-auto flex h-9 items-center justify-between align-middle text-sm text-white">
					<div className="flex">
						<Link href="tel:+905061449973">
							<a className="mr-4 flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="mr-1"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="#f27919"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
									<path d="M15 7a2 2 0 0 1 2 2" />
									<path d="M15 3a6 6 0 0 1 6 6" />
								</svg>
								0506 144 99 73
							</a>
						</Link>
						<Link href="https://api.whatsapp.com/send?phone=+905061449973">
							<a className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="mr-1"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="#25d366"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
									<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
								</svg>
								0506 144 99 73
							</a>
						</Link>
					</div>
					<div id="typewrite" className="text-center">
						<Typing />
					</div>
					<div className="flex items-center">
						<HeaderTop />
						<SearchIcon className="h-5 w-5 cursor-pointer" onClick={runSearch} />
					</div>
				</div>
			</div>
			<header
				id="header"
				className="absolute z-40 h-auto w-full bg-white/50 shadow-sm backdrop-blur transition-all"
			>
				<div className="container mx-auto flex h-16 w-full items-center justify-between">
					<Link href="/">
						<a>
							<Logo textColor="#f97316" />
						</a>
					</Link>
					<MainMenu />
				</div>
			</header>
		</>
	);
}
