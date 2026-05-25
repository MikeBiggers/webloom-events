"use client";

import React, { useState } from "react";
import { Send, Check, MapPin, Mail, Phone } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang].contact;
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", eventType: "", eventDate: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "19830e68-64e4-42e3-b8ed-0eef1fae66d8",
          subject: `New Enquiry from ${form.name} — ${form.eventType || "We Bloom Events"}`,
          from_name: "We Bloom Events Website",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFormState("sent");
        setForm({ name: "", email: "", phone: "", eventType: "", eventDate: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass = "w-full bg-white border border-petal rounded-xl px-4 py-3 text-bark text-sm placeholder-bark-light/50 focus:outline-none focus:border-bloom transition-colors";

  return (
    <section id="contact" className="py-24 px-6 bg-ivory-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.35em] uppercase mb-4 text-bloom" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
            {t.label}
          </p>
          <h2 className="text-5xl md:text-6xl font-light italic text-bark" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <h3 className="text-3xl font-light italic text-bark mb-6" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              {t.subheading}
            </h3>
            <p className="text-bark-light leading-relaxed mb-8" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
              {t.description}
            </p>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-bark-light">
                <div className="w-9 h-9 rounded-full bg-petal flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-bloom" />
                </div>
                <span className="text-sm" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>webloomevents.vlc@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-bark-light">
                <div className="w-9 h-9 rounded-full bg-petal flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-bloom" />
                </div>
                <a href="tel:+34624667927" className="text-sm hover:text-bloom transition-colors" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>+34 624 667 927</a>
              </li>
              <li className="flex items-center gap-3 text-bark-light">
                <div className="w-9 h-9 rounded-full bg-petal flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-bloom" />
                </div>
                <span className="text-sm" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>{t.location}</span>
              </li>
              <li className="flex items-center gap-3 text-bark-light">
                <div className="w-9 h-9 rounded-full bg-petal flex items-center justify-center flex-shrink-0">
                  <InstagramIcon size={16} />
                </div>
                <a href="https://www.instagram.com/webloomevents/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-bloom transition-colors" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                  @webloomevents
                </a>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {formState === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-white rounded-2xl border border-petal">
                <div className="w-16 h-16 rounded-full bg-leaf/20 flex items-center justify-center mb-6">
                  <Check size={28} className="text-leaf" />
                </div>
                <h3 className="text-3xl font-light italic text-bark mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                  {t.successTitle}
                </h3>
                <p className="text-bark-light max-w-sm" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                  {t.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-petal p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-bark-light mb-1.5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>{t.fields.name} *</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder={t.fields.namePlaceholder} className={inputClass} style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }} />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-bark-light mb-1.5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>{t.fields.email} *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t.fields.emailPlaceholder} className={inputClass} style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-bark-light mb-1.5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>{t.fields.phone}</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder={t.fields.phonePlaceholder} className={inputClass} style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }} />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-bark-light mb-1.5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>{t.fields.date}</label>
                    <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} className={inputClass} style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-bark-light mb-1.5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>{t.fields.eventType} *</label>
                  <select name="eventType" required value={form.eventType} onChange={handleChange} className={inputClass} style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                    <option value="">{t.fields.selectPlaceholder}</option>
                    {t.eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-bark-light mb-1.5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>{t.fields.message} *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder={t.fields.messagePlaceholder} className={inputClass} style={{ fontFamily: "var(--font-jost), system-ui, sans-serif", resize: "none" }} />
                </div>
                {formState === "error" && (
                  <p className="text-sm text-red-500" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>{t.errorMessage}</p>
                )}
                <button type="submit" disabled={formState === "sending"} className="w-full flex items-center justify-center gap-2 py-4 bg-bloom text-ivory text-sm tracking-widest uppercase rounded-full hover:bg-bloom-dark disabled:opacity-60 transition-colors duration-300" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                  {formState === "sending" ? t.fields.sending : (<>{t.fields.submit} <Send size={14} /></>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
