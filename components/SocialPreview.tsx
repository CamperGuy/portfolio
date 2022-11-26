import React from "react";
import Head from "next/head";
import Script from "next/script";
import { MetaInfo } from "../support/Types";

export default function SocialPreview(props: { metaInfo: MetaInfo }) {
	const meta = props.metaInfo;
	const themeColor = "#8D0370";
	const previewImage = meta.cover
		? meta.cover
		: "https://helbling.uk/images/social_preview.png";

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_KEY}`}
				strategy="afterInteractive"
			></Script>

			<Script id="google-analytics" strategy="afterInteractive">
				{`
           				window.dataLayer = window.dataLayer || [];
  						function gtag(){dataLayer.push(arguments);}
  						gtag('js', new Date());
  						gtag('config', '${process.env.GA_KEY}');
        			`}
			</Script>
			<Head>
				<meta charSet="utf-8"></meta>
				<meta name="google" content="notranslate" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no"
				/>

				<title>{meta.title}</title>
				<meta name="author" content={meta.authorName} />
				<meta name="theme-color" content={themeColor} />
				<meta name="title" content={meta.title} />
				<meta name="description" content={meta.socialSummary} />

				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.socialSummary} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://helbling.uk/" />
				<meta property="og:image" content={previewImage} />
				<meta property="og:image:type" content="image/png" />

				<meta property="twitter:url" content="https://helbling.uk/" />
				<meta property="twitter:title" content={meta.title} />
				<meta
					property="twitter:description"
					content={meta.socialSummary}
				/>
				<meta property="twitter:image" content={previewImage} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
		</>
	);
}