
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
			<article className="quotes" dangerouslySetInnerHTML={{ __html: contentHtml }} />
		</section>
	);
};

export default ShowerThoughtsPage;
