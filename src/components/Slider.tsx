// @ts-nocheck
import Link from 'next/link';
import Slider from 'react-slick';

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
				<div className="flex min-h-[500px] flex-col items-center justify-center px-20">
					<h2>Slide 1</h2>
					<h3>Slide 1</h3>
				</div>
			</div>
			<div className="bg-gradient-to-bl from-softpurple-500 via-softblue-500 to-softpink-500">
				<div className="flex min-h-[500px] flex-col items-center justify-center px-20">
					<h2>Slide 2</h2>
					<h3>Slide 2</h3>
				</div>
			</div>
		</Slider>
	);
}
