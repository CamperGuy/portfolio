import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogMetaInfo } from "./Types";

export default function PostPreview({ ...post }: BlogMetaInfo) {
	let r = (Math.random() + 1).toString(36).substring(7);

	return (
		<Link href={post.link} key={r}>
			<div className="card mb-6" key={post.title}>
				<p className="title is-4 pt-4 pl-5 mb-0">{post.title}</p>
				<div className="card-content">
					<div className="columns accented">
						<div className="column is-one-fifth level-item has-text-centered accented">
							<Image
								src={post.thumbnail}
								className="is-inline postImage"
								alt="Blog post thumbnail"
								width={200}
								height={200}
								priority={true}
								placeholder={"blur"}
								blurDataURL={"images/icon-transparent.png"}
							/>
						</div>
						<div className="column accented">
							<p className="accented">{post.blogSummary}</p>
						</div>
					</div>

					<div className="columns accented">
						<div className="column tags are-medium accented mb-0">
							{post.tags.map((tag) => {
								return (
									<span
										className={"tag " + tag.color}
										key={tag.name}
									>
										{tag.name}
									</span>
								);
							})}
						</div>
						<div className="column accented has-text-right">
							<i>
								Posted:{" "}
								{new Date(post.created).toLocaleDateString()}
							</i>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
