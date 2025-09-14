import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const topics = [
  {
    title: "עצמאות רגשית: לחיות חיים מלאים",
    content: "בעולם רווי גירויים, עצמאות רגשית מאפשרת לך לקבוע את רגשותיך שלך. זהו מסע שבו תלמד לווסת את תגובותיך, להפחית את תלותך באישור חיצוני, ולבסס ביטחון פנימי. ככל שתחזק את עצמאותך הרגלית, תוכל לקבל החלטות אותנטיות יותר, לבחור במערכות יחסים ועיסוקים שמזינים אותך, ולחיות חיים מלאים ומשמעותיים."
  },
  {
    title: "זוגיות: הריקוד בין עצמאות לאחדות",
    content: "מערכות יחסים בריאות בנויות על איזון עדין בין עצמאות לאחדות. הפרדוקס הזוגי טמון ביכולת שלנו לחוות אינדיבידואליות עמוקה תוך כדי השתלבות בחיבור סימביוטי. בתוך ריקוד מתמיד זה, אנו לומדים לזהות את הצורך במרחב אישי ובנאמנות לעצמנו, לצד הכמיהה לקרבה, מיזוג וחיבור עמוק עם בן/בת הזוג. הבנה זו מאפשרת לנו לנווט במערכת יחסים דינמית, שבה כל תנועה לכיוון אחד מולידה את הצורך בתנועה המשלימה, ממש כמו נשימה ונשיפה, ומובילה לצמיחה והעמקה הדדית."
  },
  {
    title: "מעגל ההתחדשות: לשחרר, להמתין, לצמוח",
    content: "התחדשות אמיתית היא תהליך מעגלי בן שלושה שלבים חיוניים. ראשית, עלינו ללמוד לשחרר דפוסים ישנים ודימויים מגבילים, כדי לאפשר מקום לחדש. לאחר מכן, נכנסים לשלב ההמתנה – מרחב של ריק ואי-ודאות, אותו יש להכיל באמונה. רק כשוויתרנו על האחיזה והסכמנו להמתין, אנו זוכים לחוות צמיחה והתחדשות. אימוץ מעגל זה ביומיום מאפשר לנו להתקדם ולחיות חיים מלאים."
  }
];

export default function TopicCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
    }, 7000); // Change topic every 7 seconds
    return () => clearInterval(interval);
  }, []);

  const currentTopic = topics[currentIndex];

  return (
    <div className="py-24 bg-[#FDF8F0]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-light text-[#4C4A49] mb-4">אופן הטיפול</h2>
          <div className="w-20 h-px bg-[#D3C1B1] mx-auto"></div>
        </div>
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <p className="text-lg font-light text-[#6B6867] mb-6">
            הטיפול קורה דרך שיח ומשלב כלים שונים מהעולם הרגשי כולל:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#F8F2E9] text-[#6B6867] px-4 py-2 rounded-full text-sm font-light flex items-center gap-2">
              <span role="img" aria-label="heart">❤️</span> פסיכודרמה
            </div>
            <div className="bg-[#F8F2E9] text-[#6B6867] px-4 py-2 rounded-full text-sm font-light flex items-center gap-2">
              <span role="img" aria-label="brain">🧠</span> דמיון
            </div>
            <div className="bg-[#F8F2E9] text-[#6B6867] px-4 py-2 rounded-full text-sm font-light flex items-center gap-2">
              <span role="img" aria-label="pen">✍️</span> כתיבה
            </div>
            <div className="bg-[#F8F2E9] text-[#6B6867] px-4 py-2 rounded-full text-sm font-light flex items-center gap-2">
              <span role="img" aria-label="leaf">🌿</span> הרפיות
            </div>
            <div className="bg-[#F8F2E9] text-[#6B6867] px-4 py-2 rounded-full text-sm font-light flex items-center gap-2">
              <span role="img" aria-label="seedling">🌱</span> ועוד
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}