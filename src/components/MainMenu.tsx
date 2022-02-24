// @ts-nocheck
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainMenu() {
	const router = useRouter();
	return (
		<nav className="inline-flex">
			<ul className="items-center justify-between pt-4 md:flex md:gap-8 md:pt-0">
				<li>
					<Link href="/">
						<a className="font-medium uppercase transition duration-300 hover:text-orange-500 ">
							Anasayfa
						</a>
					</Link>
				</li>
				<li>
					<Link href="/hakkimizda">
						<a className="font-medium uppercase transition duration-300 hover:text-orange-500 ">
							Hakkımızda
						</a>
					</Link>
				</li>
				<li>
					<Link href="/hizmetlerimiz">
						<a className="font-medium uppercase transition duration-300 hover:text-orange-500 ">
							Hizmetlerimiz
						</a>
					</Link>
				</li>
				<li>
					<Link href="/urunler">
						<a className="font-medium uppercase transition duration-300 hover:text-orange-500 ">
							Ürünlerimiz
						</a>
					</Link>
				</li>
				<li>
					<Link href="/referanslar">
						<a className="font-medium uppercase transition duration-300 hover:text-orange-500 ">
							Referanslar
						</a>
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<a className="font-medium uppercase transition duration-300 hover:text-orange-500 ">
							Bizden Haberler
						</a>
					</Link>
				</li>
				<li>
					<Link href="/iletisim">
						<a className="-mx-4 rounded-2xl bg-orange-500 py-2 px-4 uppercase text-white transition duration-300 hover:bg-gray-900">
							İletişim
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
