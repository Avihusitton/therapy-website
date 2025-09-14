import React from 'react';
import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';
import FloralDivider from './FloralDivider';

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#FDF8F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-[#4C4A49] mb-4">איך אוכל לעזור?</h2>
          <div className="w-20 h-px bg-[#D3C1B1] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* טיפול אישי */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center items-center mb-4">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/67994d28e_20250328_064731.jpg" alt="טיפול אישי" className="w-12 h-12 rounded-full" />
            </div>
            <h3 className="text-2xl font-light text-[#4C4A49] mb-3">טיפול אישי</h3>
            <div className="w-12 h-px bg-[#D3C1B1] mx-auto mb-5"></div>
            <p className="text-[#6B6867] font-light leading-relaxed">
              מסע אישי של גילוי, ריפוי וצמיחה. נלמד יחד להכיר את מבנה הנפש הייחודי שלך, לעבוד עם אתגרים כהזדמנויות, ולקחת אחריות על החיים שלך מתוך בחירה, עוצמה וחופש.
            </p>
          </div>

          {/* מסע זוגי */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center items-center mb-4">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/67994d28e_20250328_064731.jpg" alt="מסע זוגי" className="w-12 h-12 rounded-full" />
            </div>
            <h3 className="text-2xl font-light text-[#4C4A49] mb-3">מסע זוגי</h3>
            <div className="w-12 h-px bg-[#D3C1B1] mx-auto mb-5"></div>
            <p className="text-[#6B6867] font-light leading-relaxed">
              לעבור "דרך" ביחד כדי להניח בסיס לזוגיות בריאה, המשלבת אחדות ועצמאות. מסע להחזרת התשוקה, הסקרנות והצמיחה המשותפת למרחב הזוגי, תוך מתן מקום לכל אחד מבני הזוג.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}