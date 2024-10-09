import { socials } from "../../constants";

export default function Footer() {
	return (
		<footer>
			<div className="container py-10">
				<div className="flex w-full max-lg:flex-col">
					<div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
						<p className="opacity-70">Copyright, JS Mastery - Cloned by, Minhaz</p>
					</div>
					<div className="flex items-center justify-center text-center max-lg:mt-2">
						<p className="legal-after cursor-pointer relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
							Privacy Policy
						</p>
						<p className="text-p5 cursor-pointer transition-all duration-500 hover:text-p1">
							Terms of Use
						</p>
					</div>

					<ul className="flex flex-1 justify-center gap-3 max-lg:mt-10">
						{socials.map(({ id, url, icon, title }) => (
							<li key={id}>
								<a href={url} className="social-icon">
									<img
										src={icon}
										alt={title}
										className="size-1/3 object-contain"
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
