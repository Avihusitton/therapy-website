import React, { useState } from "react";
import { Contact } from "@/entities/Contact";
import { SendEmail } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const openWhatsApp = () => {
    const phoneNumber = "972532853235";
    const message = "הי, אני מתעניין בטיפול רגשי, ראיתי את הפרטים באתר ואשמח לשוחח.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await Contact.create({ ...formData, email: "" });

      await SendEmail({
        to: "Avihu.sitton@gmail.com",
        subject: "פנייה חדשה מהאתר",
        body: `
קיבלת פנייה חדשה מהאתר:

שם: ${formData.full_name}
טלפון: ${formData.phone}

תאריך: ${new Date().toLocaleString("he-IL")}
        `
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("שגיאה בשליחת הטופס:", error);
    }
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="contact-form text-center py-16 bg-white/80 backdrop-blur-sm rounded-xl"
      >
        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-[#A2673E]" />
        </div>
        <h3 className="text-2xl text-[#4C4A49] mb-4">תודה על פנייתך</h3>
        <p className="text-[#6B6867] text-lg leading-relaxed max-w-lg mx-auto">
          קיבלתי את פרטייך ואחזור אליך בהקדם האפשרי לתיאום שיחת היכרות.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form space-y-6 bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-sm"
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="full_name" className="text-[#4C4A49] text-md font-light">
            שם מלא
          </Label>
          <Input
            type="text"
            id="full_name"
            value={formData.full_name}
            onChange={(e) => handleInputChange("full_name", e.target.value)}
            required
            className="mt-1 bg-white/80 border-[#D3C1B1]"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-[#4C4A49] text-md font-light">
            טלפון
          </Label>
          <Input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
            className="mt-1 bg-white/80 border-[#D3C1B1]"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#7f3f07] hover:bg-[#6b3606] text-white px-8 py-3 rounded-lg text-lg font-light transition-all duration-300 shadow-md"
        >
          <Send className="w-5 h-5 ml-2" />
          {isSubmitting ? "שולח..." : "שלח"}
        </Button>
      </div>
    </form>
  );
}