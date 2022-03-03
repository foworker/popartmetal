import Image from 'next/image';
import Link from 'next/link';;

import img1 from './images/metal-duvar-sanati-ev-dekorunda-neden-en-onemlidir.jpg';
import img2 from './images/kucuk-mekanlar-icin-dekorasyon-fikirleri.jpg';
import img3 from './images/oturma-odanizi-nasil-dekore-edersiniz.jpg';
import img4 from './images/dunya-haritasi.jpg';
import img5 from './images/gemotrik-cicekler.jpg';
import img6 from './images/kadin-yuzu.jpg';
import img7 from './images/kuslar.jpg';
import img8 from './images/minimalist-kadin-yuzu.jpg';
import img9 from './images/oklar.jpg';
import img10 from './images/serotonin-molekul.jpg';
import img11 from './images/soyut-kadin-ve-kus.jpg';
import img12 from './images/soyut-yuz.jpg';
import img13 from './images/soyut-yuzler.jpg';
import img14 from './images/starry-night.jpg';
import img15 from './images/yapraklar.jpg';

const posts = [
	{
		id: 1,
		name: 'Metal Duvar Sanatı Ev Dekorunda Neden En Önemlidir?',
		image: img1,
		href: "/metal-duvar-sanati-ev-dekorunda-neden-en-onemlidir",
	},
	{
		id: 2,
		name: 'Küçük Mekanlar İçin Dekorasyon Fikirleri',
		image: img2,
		href: "/kucuk-mekanlar-icin-dekorasyon-fikirleri",
	},
	{
		id: 3,
		name: 'Oturma Odanızı Nasıl Dekore Edersiniz?',
		image: img3,
		href: "/oturma-odanizi-nasil-dekore-edersiniz",
	},
];

const meta = {
	title: 'Bizden Haberler ve Mekanlarınız İçin Tasarım Tavsiyeleri',
	description: 'Bizden Haberler ve Mekanlarınız İçin Tasarım Tavsiyeleri',
}

export default function Blogs() {
	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h2 className="text-2xl font-extrabold text-gray-900">{meta.title}</h2>
			<div className="mt-6 grid grid-cols-1 md:grid-cols-3 md:gap-x-6">
				{posts.map((urun) => (
					<Link
						key={urun.id}
						href={'/blog/' + urun.href}
					>
						<a className="relative w-full h-80 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-96 lg:aspect-w-1 lg:aspect-h-1 mb-6 cursor-pointer">
							<Image src={urun.image} alt={urun.name} className="w-full h-full object-center object-cover" layout="fill" />
							<div className="absolute px-5 py-4 w-full bg-white/90 bottom-0">
								<h3 className="text-base font-semibold text-gray-900"><span className="relative inset-0" />{urun.name}</h3>
							</div>
						</a>
					</Link>
				))}
			</div>
		</section>
	);
}

Blogs.layoutProps = { meta };
