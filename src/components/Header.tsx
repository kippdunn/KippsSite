"use client";

import React from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow bg-white mb-8 relative sticky top-0 z-50">
      <a href="/" className="text-2xl font-bold hover:cursor-pointer">Kipp Dunn</a>
      {/* Desktop nav */}
      <div className="hidden md:flex gap-6">
        <a href="/about" className="hover:underline">About Me</a>
        <a href="/quotes" className="hover:underline">Favorite Quotes</a>
        <a href="/shower-thoughts" className="hover:underline">Shower Thoughts</a>
        <a href="/posts" className="hover:underline">Posts</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
      {/* Hamburger icon for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full right-8 mt-2 bg-white shadow-lg rounded flex flex-col gap-4 p-4 z-50 md:hidden">
          <a href="/about" className="hover:underline" onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="/quotes" className="hover:underline" onClick={() => setMenuOpen(false)}>Favorite Quotes</a>
          <a href="/shower-thoughts" className="hover:underline" onClick={() => setMenuOpen(false)}>Shower Thoughts</a>
          <a href="/posts" className="hover:underline" onClick={() => setMenuOpen(false)}>Posts</a>
          <a href="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
