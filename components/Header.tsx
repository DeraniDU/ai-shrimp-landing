'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/about" style={linkStyle}>About Us</Link>
        <Link href="/contact" style={linkStyle}>Contact Us</Link>
        <Link href="#features" style={linkStyle}>Features</Link>
      </nav>
    </header>
  );
}

const headerStyle: React.CSSProperties = {
  padding: '1rem',
  backgroundColor: '#0070f3',
  color: 'white',
  textAlign: 'center',
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
};
