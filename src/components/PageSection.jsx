export default function PageSection({ title, children }) {
  return (
    <section className="px-4 py-6 md:py-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-white/10 bg-black/30 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-8">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <div className="mt-5 text-sm leading-7 text-gray-300 md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
