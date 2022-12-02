import Tags from "../../support/Tags";
import { BlogMetaInfo } from "../../support/Types";

export const AllPosts: BlogMetaInfo[] = [
	{
		link: "/blog/2022/aws-summit",
		title: "AWS Summit 2022",
		socialSummary: `My first conference that I was able to attend. There were talks to attend, companies to be learnt about, merchandise to be collected and new connections to be made. In this post I summarise my experience, try to capture everything I've learnt, and what I would do differently next time"`,
		blogSummary: `My first conference that I was able to attend. There were talks to attend, companies to be learnt about, merchandise to be collected and new connections to be made. In this post I summarise my experience, try to capture everything I've learnt, and what I would do differently next time`,
		created: JSON.parse(JSON.stringify(new Date("2022-05-05"))),
		thumbnail: "/images/posts/2022/aws-summit-2022/cover.jpeg",
		authorName: "Joel Helbling",
		authorLink: "https://helbling.uk",
		tags: [Tags.aws, Tags.cloud, Tags.event],
		tableOfContents: [
			{ title: "Travel", id: "travel" },
			{ title: "Expo", id: "expo" },
			{ title: "Talks", id: "talks-attended" },
			{ title: "Lessons for next time", id: "next-time" },
		],
		cover: "/images/posts/2022/aws-summit-2022/cover.jpeg",
	},
	{
		link: "/blog/2022/homeserver-pi",
		title: "My Pi home server",
		socialSummary: `A place to write custom apps on the network, block ads, run sponsorblock for my Chromecast devices, store a plex library and use it as local network storage. Find out how I've harnessed the power of Docker and a Raspberry Pi 3B+ to enjoy all the flexibility in a tiny, power-efficient, quiet package.`,
		blogSummary: `A place to write custom apps on the network, block ads, run sponsorblock for my Chromecast devices, store a plex library and use it as local network storage. Find out how I've harnessed the power of Docker and a Raspberry Pi 3B+ to enjoy all the flexibility in a tiny, power-efficient, quiet package.`,
		created: JSON.parse(JSON.stringify(new Date("2022-07-30"))),
		thumbnail: "/images/posts/2022/homeserver-pi/thumbnail.png",
		authorName: "Joel Helbling",
		authorLink: "https://helbling.uk",
		tags: [Tags.pi, Tags.docker],
		tableOfContents: [
			{ title: "Motivation", id: "motivation" },
			{ title: "Setup", id: "setup" },
			{ title: "Applications", id: "applications" },
			{ title: "Limitations", id: "limitations" },
		],
		cover: null,
	},
	{
		link: "/blog/2022/r-has-a-problem",
		title: "R has a problem",
		socialSummary: `In my work I had to deploy an R Shiny application. Familiar with more traditional programming languages I thought adapting to R-Shiny would be a smooth transition, especially as I would not have much involvement with it. However, the further we got in the project the more obvious its flaws became.`,
		blogSummary: `In my work I had to deploy an R Shiny application. Familiar with more traditional programming languages I thought adapting to R-Shiny would be a smooth transition, especially as I would not have much involvement with it. However, the further we got in the project the more obvious its flaws became.`,
		created: JSON.parse(JSON.stringify(new Date("2022-02-05"))),
		thumbnail: "/images/posts/2022/r-has-a-problem/thumbnail.png",
		authorName: "Joel Helbling",
		authorLink: "https://helbling.uk",
		tags: [Tags.cloud],
		tableOfContents: [
			{ title: "Intro", id: "introduction" },
			{ title: "Pipeline", id: "pipeline" },
			{ title: "Tools", id: "r-studio" },
			{ title: "Paywalls", id: "paywall" },
			{ title: "Documentation", id: "documentation" },
			{ title: "Deployment implications", id: "deployment" },
			{ title: "Conclusion", id: "conclusion" },
		],
		cover: null,
	},
	{
		link: "/blog/2022/vercel",
		title: "Moving to Vercel",
		socialSummary: `My shockingly easy experience with the move to Vercel`,
		blogSummary: `With Heroku making the news recently about removing their free-tier plan, I thought it would be interesting to look into the Platform as a service space. Much to my surprise, it was a lot easier than I anticipated.`,
		created: JSON.parse(JSON.stringify(new Date("2022-08-31"))),
		thumbnail: "/images/posts/2022/vercel/thumbnail.png",
		authorName: "Joel Helbling",
		authorLink: "https://helbling.uk",
		tags: [Tags.cloud],
		tableOfContents: [
			{ title: "Background", id: "background" },
			{ title: "Setup", id: "setup" },
			{ title: "Build what you need", id: "build-what-you-need" },
			{ title: "Moving to production", id: "production" },
		],
		cover: null,
	},
	{
		link: "/blog/2022/code-test",
		title: "Code test",
		socialSummary: ``,
		blogSummary: `Code test`,
		created: JSON.parse(JSON.stringify(new Date("2022-11-30"))),
		thumbnail: "/images/posts/2022/vercel/thumbnail.png",
		authorName: "Joel Helbling",
		authorLink: "https://helbling.uk",
		tags: [Tags.cloud],
		tableOfContents: [{ title: "Intro", id: "introduction" }],
		cover: null,
	},
];

export function FindPost(postLink: string) {
	return AllPosts.find((a) => a.link === postLink);
}

export default AllPosts.sort((a, b) => (a.created < b.created ? 1 : -1));
