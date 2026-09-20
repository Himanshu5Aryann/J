import { Phone } from "lucide-react";
import { telHref, whatsappHref } from "@/lib/site-data";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        style={{ width: 52, height: 52 }}
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current">
          <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.23.62 4.32 1.7 6.1L4 29l8.06-1.66a11.94 11.94 0 0 0 3.96.67C22.6 28 28 22.6 28 15.98 28 9.4 22.64 3 16.02 3Zm0 21.6a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-4.8.99 1.02-4.67-.23-.36a9.57 9.57 0 0 1-1.47-5.12c0-5.3 4.32-9.6 9.63-9.6 5.3 0 9.6 4.3 9.6 9.6 0 5.3-4.3 9.71-9.5 9.71Zm5.27-7.17c-.29-.14-1.7-.84-1.96-.93-.26-.1-.46-.14-.65.14-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.56c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.42 0 1.43 1.03 2.82 1.17 3.01.14.19 2.03 3.1 4.92 4.34.69.3 1.22.48 1.64.61.69.22 1.32.19 1.81.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.12-.26-.19-.55-.33Z" />
        </svg>
      </a>
      <a
        href={telHref}
        aria-label="Call JBN Tech Services"
        className="flex items-center justify-center rounded-full border border-[#babecc] bg-[#2d3436] text-white shadow-[8px_8px_16px_rgba(45,52,54,0.25),-8px_-8px_16px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff4757]"
        style={{ width: 52, height: 52 }}
      >
        <Phone className="h-5 w-5" strokeWidth={2} />
      </a>
    </div>
  );
}
