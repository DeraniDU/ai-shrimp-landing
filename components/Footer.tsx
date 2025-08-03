'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer style={footerStyle}>
      <p>© {year ?? '2025'} AI Shrimp Farming Project. All rights reserved.</p>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  marginTop: '2rem',
  padding: '1rem',
  backgroundColor: '#f1f1f1',
  textAlign: 'center',
  color: '#555',
};
