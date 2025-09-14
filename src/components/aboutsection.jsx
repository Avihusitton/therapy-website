import React from 'react';
import { motion } from 'framer-motion';
import GrowthElements from './GrowthElements';
import FloralDivider from './FloralDivider';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-light text-[#4C4A49] mb-4">הגישה שלי</h2>
          <div className="w-20 h-px bg-[#D3C1B1] mx-auto"></div>
        </div>

        <div className="text-lg font-light text-[#6B6867] leading-relaxed space-y-6">
          <p>
            אני מאמין שכל אדם יכול להיות המטפל הטוב ביותר של עצמו, הרי מי חווה אותנו באופן כל כך אינטנסיבי כמונו? לשם כך עלינו להכיר את מבנה הנפש הייחודי שלנו, את תנועת הפעימה הקיימת במציאות, ואת סל הכלים מתוכו נשלוף את הכלי המתאים.
          </p>
          <p>
            בקליניקה נראה איך כל אתגר או נקודת קושי מול המציאות מהווה עבורנו הזדמנות לגדילה וריפוי. נוכל לבחור לאמץ אותם, להתעמת איתם, ואולי אף לשמוח בהם. נלמד איך לקחת אחריות על החלקים הלא מעובדים שלנו ומתוך כך נניח בסיס משמעותי לשינוי בהיבטי החיים הפרטיים, הזוגיים, המשפחתיים, ובכלל.
          </p>
          <p>
            הטיפול מכבד את הקצב של כל אחד ואחת, ומשלב היבטי גוף נפש ורוח.
          </p>
        </div>

        <div className="mt-12 bg-[#FDF8F0] p-6 rounded-lg">
          <p className="text-xl font-light text-[#6B6867]">
            אני כאן כדי ללוות אותך במסע הזה ולגלות יחד איתך את המשך הסיפור,
            <br />
            <span className="font-normal text-[#A2673E]">באמונה גדולה, אביהו</span>
          </p>
        </div>
      </div>
    </section>
  );
}