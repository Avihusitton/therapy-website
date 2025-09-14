import React from 'react';

import HeroSection from '../components/herosection';
import AboutSection from '../components/aboutsection';
import ServicesSection from '../components/servicessection';
import ContactForm from '../components/contactform';
import TopicCarousel from '../components/TopicCarousel';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] text-[#4C4A49]" dir="rtl" lang="he">
      <div className="fixed top-4 left-4 font-gveret text-2xl text-[#4C4A49] z-50">בס"ד</div>
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <div className="w-32 h-px bg-[#D3C1B1] mx-auto my-12"></div>
      <div id="services"><ServicesSection /></div>
      <div className="w-32 h-px bg-[#D3C1B1] mx-auto my-12"></div>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-light text-[#4C4A49] mb-4">למי הטיפול מתאים</h2>
            <div className="w-20 h-px bg-[#D3C1B1] mx-auto"></div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-sm inline-block">
            <ul className="space-y-4 text-lg font-light text-[#6B6867]">
              <li className="flex items-center gap-3">
                <span className="text-[#A2673E]">✔️</span>
                רוצים להוביל שינוי
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#A2673E]">✔️</span>
                מוכנים לקחת אחריות
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#A2673E]">✔️</span>
                רוצים לחזור לבחור
              </li>
            </ul>
          </div>
        </div>
      </section>

      <TopicCarousel />
      <div className="w-32 h-px bg-[#D3C1B1] mx-auto my-12"></div>
      <div id="contact" className="py-24 bg-[#F8F2E9]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-[#4C4A49] mb-6">בואו נדבר</h2>
            <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-8"></div>
            <p className="text-xl text-[#6B6867] font-light leading-relaxed">
              הצעד הראשון במסע שלך מתחיל כאן.
              <br />
              אני מזמין אותך לשיחת היכרות ללא תשלום וללא התחייבות.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>

      <footer className="bg-[#F8F2E9] text-[#4C4A49] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-light mb-4 text-[#4C4A49]">אביהו סיטון</h3>
            <div className="w-16 h-px bg-[#D3C1B1] mx-auto mb-6"></div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-[#6B6867] font-light">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span className="ltr-text">053-2853235</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span className="ltr-text">Avihu.sitton@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>קליניקה ברתמים | מפגשים בזום</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D3C1B1] pt-6">
            <p className="text-[#6B6867] font-light text-sm">
              © 2024 אביהו סיטון | כל הזכויות שמורות
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}