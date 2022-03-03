import Link from 'next/link';
import { ChevronDownIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline';
export default function HeaderTop() {
	return (
		<div className="dropdown relative">
			<button className="flex items-center px-10">
				<span>Kurumsal</span>
				<ChevronDownIcon className="ml-1 h-3 w-3" />
			</button>
			<nav
				tabIndex={1}
				className="invisible absolute left-0 top-full mt-2 w-full cursor-pointer bg-white py-2 opacity-0 shadow transition-all"
			>
				<ul>
					<li className="text-sm font-medium">
						<Link href="/about">
							<a className="flex items-center px-3 py-2 text-navy-500 hover:bg-slate-100">
								<ChevronDoubleRightIcon className="mr-2 h-2 w-2" />
								<span>Hakkımızda</span>
							</a>
						</Link>
					</li>
					<li className="text-sm font-medium">
						<Link href="/references">
							<a className="flex items-center px-3 py-2 text-navy-500 hover:bg-slate-100">
								<ChevronDoubleRightIcon className="mr-2 h-2 w-2" />
								<span>Referanslar</span>
							</a>
						</Link>
					</li>
					<li className="text-sm font-medium">
						<Link href="/blog">
							<a className="flex items-center px-3 py-2 text-navy-500 hover:bg-slate-100">
								<ChevronDoubleRightIcon className="mr-2 h-2 w-2" />
								<span>Blog</span>
							</a>
						</Link>
					</li>
					<li className="text-sm font-medium">
						<Link href="/contact">
							<a className="flex items-center px-3 py-2 text-navy-500 hover:bg-slate-100">
								<ChevronDoubleRightIcon className="mr-2 h-2 w-2" />
								<span>Bize Ulaşın</span>
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
