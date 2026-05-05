export default function LandingSection({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative px-5 py-8 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,102,255,0.1),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="inline-flex rounded-md border border-blue-400/15 bg-blue-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-blue-200">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
