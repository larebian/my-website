import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  // Yahan apna school ka WhatsApp number add karein (Country code ke saath, bina + sign ke)
  const phoneNumber = "923003743944"; 
  const message = encodeURIComponent("Hello! I would like to inquire about admissions/information at The Lareb Public School.");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl sm:text-3xl animate-bounce" />
      <span className="hidden sm:inline font-semibold text-xs pr-1">
        Chat with Us
      </span>
    </a>
  );
}

export default WhatsAppButton;