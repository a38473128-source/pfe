"use client";

import Link from "next/link";

export default function ProtectedLink({ user, href, children, className }) {
  const handleClick = (e) => {
    if (!user) {
      e.preventDefault();
      window.location.href = "/signin";
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}