import Image from 'next/image';
import Link from 'next/link';
import image1 from '../../public/images/home-1.jpg';
import image2 from '../../public/images/home-6.jpg';
import image3 from '../../public/images/home-4.jpg';
import image4 from '../../public/images/home-5.jpg';
import banner2 from '../../public/images/creative-team.jpg';

const features = [
	{
		name: 'Indoor Tasarım',
		description:
			'Ev, Ofis, Cafe, Restaurant vb. mekanlarınızın duvarlarına estetik dokunuşlarda bulunuyor, tasarımdan imalata tam çözüm sağlıyoruz.',
	},
	{
		name: 'Outdoor Tasarım',
		description:
			'Fuar Standları, Cafe, Bar, Hotel vb. mekanlarınızın dış cephe giydirme, metal tabela ve sanatsal tasarım ihtiyaçlarını karşılıyoruz.',
	},
	{
		name: 'Grafik Tasarım',
		description:
			'Firmanızın kurumsal kimliğini oluşturuyor, ofset, serigraf ve metal imalatımızla tüm ihtiyaçlarınızı karşıyor, markanıza değer katıyoruz.',
	},
	{
		name: 'Metal Aksesuar Tasarım',
		description:
			'Sıradanlığın ötesinde tasarımlarımızla mekanlarınızı özelleştirerek estetik ve sanat kaygınızı sıfırlıyor, hayatınızı renklendiriyoruz.',
	},
	{
		name: 'Metal Aksesuar İmalatı',
		description:
			'Birbirinden şık metal aksesuarların imalatını son teknoloji makina parkurumuzda gerçekleştiriyor, zamandan ve kaliteden tasarruf etmenizi sağlıyoruz.',
	},
	{
		name: 'Fason Lazer Kesim',
		description:
			'Kişiye özel tasarımlar veya seri üretim fason metal lazer kesim işlerinizi de, kısa sürede ve uygun fiyata çözümlüyoruz. Siz tasarlayın, biz üretelim.',
	},
];

const meta = {
	title: 'Hizmetlerimiz',
	description: 'PopArt Metal Aksesuar Sanayi Ltd.Şti. Hizmetlerimi',
	date: '2022-02-24T15:22:00.000Z',
};
export default function Services() {
	return (
		<>
			<section className="bg-white">
				<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-10 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
					<div>
						<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
							{meta.title}
						</h1>
						<p className="mt-4 text-gray-600">
							PopArt Metal iç mekan tasarım ve metal aksesuar üretim ve satışı hizmetlerinin dışında
							ihtiyacınıza uygun alternatif çözümler sunmak için kurulmuş bir reklam, tanıtım ve
							organizasyon ajansıdır.
						</p>
						<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
							{features.map((feature) => (
								<div key={feature.name} className="border-t border-gray-200 pt-4">
									<dt className="font-medium text-gray-900">{feature.name}</dt>
									<dd className="mt-2 text-sm text-gray-600">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
					<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
						<Image src={image1} alt="" className="rounded-lg bg-gray-100" />
						<Image src={image2} alt="" className="rounded-lg bg-gray-100" />
						<Image src={image3} alt="" className="rounded-lg bg-gray-100" />
						<Image src={image4} alt="" className="rounded-lg bg-gray-100" />
					</div>
				</div>
			</section>
			<section className="relative overflow-hidden bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
						<svg
							className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>
						<div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div>
						<div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
							<div className="sm:text-center lg:text-left">
								<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
									<span className="block xl:inline">Tasarım ekibimiz </span>
									<span className="block text-orange-500 xl:inline">sizin için hazır</span>
								</h1>
								<p className="mt-3 text-base text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl md:mt-5 lg:mx-0">
									Mekanlarınız için tasarım ekibimizin ön çalışma yapmasını ister misiniz? Hemen
									bizimle iletişime geçin. Hayata farklı bir pencereden bakmanız için ofisimizde
									kahvenizi yudumlarken size kendimizi anlatalım...
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<Link href="/meeting">
											<a className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 md:py-4 md:px-10 md:text-lg">
												Randevu Alın
											</a>
										</Link>
									</div>
									<div className="mt-3 sm:mt-0 sm:ml-3">
										<Link href="/contact">
											<a className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-100 px-8 py-3 text-base font-medium text-orange-700 hover:bg-orange-200 md:py-4 md:px-10 md:text-lg">
												İletişime Geçin
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						src="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
						alt="PopArt Metal"
						src={banner2}
					/>
				</div>
			</section>
		</>
	);
}

Services.layoutProps = { meta };
