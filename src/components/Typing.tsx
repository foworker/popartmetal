// @ts-nocheck
import React from 'react';
import Typed from 'typed.js';
const words = [
	'Butik Fiber Lazer Kesim',
	'Sıradışı Tasarım & Kişiye Özel Ürünler',
	'Metal Dekorasyon & Aksesuarlar & Butik Ürünler',
];

class Typing extends React.Component {
	componentDidMount() {
		const options = {
			strings: words,
			typeSpeed: 80,
			backSpeed: 40,
			loop: true,
			cursorChar: '|',
		};
		this.typed = new Typed(this.el, options);
	}

	componentWillUnmount() {
		this.typed.destroy();
	}

	render() {
		return (
			<span
				ref={(el) => {
					this.el = el;
				}}
			/>
		);
	}
}

export default Typing;
