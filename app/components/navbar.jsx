import Link from 'next/link';

const navItems = [
  { label: 'Projects', href: '/projects' },
  { label: 'Docs', href: '/docs' },
  { label: 'About', href: '/about' },
  { label: 'Discord', href: '#' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-white">
          DevBuzz
        </Link>
        <ul className="flex items-center gap-6 text-sm text-slate-300">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="transition hover:text-indigo-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
