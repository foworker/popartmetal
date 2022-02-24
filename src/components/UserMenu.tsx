// @ts-nocheck
import { signIn, signOut, useSession } from 'next-auth/react';
import Router from 'next/router';
import Link from 'next/link';
import { ChevronDoubleRightIcon, ChevronDownIcon, UserCircleIcon } from '@heroicons/react/outline';

export default function UserMenu() {
	const { data: session } = useSession();
	if (session) {
		return (
			<div className="dropdown relative mr-3">
				<button className="flex items-center px-10">
					<UserCircleIcon className="mr-2 h-6 w-6" />
					<span className="font-medium">Hesabım</span>
					<ChevronDownIcon className="ml-2 h-3 w-3  text-navy-500" />
				</button>
				<nav
					tabIndex={1}
					className="invisible absolute left-0 top-full mt-2 w-full cursor-pointer bg-white opacity-0 shadow transition-all"
				>
					<ul>
						<li className="mb-3 text-sm font-medium">
							<button
								onClick={() => signIn()}
								className="flex w-full items-center px-3 py-2 text-navy-500 hover:bg-slate-100"
							>
								<ChevronDoubleRightIcon className="mr-2 h-2 w-2" />
								<span>Giriş Yap</span>
							</button>
						</li>
						<li className="mb-3 text-sm font-medium">
							<button
								onClick={() => signIn()}
								className="flex w-full items-center px-3 py-2 text-navy-500 hover:bg-slate-100"
							>
								<ChevronDoubleRightIcon className="mr-2 h-2 w-2" />
								<span>Kayıt Ol</span>
							</button>
						</li>
					</ul>
				</nav>
			</div>
		);
	} else {
		return (
			<div className="dropdown relative mr-3">
				<button className="flex items-center px-10">
					<UserCircleIcon className="mr-2 h-6 w-6" />
					<span className="font-medium">Hesabım</span>
					<ChevronDownIcon className="ml-2 h-3 w-3  text-navy-500" />
				</button>
				<nav
					tabIndex={1}
					className="invisible absolute left-0 top-full mt-2 w-full cursor-pointer bg-white opacity-0 shadow transition-all"
				>
					<ul className="w-full">
						<li className="mb-3 text-sm font-medium">
							<Link href="/hesabim">
								<a className="flex items-center px-3 py-2 text-navy-500 hover:bg-slate-100">
									<ChevronDoubleRightIcon className="mr-2 h-2 w-2" />
									<span>Hesabım</span>
								</a>
							</Link>
						</li>
						<li className="mb-3 text-sm font-medium">
							<Link href="/siparis-takibi">
								<a className="flex items-center px-3 py-2 text-navy-500 hover:bg-slate-100">
									<ChevronDoubleRightIcon className="mr-2 h-2 w-2" />
									<span>Siparişlerim</span>
								</a>
							</Link>
						</li>
						<li className="mb-3 text-sm font-medium">
							<button
								onClick={() => signIn()}
								className="flex w-full items-center px-3 py-2 font-medium text-orange-500 hover:bg-slate-100 hover:text-navy-500"
							>
								<ChevronDoubleRightIcon className="mr-2 h-2 w-2" />
								<span>Çıkış Yap</span>
							</button>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
