export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative px-4 pb-12 pt-32 md:pt-36">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/35 px-6 py-12 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md md:px-10 md:py-16">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-14 bg-red-500" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">
            {eyebrow}
          </p>
        </div>

        <h1 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
