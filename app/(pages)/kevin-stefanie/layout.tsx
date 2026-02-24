import type { Metadata } from "next";
import React from "react";
import './style.css';

export const metadata: Metadata = {
  title: "Kevin & Stefanie",
  description: "Wedding Invitation of Kevin & Stefanie",
};

export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  )
}