import Image from 'next/image';
import Link from 'next/link';
import image1 from '../../public/images/home-1.jpg';
import image2 from '../../public/images/home-2.jpg';
import image3 from '../../public/images/home-3.jpg';
import image4 from '../../public/images/home-4.jpg';
import image5 from '../../public/images/home-5.jpg';
import image6 from '../../public/images/home-6.jpg';
import image7 from '../../public/images/home-7.jpg';
import creativeTeam from '../../public/images/creative-team.jpg';

const meta = {
	title: 'Hakkımızda',
	description: 'PopArt Metal Aksesuar Sanayi Ltd.Şti. Hakkında',
	date: '2022-02-24T15:22:00.000Z',
}

export default function AboutUs() {
	return (
		<>
			<section className="relative overflow-hidden bg-white">
				<div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
					<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
						<div className="sm:max-w-lg">
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
								{meta.title}
							</h1>
							<p className="mt-4 text-gray-600">
								PopArt Metal 20 senedir sektöründe hizmet veren profesyonel bir ekip tarafından
								2021'de kurulmuştur. Sıradışı tasarımlara imza atmaktan, çarpıcı tasarımlarını
								hayata geçirmekten ve yaşam alanlarınızı güzelleştirmekten haz alan bir ekiptir.
							</p>
							<p className="mt-4 text-gray-600">
								İş ahlakında profesyonellikten kesinlikle taviz vermeyen, müşteri ilişkilerinde ise
								ilk günkü amatör ve heyecanlı ruh hali ile hizmet veren ekibimizin her ne kadar çok
								fazla tecrübesi olsa da, her bir müşterisine, ilk müşterisi gibi ilgi gösterir,
								çalışmalarını titizlikle yürütür.
							</p>
							<p className="mt-4 text-gray-600">Tasarımlarımızı incelemeden karar vermeyin...</p>
						</div>
						<div>
							<div className="mt-6">
								<div
									aria-hidden="true"
									className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
								>
									<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
										<div className="flex items-center space-x-6 lg:space-x-8">
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
													<Image
														alt="PopArt Metal"
														src={image1}
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image2}
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image3}
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image4}
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image5}
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image6}
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image7}
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<Link href="/products">
									<a className="inline-block rounded-md border border-transparent bg-orange-500 py-3 px-8 text-center font-medium text-white hover:bg-orange-600">
										Ürünlerimiz
									</a>
								</Link>
							</div>
						</div>
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
						src={creativeTeam}
					/>
				</div>
			</section>
		</>
	);
}

AboutUs.layoutProps = { meta };
