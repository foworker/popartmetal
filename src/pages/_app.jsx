// @ts-nocheck
import '../css/fonts.css';
import '../css/slick/slick.css';
import '../css/slick/slick-theme.css';
import '../css/style.css';

import 'focus-visible';
import { useState, useEffect, Fragment, Component } from 'react';
import { AppProps } from 'next/app';
import { Footer } from '../components/Footer';
import { Title } from '../components/Title';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import { ResizeObserver } from '@juggle/resize-observer';
import 'intersection-observer';
import Head from 'next/head';
import { Header } from '../components/Header';

if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
	window.ResizeObserver = ResizeObserver;
}

const progress = new ProgressBar({
	size: 2,
	color: '#f97316',
	className: 'bar-of-progress',
	delay: 100,
});

if (typeof window !== 'undefined') {
	progress.start();
	progress.finish();
}

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

export default function App({ Component, pageProps, router }) {
	let [navIsOpen, setNavIsOpen] = useState(false);

	useEffect(() => {
		if (!navIsOpen) return;
		function handleRouteChange() {
			setNavIsOpen(false);
		}

		Router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			Router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [navIsOpen]);

	const Layout = Component.layoutProps?.Layout || Fragment;
	const layoutProps = Component.layoutProps?.Layout
		? { layoutProps: Component.layoutProps, navIsOpen, setNavIsOpen }
		: {};
	const meta = Component.layoutProps?.meta || {};
	const description = meta.metaDescription || meta.description || 'PopArt Metal...';

	let section =
		meta.section ||
		Object.entries(Component.layoutProps?.Layout?.nav ?? {}).find(([, items]) =>
			items.find(({ href }) => href === router.pathname),
		)?.[0];

	return (
		<>
			<Title suffix="PopArt Metal">{meta.metaTitle || meta.title}</Title>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta key="twitter:card" name="twitter:card" content="summary_large_image" />
				<meta key="twitter:site" name="twitter:site" content="@popartmetal" />
				<meta key="twitter:title" name="twitter:title" content={description} />
				<meta key="twitter:description" name="twitter:description" content={description} />
				<meta key="twitter:image" name="twitter:image" content="img" />
				<meta key="twitter:creator" name="twitter:creator" content="@popartmetal" />
				<meta key="og:url" property="og:url" content="img" />
				<meta key="og:type" property="og:type" content="article" />
				<meta key="og:description" property="og:description" content={description} />
				<meta key="og:image" property="og:image" content="img" />
				<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feeds/feed.xml" />
				<link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="/feeds/atom.xml" />
				<link rel="alternate" type="application/json" title="JSON Feed" href="/feeds/feed.json" />
			</Head>
			<Layout {...layoutProps}>
				<Header />
				<main className="container mx-auto pt-20">
					<Component section={section} {...pageProps} />
				</main>
			</Layout>
			<Footer />
		</>
	);
}
