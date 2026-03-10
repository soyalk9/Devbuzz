import { FadeIn } from '../components/animations';

export const metadata = { title: 'About | DevBuzz' };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <FadeIn>
        <h1 className="font-display text-4xl font-bold text-white">About DevBuzz</h1>
        <p className="mt-5 text-slate-300">DevBuzz builds tools and platforms that empower developers, moderators, and digital communities to scale with confidence.</p>
      </FadeIn>

      <div className="mt-12 space-y-6">
        <FadeIn delay={0.05}>
          <article className="glass rounded-2xl p-7">
            <h2 className="font-display text-2xl text-white">Mission</h2>
            <p className="mt-3 text-slate-300">Create high-performance products that improve the daily workflow of builders and community teams.</p>
          </article>
        </FadeIn>
        <FadeIn delay={0.1}>
          <article className="glass rounded-2xl p-7">
            <h2 className="font-display text-2xl text-white">Platform philosophy</h2>
            <p className="mt-3 text-slate-300">We prioritize speed, reliability, and elegant developer experience in every system we ship.</p>
          </article>
        </FadeIn>
        <FadeIn delay={0.15}>
          <article className="glass rounded-2xl p-7">
            <h2 className="font-display text-2xl text-white">Developer focus</h2>
            <p className="mt-3 text-slate-300">From APIs to support channels, DevBuzz stays close to real user needs and iterates quickly.</p>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
