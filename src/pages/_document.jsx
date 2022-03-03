// @ts-nocheck
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="tr" className="scroll-smooth antialiased">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2867b2" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="apple-mobile-web-app-title" content="PopArt Metal" />
				<meta name="application-name" content="PopArt Metal" />
				<meta name="msapplication-TileColor" content="#2867b2" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<body className="font-sans text-base leading-normal tracking-normal selection:bg-orange-500">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
