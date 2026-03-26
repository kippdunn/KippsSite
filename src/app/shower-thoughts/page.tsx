
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getShowerThoughtsData } from "@/lib/shower-thoughts";

const ShowerThoughtsPage = async () => {
	const { contentHtml } = await getShowerThoughtsData();

	return (
		<section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
			<div className="flex justify-between font-poppins">
				<Link href="/" className="flex flex-row gap-1 place-items-center">
					<ArrowLeftIcon width={20} />
					<p>home</p>
				</Link>
				<span />
			</div>
			<header className="font-cormorant-garamond font-light text-5xl text-neutral-900 text-center mb-8">
				<h1>Shower Thoughts</h1>
			</header>
			<div className="text-sm text-neutral-500 italic text-center mb-4">
				This is simply a rough collection of thoughts that have gone through my head. They are not fully formed, and are not meant to be taken too seriously. They are mostly just here for me to have a place to store fleeting ideas. 
			</div>

			<article className="shower-thoughts" dangerouslySetInnerHTML={{ __html: contentHtml }} />
		</section>
	);
};

export default ShowerThoughtsPage;
