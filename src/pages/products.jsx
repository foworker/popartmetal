import Image from 'next/image';
import Link from 'next/link';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';

import img1 from '../../public/images/products/agac-at.jpg';
import img2 from '../../public/images/products/cicekler.jpg';
import img3 from '../../public/images/products/dikey-yapraklar.jpg';
import img4 from '../../public/images/products/dunya-haritasi.jpg';
import img5 from '../../public/images/products/gemotrik-cicekler.jpg';
import img6 from '../../public/images/products/kadin-yuzu.jpg';
import img7 from '../../public/images/products/kuslar.jpg';
import img8 from '../../public/images/products/minimalist-kadin-yuzu.jpg';
import img9 from '../../public/images/products/oklar.jpg';
import img10 from '../../public/images/products/serotonin-molekul.jpg';
import img11 from '../../public/images/products/soyut-kadin-ve-kus.jpg';
import img12 from '../../public/images/products/soyut-yuz.jpg';
import img13 from '../../public/images/products/soyut-yuzler.jpg';
import img14 from '../../public/images/products/starry-night.jpg';
import img15 from '../../public/images/products/yapraklar.jpg';

const meta = {
	title: 'Ürünlerimiz',
	description: 'PopArt Metal Aksesuar Sanayi Ltd.Şti. Ürünleri',
	date: '2022-02-24T15:22:00.000Z',
}

const products = [
	{
		id: 1,
		name: 'Ağaç At',
		image: img1,
		href: "/products",
	},
	{
		id: 2,
		name: 'Çiçekler',
		image: img2,
		href: "/products",
	},
	{
		id: 3,
		name: 'Dikey Yapraklar',
		image: img3,
		href: "/products",
	},
	{
		id: 4,
		name: 'Dünya Haritası',
		image: img4,
		href: "/products",
	},
	{
		id: 5,
		name: 'Geometrik Çiçekler',
		image: img5,
		href: "/products",
	},
	{
		id: 6,
		name: 'Kadın Yüzü',
		image: img6,
		href: "/products",
	},
	{
		id: 7,
		name: 'Kuşlar',
		image: img7,
		href: "/products",
	},
	{
		id: 8,
		name: 'Minimalist Kadın Yüzü',
		image: img8,
		href: "/products",
	},
	{
		id: 9,
		name: 'Oklar ve Sözler',
		image: img9,
		href: "/products",
	},
	{
		id: 10,
		name: 'Serotonin Molekülü',
		image: img10,
		href: "/products",
	},
	{
		id: 11,
		name: 'Soyut Kadın ve Kuş',
		image: img11,
		href: "/products",
	},
	{
		id: 12,
		name: 'Soyut Yüz',
		image: img12,
		href: "/products",
	},
	{
		id: 13,
		name: 'Soyut Yüzler',
		image: img13,
		href: "/products",
	},
	{
		id: 14,
		name: 'Starry Night',
		image: img14,
		href: "/products",
	},
	{
		id: 15,
		name: 'Yapraklar',
		image: img15,
		href: "/products",
	},
];

export default function Products() {
	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h2 className="text-2xl font-extrabold text-gray-900">{meta.title}</h2>
			<LightGallery
				mode="lg-fade"
				controls="false"
				elementClassNames="mt-6 grid grid-cols-1 md:grid-cols-3 md:gap-x-6"
				plugins={[lgZoom]}
			>
				{products.map((urun) => (
					<a
						key={urun.id}
						data-lg-size="1000-1000"
						className="gallery-item relative w-full h-80 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-96 lg:aspect-w-1 lg:aspect-h-1 mb-6 cursor-pointer group"
						data-src={urun.image.src}
						data-sub-html={urun.name}
					>
						<Image src={urun.image} alt={urun.name} className="w-full h-full object-center object-cover" layout="fill" />
						<div className="absolute px-5 py-4 w-full bg-white/90 -bottom-24 group-hover:bottom-0 transition-all">
							<h3 className="text-base font-semibold text-gray-900">
								<Link href={urun.href}>
									<a><span className="relative inset-0" />
										{urun.name}</a>
								</Link>
							</h3>
						</div>
					</a>
				))}
			</LightGallery>
		</section>
	);
}

Products.layoutProps = { meta };
