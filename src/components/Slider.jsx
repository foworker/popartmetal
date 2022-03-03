import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import image1 from '../../public/images/slide-1.jpg';
import image2 from '../../public/images/slide-2.jpg';
import image3 from '../../public/images/slide-3.jpg';

export default function SlickSlider() {
	const settings = {
		dots: false,
		autoplay: true,
		pauseOnHover: true,
		infinite: true,
		fade: true,
		speed: 500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Slider {...settings}>
			<div className="bg-gradient-to-bl from-softpurple-500 via-softblue-500 to-softpink-500">
				<div className="flex items-center justify-center">
					<div className="w-1/2 p-4 md:p-12 flex flex-col items-center justify-center text-center">
						<h2 className="text-2xl md:text-6xl font-bold mb-4 tracking-tight text-sky-800 ">Sanatın Metal Hali</h2>
						<h3 className="text-base md:text-2xl font-medium text-gray-600">Ünlü ressamların tablolarının metal reprodüksiyonları duvarlarınızı süslesin...</h3>
					</div>
					<div className="w-1/2 block relative overflow-hidden">
						<Image alt="PopArt Metal" src={image1} className="w-full h-full object-center object-cover" layout='responsive' />
					</div>
				</div>
			</div>
			<div className="bg-gradient-to-bl from-softpurple-500 via-softblue-500 to-softpink-500">
				<div className="flex items-center justify-center">
					<div className="w-1/2 p-4 md:p-12 flex flex-col items-center justify-center text-center">
						<h2 className="text-2xl md:text-6xl font-bold mb-4 tracking-tight text-sky-800 ">Soyut & Estetik</h2>
						<h3 className="text-base md:text-2xl font-medium text-gray-600">Sıradışı tasarımları, profesyonel işçilik ile birleştirerek sizlere sunuyoruz...  </h3>
					</div>
					<div className="w-1/2 block relative overflow-hidden">
						<Image alt="PopArt Metal" src={image2} className="w-full h-full object-center object-cover" layout='responsive' />
					</div>
				</div>
			</div>
			<div className="bg-gradient-to-bl from-softpurple-500 via-softblue-500 to-softpink-500">
				<div className="flex items-center justify-center">
					<div className="w-1/2 p-4 md:p-12 flex flex-col items-center justify-center text-center">
						<h2 className="text-2xl md:text-6xl font-bold mb-4 tracking-tight text-sky-800 ">Tasarımdan İmalata</h2>
						<h3 className="text-base md:text-2xl font-medium text-gray-600">Mekanlarınız için önce kreatif tasarımları hazırlıyor, sonra imalat ve uygulamasını yapıyoruz... </h3>
					</div>
					<div className="w-1/2 block relative overflow-hidden">
						<Image alt="PopArt Metal" src={image3} className="w-full h-full object-center object-cover" layout='responsive' />
					</div>
				</div>
			</div>
		</Slider>
	);
}
