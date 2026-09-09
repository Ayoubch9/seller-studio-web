"use client";

import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="nav-glass mx-auto max-w-7xl rounded-2xl px-4 sm:px-5">
        <div className="flex h-16 items-center justify-between">
          <a className="flex items-center gap-3" href="#top" onClick={close}>
            <Image src="/seller-studio-brand-icon.png" alt="" width={34} height={34} className="brand-logo-icon" priority />
            <span className="text-[15px] font-semibold tracking-[-0.035em]">Seller Studio</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/48 md:flex">
            <a className="nav-link" href="#product">Product</a>
            <a className="nav-link" href="#pilot">Pilot AI</a>
            <a className="nav-link" href="#pricing">Pricing</a>
            <a className="nav-link" href="#resources">Resources</a>
          </nav>

          <div className="flex items-center gap-2">
            <a className="nav-cta hidden sm:inline-flex" href="#early-access">Early access</a>
            <button className="mobile-menu-button md:hidden" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              <span className={open ? "menu-line menu-line-one open" : "menu-line menu-line-one"} />
              <span className={open ? "menu-line menu-line-two open" : "menu-line menu-line-two"} />
            </button>
          </div>
        </div>

        {open && (
          <nav className="mobile-nav border-t border-white/[0.07] py-3 md:hidden">
            {[['Product','#product'],['Pilot AI','#pilot'],['Pricing','#pricing'],['Resources','#resources']].map(([label, href]) => (
              <a key={href} className="mobile-nav-link" href={href} onClick={close}>{label}</a>
            ))}
            <a className="mobile-nav-cta" href="#early-access" onClick={close}>Join early access</a>
          </nav>
        )}
      </div>
    </header>
  );
}
