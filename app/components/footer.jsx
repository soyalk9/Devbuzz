import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/70">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="font-display text-lg text-white">DevBuzz</h3>
          <p className="mt-2 text-sm text-slate-400">Building tools and platforms for developers and communities.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Projects</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/axon" className="hover:text-indigo-300">Axon</Link></li>
            <li><Link href="/projects" className="hover:text-indigo-300">DBL</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-indigo-300">About</Link></li>
            <li><Link href="/docs" className="hover:text-indigo-300">Docs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Community</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="#" className="hover:text-indigo-300">Discord</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800/70 py-5 text-center text-sm text-slate-500">DevBuzz © 2026</div>
    </footer>
  );
}
