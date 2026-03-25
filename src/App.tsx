/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Allowed from './components/Allowed';
import NotAllowed from './components/NotAllowed';
import RightsDuties from './components/RightsDuties';
import VideoSection from './components/VideoSection';
import DocumentsSection from './components/DocumentsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Allowed />
        <NotAllowed />
        <RightsDuties />
        <DocumentsSection />
        <VideoSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
