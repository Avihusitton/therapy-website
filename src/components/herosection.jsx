import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const phoneNumber = "972532853235";
    const message = "הי, אני מתעניין בטיפול רגשי, ראיתי את הפרטים באתר ואשמח לשוחח.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="hero-section min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(253, 248, 240, 0.3), rgba(253, 248, 240, 0.3)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/67994d28e_20250328_064731.jpg')`
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-8 flex flex-col items-center">
              <img
                src="/therapyLOGO.png"
                alt="לוגו - צמיחה והתחדשות"
                className="w-10 h-auto mb-4"
              />
              <h1 className="text-5xl font-light text-[#4C4A49] tracking-wider mb-2">
                אביהו סיטון
              </h1>
              <h2 className="text-xl text-[#6B6867] font-light mb-10 leading-relaxed">
                פסיכותרפיה בשיטת דרך
              </h2>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-8 max-w-3xl mx-auto mb-10 rounded-lg">
              <p className="text-xl text-[#6B6867] leading-relaxed italic">
                "הטיפול הוא ממש כמו סיפור מרתק שהולך ומעמיק...
                <br />
                העיקר שהוא חי ונושם - והגיבור סקרן לדעת מה ההמשך"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#7f3f07] hover:bg-[#6b3606] text-white px-8 py-3 rounded-lg text-lg font-light transition-all duration-300 shadow-md"
            >
              <Phone className="w-5 h-5 ml-2" />
              קביעת שיחת היכרות
            </Button>

            <Button
              onClick={scrollToAbout}
              size="lg"
              variant="outline"
              className="bg-white/80 hover:bg-white/100 border-2 border-[#D3C1B1] text-[#6B6867] px-8 py-3 rounded-lg text-lg font-light transition-all duration-300 shadow-md"
            >
              עוד עליי ועל הגישה שלי
              <ArrowDown className="w-5 h-5 mr-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}