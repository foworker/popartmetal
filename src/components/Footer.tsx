// @ts-nocheck
import Script from 'next/script';
import Link from 'next/link';
import Logo from './Logo';
import { Icon } from './Icons';

export function Footer() {
	return (
		<footer className=" mt-10 bg-softpurple-300 pt-8 text-sm font-medium">
			<div className="container mx-auto flex justify-between gap-6">
				<div className="w-1/2">
					<Logo textColor="#333" />
					<p className="mt-5">
						PopArt, Metal ile sanatın buluştuğu noktada, sıradanlıktan hoşlanmayan, estetik ve
						sanatsever, popüler kültürden uzaklaşmayı benimsemiş müşterilerine yaratıcı tasarım
						ürünleri ile hitap eder.
					</p>
					<p className="mt-2">
						PopArt, butik fiber lazer kesim işlerinizde de fason çözüm ortağınız olarak da sizlere
						hizmet sunmaktadır.
					</p>
				</div>
				<div className="w-1/4"></div>
				<div className="w-1/4">
					<h5 className="mt-10 mb-3 border-b border-solid border-softpurple-500 text-base font-semibold uppercase">
						Kurumsal Bilgiler
					</h5>
					<ul>
						<li>
							<Link href="/hakkimizda">
								<a>Hakkımızda</a>
							</Link>
						</li>
						<li>
							<Link href="/hizmetlerimiz">
								<a>Hizmetlerimiz</a>
							</Link>
						</li>
						<li>
							<Link href="/referanslar">
								<a>Referanslar</a>
							</Link>
						</li>
						<li>
							<Link href="/iletisim">
								<a>İletişim</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="w-1/4">
					<h5 className="mt-10 mb-3 border-b border-solid border-softpurple-500 text-base font-semibold uppercase">
						İletişim Bilgilerimiz
					</h5>
					<div>destek@popartmetal.com</div>
					<div>+90 506 144 993</div>
					<div>
						Demirciler Sanayi Sitesi, B6 Blok No:68 <br /> İkitelli / İstanbul
					</div>
					<div className="mt-4 flex gap-3">
						<Link href="/">
							<a className="text-gray-500 hover:text-navy-500">
								<Icon name="facebook" size="20" />
							</a>
						</Link>
						<Link href="/">
							<a className="text-gray-500 hover:text-navy-500">
								<Icon name="twitter" size="20" />
							</a>
						</Link>
						<Link href="/">
							<a className="text-gray-500 hover:text-navy-500">
								<Icon name="instagram" size="20" />
							</a>
						</Link>
						<Link href="/">
							<a className="text-gray-500 hover:text-navy-500">
								<Icon name="youtube" size="20" />
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="border-softpuple-400 container mx-auto mt-4 border-t border-solid pt-4">
				<p className="text-center text-xs text-gray-500">
					Copyright &copy; 2020-{new Date().getFullYear()} PopArt Metal. Tüm hakları saklıdır.
				</p>
			</div>
			<Script id="show-header" strategy="lazyOnload">
				{`
                    let h = document.documentElement,
                        b = document.body,
                        st = 'scrollTop',
                        sh = 'scrollHeight',
                        scroll;
                    let scrollpos = window.scrollY;
                    let header = document.getElementById("header");
                    document.addEventListener('scroll', function() {
                        scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
                        scrollpos = window.scrollY;
                        if (scrollpos > 100) {
                            header.classList.add("fixed");
                            header.classList.remove("absolute");
                            header.classList.add("top-0");
                            header.classList.add("slide-in-down");
                        } else {
                            header.classList.remove("slide-in-down");
                            header.classList.remove("top-0");
                            header.classList.remove("fixed");
                            header.classList.add("absolute");
                        }
                    });
                `}
			</Script>
			<button id="dd-close"></button>
		</footer>
	);
}
