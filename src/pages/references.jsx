import Image from 'next/image';
import placeholder from '../../public/images/placeholder.png';

const products = [
	{
		id: 1,
		name: 'Referans',
		href: '#',
		imageSrc: placeholder,
		imageAlt: "",
	},
	{
		id: 2,
		name: 'Referans',
		href: '#',
		imageSrc: placeholder,
		imageAlt: "",
	},
	{
		id: 3,
		name: 'Referans',
		href: '#',
		imageSrc: placeholder,
		imageAlt: "",
	},
	{
		id: 4,
		name: 'Referans',
		href: '#',
		imageSrc: placeholder,
		imageAlt: "",
	},
	{
		id: 5,
		name: 'Referans',
		href: '#',
		imageSrc: placeholder,
		imageAlt: "",
	},
	{
		id: 6,
		name: 'Referans',
		href: '#',
		imageSrc: placeholder,
		imageAlt: "",
	},

];

const meta = {
	title: 'Referanslarımız',
	description: 'PopArt Metal Aksesuar Sanayi Ltd.Şti. Referansları',
	date: '2022-02-24T15:22:00.000Z',
}

export default function References() {
	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h2 className="text-2xl font-extrabold text-gray-900">{meta.title}</h2>
			<div className="my-6">
				<p>Referanslarımız en kısa sürede eklenecektir.</p>
			</div>
			<div className="mt-6 grid grid-cols-1 md:grid-cols-3 md:gap-x-6">
				{products.map((product) => (
					<div key={product.id} className="group relative mb-6">
						<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
							<img
								src={product.imageSrc.src}
								alt={product.imageAlt}
								className="w-full h-full object-center object-cover lg:w-full lg:h-full"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

References.layoutProps = { meta };