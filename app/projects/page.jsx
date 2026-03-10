import Link from 'next/link';
import { FadeIn, HoverScale } from '../components/animations';
import { projects } from '../lib/projects';

export const metadata = {
  title: 'Projects | DevBuzz'
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn>
        <h1 className="font-display text-4xl font-bold text-white">DevBuzz Projects</h1>
        <p className="mt-4 max-w-3xl text-slate-300">Explore our ecosystem of products built for developers and communities.</p>
      </FadeIn>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <FadeIn key={project.slug} delay={idx * 0.08}>
            <HoverScale>
              <article className="glass rounded-2xl p-7">
                <project.icon className="h-10 w-10 text-indigo-300" />
                <h2 className="mt-4 font-display text-2xl text-white">{project.name}</h2>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">{tag}</span>
                  ))}
                </div>
                <div className="mt-7 flex gap-3">
                  <Link href={project.href} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">Open</Link>
                  <Link href={project.href} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200">Details</Link>
                </div>
              </article>
            </HoverScale>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
