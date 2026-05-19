'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'CarePath', href: '/carepath' },
    { label: 'Northstar Surgical Innovations', href: '/nsi' },
    { label: 'SPEAR', href: '/spear' },
    { label: 'Maternity', href: '/maternity' },
    { label: 'SoC13', href: '/soc13' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-300/10 backdrop-blur-2xl bg-[#020711]/90">
      <nav className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <a className="group flex items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400" href="/">
          <span className="font-rajdhani text-2xl font-bold tracking-[0.18em] text-white">
            STRYKE<span className="text-sky-500">FOX</span>
          </span>
          <span className="h-7 w-px bg-slate-500/50" />
          <span className="font-rajdhani text-xs font-semibold uppercase tracking-[0.34em] text-slate-300">
            Medical
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              className="nav-item"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="premium-button" href="mailto:adam.stryker@strykefox.com">
            Partner With Us
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          aria-label="Toggle navigation"
          className="grid h-11 w-11 place-items-center rounded-md border border-sky-300/15 bg-white/[0.04] text-slate-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-sky-300/10 bg-[#020711]/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-[1500px] gap-1">
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-3 font-rajdhani text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 hover:bg-white/[0.04] hover:text-white"
                href={item.href}
                key={item.label}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 rounded-md bg-sky-600 px-4 py-3 text-center font-rajdhani text-sm font-bold uppercase tracking-[0.18em] text-white"
              href="mailto:adam.stryker@strykefox.com"
              onClick={() => setOpen(false)}
            >
              Partner With Us
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
