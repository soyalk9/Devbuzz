import Link from 'next/link';
import { Shield, Bot, Wrench, Server } from 'lucide-react';
import { FadeIn } from '../components/animations';

const features = [
  { title: 'Moderation', description: 'Real-time filters, anti-spam, and smart moderation workflows.', icon: Shield },
  { title: 'Automation', description: 'Automate repetitive server tasks with configurable triggers.', icon: Bot },
  { title: 'Utility commands', description: 'Powerful utility command suite for management and insights.', icon: Wrench },
  { title: 'Server management', description: 'Centralized role, logging, and channel control at scale.', icon: Server },
];

export const metadata = { title: 'Axon Bot | DevBuzz' };

export default function AxonPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn>
        <p className="inline-flex rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs uppercase tracking-widest text-indigo-200">Project</p>
        <h1 className="mt-4 font-display text-5xl font-bold text-white">Axon Bot</h1>
        <p className="mt-5 max-w-3xl text-slate-300">Axon is a modern Discord bot for moderation, automation, and community operations.</p>
      </FadeIn>
      <FadeIn delay={0.08} className="mt-8 flex gap-4">
        <Link href="#" className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500">Invite Axon</Link>
        <Link href="#" className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100">Support</Link>
      </FadeIn>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {features.map((feature, idx) => (
          <FadeIn key={feature.title} delay={idx * 0.06}>
            <article className="glass rounded-xl p-6">
              <feature.icon className="h-8 w-8 text-emerald-300" />
              <h2 className="mt-4 font-display text-xl text-white">{feature.title}</h2>
              <p className="mt-2 text-slate-400">{feature.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
        <h3 className="font-display text-2xl text-white">Need setup help?</h3>
        <p className="mt-3 text-slate-300">Join our community support channels and get guidance from the DevBuzz team and moderators.</p>
      </FadeIn>
    </section>
  );
}
