"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const contactData = [
  { id: "email", title: "Email", icon: "📧", link: "mailto:ahm3d.m.attia@gmail.com" },
  { id: "whatsapp", title: "WhatsApp", icon: "💬", link: "https://wa.me/201140409832" },
  { id: "telegram", title: "Telegram", icon: "✈️", link: "https://t.me/Ahm3d_Attia" },
  { id: "linkedin", title: "LinkedIn", icon: "🔗", link: "https://www.linkedin.com/in/ahmed-m-attia-757aa6292/" },
  { id: "facebook", title: "Facebook", icon: "📘", link: "https://www.facebook.com/A7m3d.Attia" },
];

export default function ContactSection() {
  const [contactMethod, setContactMethod] = useState("");
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // Handles sending the message
  const handleSend = () => {
    if (!contactMethod || !message) return alert("Please select a contact method and enter your message.");
    
    let targetLink = "";
    
    switch (contactMethod) {
      case "email":
        targetLink = `mailto:ahm3d.m.attia@gmail.com?subject=Contact&body=${encodeURIComponent(message)}`;
        break;
      case "whatsapp":
        targetLink = `https://wa.me/201140409832?text=${encodeURIComponent(message)}`;
        break;
      case "telegram":
        targetLink = `https://t.me/Ahm3d_Attia?text=${encodeURIComponent(message)}`;
        break;
      case "linkedin":
        targetLink = "https://www.linkedin.com/in/ahmed-m-attia-757aa6292/";
        break;
      case "facebook":
        targetLink = "https://www.facebook.com/A7m3d.Attia";
        break;
    }

    window.open(targetLink, "_blank");
  };

  return (
    <section id="contact" className="p-8 max-w-5xl col-span-2 mx-auto text-center">
      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent mb-6"
      >
        Connect with Me
      </motion.h1>

      {/* Contact Links */}
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
        {contactData.map((contact) => (
          <motion.a
            key={contact.id}
            href={contact.link}
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center p-4 bg-teal-800 hover:bg-teal-700 text-white rounded-xl shadow-lg transition-all"
          >
            <span className="text-3xl">{contact.icon}</span>
            <span className="text-sm mt-2">{contact.title}</span>
          </motion.a>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="p-6 bg-gray-900 text-white rounded-xl shadow-lg max-w-lg mx-auto"
      >
        <h2 className="text-xl font-semibold mb-4">Send Me a Message</h2>

        {/* Contact Method Selection */}
        <label className="block mb-2">Choose Contact Method:</label>
        <select 
          className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none" 
          value={contactMethod} 
          onChange={(e) => setContactMethod(e.target.value)}
        >
          <option value="">Select...</option>
          {contactData.map((contact) => (
            <option key={contact.id} value={contact.id}>{contact.title}</option>
          ))}
        </select>

        {/* Email Input (for Email Option) */}
        {contactMethod === "email" && (
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full mt-3 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none" 
            value={userEmail} 
            onChange={(e) => setUserEmail(e.target.value)} 
          />
        )}

        {/* Message Input */}
        <textarea 
          className="w-full mt-3 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none" 
          rows="4" 
          placeholder="Enter your message..." 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Send Button */}
        <button 
          className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
          onClick={handleSend}
        >
          Send Message 🚀
        </button>
      </motion.div>
    </section>
  );
}
