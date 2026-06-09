'use client';
import React from 'react';

import { PageHero } from '../../components/ui/PageKit';

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        lead="This page took"
        emphasis="a different route."
        sub="The page you’re looking for isn’t here. Let’s get you back on track."
        primary={{ href: '/', label: 'Back to home' }}
        secondary={{ href: '/contact', label: 'Book a tech audit' }}
      />
    </>
  );
}
