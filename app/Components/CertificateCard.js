"use client";
import { motion } from "framer-motion";

export default function CertificateCard({ certificate }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-teal-900 to-teal-700 border border-teal-700 rounded-xl shadow-lg hover:bg-teal-950 hover:border-2 hover:border-green-500 hover:shadow-2xl transition-all p-5"
 // Adding ID dynamically
    >
      {/* Certificate Image */}
      <div className="overflow-hidden hover:border-2 hover:border-green-500 rounded-lg">
        <img
          src={`/${certificate.image}`}
          alt={certificate.field}
          className="w-full h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Certificate Details */}
      <div className="mt-4 text-white">
        <h2 className="text-2xl hover:text-orange-300 font-bold">{certificate.field}</h2>
        <p className="text-gray-300 hover:text-orange-300 text-sm">{certificate.issuer}</p>
        <p className="text-sm hover:text-orange-300 text-teal-300">{certificate.date}</p>
        <p className="text-sm hover:text-orange-300 text-teal-300">{`ID:-${certificate.id}`}</p>

        {/* Certificate Description */}
        <p className="text-sm mt-2 text-gray-400 hover:text-orange-300">{certificate.description}</p>

        {/* Certificate Link */}
        <div className="mt-4">
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-4 hover:text-orange-300 py-2 rounded-md text-white hover:bg-green-700 transition"
          >
            View Certificate
          </a>
        </div>
      </div>
    </motion.div>
  );
}
