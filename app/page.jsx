import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, HoverScale } from './components/animations';
import { projects, stats, focusFeatures } from './lib/projects';

export default function HomePage() {
  return (
    <>
      <section className="grid-pattern relative mx-auto max-w-6xl px-6 pb-20 pt-24 md:pt-32">
        <div className="absolute left-1/2 top-20 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <FadeIn>
          <p className="mb-4 inline-flex rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-indigo-200">
            Developer Platform
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            Build Powerful Tools for Developers
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            DevBuzz is a developer-focused platform creating powerful tools, bots, and services for communities and creators.
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10 flex flex-wrap gap-4">
          <Link href="/projects" className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-indigo-500">
            Explore Projects
          </Link>
          <Link href="/axon" className="rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-300 hover:text-indigo-200">
            Invite Axon
          </Link>
          <Link href="/projects" className="rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200">
            Open DBL
          </Link>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-white">Projects Preview</h2>
        </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.08}>
              <HoverScale>
                <article className="glass rounded-2xl p-7 shadow-card">
                  <project.icon className="h-9 w-9 text-indigo-300" />
                  <h3 className="mt-5 font-display text-2xl text-white">{project.title}</h3>
                  <p className="mt-3 text-slate-300">{project.description}</p>
                  <div className="mt-6 flex gap-3">
                    <Link href={project.href} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500">
                      {project.ctaPrimary}
                    </Link>
                    <Link href={project.href} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500">
                      {project.ctaSecondary}
                    </Link>
                  </div>
                </article>
              </HoverScale>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.05}>
              <div className="glass rounded-xl p-6 text-center">
                <p className="font-display text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-white">Developer Focused at the Core</h2>
          <p className="mt-4 max-w-3xl text-slate-300">We build resilient products and a connected ecosystem where developers can launch, automate, and grow communities faster.</p>
        </FadeIn>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {focusFeatures.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.08}>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="font-display text-xl text-white">{feature.title}</h3>
                <p className="mt-3 text-slate-400">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16">
        <FadeIn>
          <div className="rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-600/20 to-emerald-500/10 p-10 text-center shadow-card">
            <h2 className="font-display text-3xl font-semibold text-white">Explore DevBuzz Projects</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">Discover tools designed for modern developers, communities, and creators.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#" className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-emerald-300 hover:text-emerald-200">
                Join Discord
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
