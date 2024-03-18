import React, { ReactNode } from 'react';
import './blogStyles.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="md:max-w-screen-sm md:ml-auto md:mr-auto">{children}</div>
  );
}
