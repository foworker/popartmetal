import Head from 'next/head';
import Image from 'next/image';
import image1 from '../../public/images/img-2.jpg';

export default function Contact() {
	return (
		<>
			<Head>
				<title>İletişim</title>
				<meta name="description" content="PopArt Metal Aksesuar Sanayi Ltd.Şti." />
			</Head>
			<section className="mb-6 mt-3 flex justify-between gap-10">
				<div className="w-1/2">
					<Image alt="PopArt Metal 1" src={image1} layout="responsive" objectFit="cover" />
				</div>
				<div className="w-1/2">
					<p className="mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna turpis, blandit quis
						convallis non, tempus eget dui. In at dui dictum, pulvinar nulla quis, consectetur
						sapien. Vestibulum euismod purus nibh, sit amet hendrerit lectus eleifend eget.
						Curabitur nunc magna, vehicula eu lectus at, vestibulum tristique augue. Aliquam
						viverra, quam eget auctor auctor, diam urna iaculis augue, eget tincidunt augue elit
						vitae nulla. Vivamus elit elit, molestie eget sodales id, congue in libero. Fusce nec
						tellus commodo, luctus orci quis, congue nibh. Mauris sed volutpat nulla, vel luctus
						diam. Aliquam imperdiet quis enim a vehicula. Morbi blandit luctus ex. Cras non tortor a
						mauris venenatis fermentum id non tortor. Integer in imperdiet nibh.
					</p>

					<p className="mb-5">
						In nec condimentum velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
						Aenean semper, est sed porta gravida, libero mi vulputate eros, quis venenatis tortor
						urna sed tellus. Proin consequat varius lacus, ut tincidunt mauris fermentum eget. Sed
						iaculis commodo justo, sed ultricies nisl pretium a. Nullam semper est dignissim odio
						maximus, id viverra quam maximus. Nam sed arcu sagittis, placerat metus sed, imperdiet
						metus. Morbi cursus erat nunc, vel viverra lorem auctor quis. Vestibulum tincidunt odio
						in pulvinar imperdiet. Etiam vel libero convallis, laoreet tellus nec, eleifend orci.
						Nam condimentum lacus odio, vel porttitor metus mattis sed.
					</p>

					<p className="mb-5">
						Aenean ultrices posuere erat non sagittis. Mauris quis elementum purus, non iaculis
						magna. Pellentesque ultrices, eros eget volutpat dictum, ex lorem dignissim tortor, eu
						blandit lectus orci eget dolor. Aenean at purus mauris. Praesent lobortis justo vel quam
						sodales lacinia imperdiet at enim. Duis vitae mattis urna. Curabitur pulvinar ut neque
						et aliquam. Mauris at ipsum vitae ligula semper maximus vel sit amet mauris. Ut ac
						luctus arcu. Nullam aliquet in elit eu auctor.
					</p>

					<p className="mb-5">
						Fusce volutpat malesuada mauris nec scelerisque. Donec sagittis enim ut sagittis
						molestie. Nunc tortor lectus, vestibulum sit amet fermentum eu, tristique quis arcu.
						Pellentesque sed iaculis quam. Integer eget tellus purus. Etiam gravida suscipit quam ac
						congue. Cras sit amet elit velit. Aenean consectetur sed ante vel aliquam. Ut interdum
						consequat turpis ut accumsan. Vestibulum in nunc venenatis arcu consectetur ornare sed
						et sem.
					</p>
				</div>
			</section>
		</>
	);
};