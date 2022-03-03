import Image from 'next/image';

const meta = {
	title: 'İletişim',
	description: 'PopArt Metal Aksesuar Sanayi Ltd.Şti. İletişim bilgileri',
	date: '2022-02-24T15:22:00.000Z',
}

export default function Contact() {
	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h2 className="text-2xl font-extrabold text-gray-900">{meta.title}</h2>
			<div>
				<div className="mt-10 sm:mt-0">
					<div className="md:grid md:grid-cols-3 md:gap-6">
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<p className="mt-1 text-sm text-gray-600">PopArt Metal Ticaret San. Ltd.Şti İletişim Bilgileri</p>
							</div>
							<div className="px-4 sm:px-0 py-2">
								<h3 className="text-lg font-medium leading-6 text-gray-900">Adres</h3>
								<address className="mt-1 text-sm text-gray-600">
									Demirciler Sanayi Sitesi, B6 Blok No:68<br />
									İkitelli / İstanbul
								</address>
							</div>
							<div className="px-4 sm:px-0 py-2">
								<h3 className="text-lg font-medium leading-6 text-gray-900">Telefon</h3>
								<p className="mt-1 text-sm text-gray-600"><a href="tel:+905061449973">0506 144 99 73</a></p>
							</div>
							<div className="px-4 sm:px-0 py-2">
								<h3 className="text-lg font-medium leading-6 text-gray-900">WhatsApp</h3>
								<p className="mt-1 text-sm text-gray-600">
									<a href="https://api.whatsapp.com/send?phone=+905061449973&amp;text=Merhaba PopArt.">0506 144 99 73</a>
								</p>
							</div>
							<div className="px-4 sm:px-0 py-2">
								<h3 className="text-lg font-medium leading-6 text-gray-900">Email</h3>
								<p className="mt-1 text-sm text-gray-600">destek@popartmetal.com</p>
							</div>
						</div>
						<div className="mt-5 md:mt-0 md:col-span-2">
							<form action="#" method="POST">
								<div className="shadow overflow-hidden sm:rounded-md">
									<div className="px-4 py-5 bg-white sm:p-6">
										<div className="grid grid-cols-6 gap-6 mb-6">
											<div className="col-span-3">
												<label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
													İsim
												</label>
												<input
													type="text"
													name="first-name"
													id="first-name"
													autoComplete="given-name"
													className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
												/>
											</div>
											<div className="col-span-3">
												<label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
													Soyisim
												</label>
												<input
													type="text"
													name="last-name"
													id="last-name"
													autoComplete="family-name"
													className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
												/>
											</div>
										</div>
										<div className="grid grid-cols-6 gap-6">
											<div className="col-span-3">
												<label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
													E-posta Adresi
												</label>
												<input
													type="text"
													name="email-address"
													id="email-address"
													autoComplete="email"
													className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
												/>
											</div>
											<div className="col-span-3">
												<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
													Telefon Numarası
												</label>
												<input
													type="text"
													name="phone"
													id="phone"
													autoComplete="phone"
													className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
												/>
											</div>
											<div className="col-span-6">
												<label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
													Websiteniz
												</label>
												<div className="mt-1 flex rounded-md shadow-sm">
													<span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
														http://
													</span>
													<input
														type="text"
														name="company-website"
														id="company-website"
														className="focus:ring-orange-500 focus:border-orange-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
														placeholder="www.websiteniz.com"
													/>
												</div>
											</div>
											<div className="col-span-6">
												<label htmlFor="mesage" className="block text-sm font-medium text-gray-700">
													Mesajınız
												</label>
												<div className="mt-1">
													<textarea
														id="mesage"
														name="mesage"
														rows={3}
														className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
														placeholder="Mesajınız..."
														defaultValue={''}
													/>
												</div>
												<p className="mt-2 text-sm text-gray-500">
													Bizimle görüş ve düşüncelerinizi paylaşabilirsiniz...
												</p>
											</div>
										</div>
									</div>
									<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
										<button
											type="submit"
											className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
										>
											Save
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Contact.layoutProps = { meta };