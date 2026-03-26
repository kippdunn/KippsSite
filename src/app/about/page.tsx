export default function AboutPage() {
  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
			<header className="font-cormorant-garamond font-light text-5xl text-neutral-900 text-center mb-8">
				<h1>About Me</h1>
			</header>
      <article className="shower-thoughts"> 
            <p>Welcome to my website! I'm Kipp. I originally created this site to experiment with Next.js. But it's turned into a place to collect some of my random thoughts, and to fulfill a goal of writing regularly.</p>
      </article>
    </section>
  );
}
