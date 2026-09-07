import { useEffect, useRef } from "react"
import { X, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function ServiceModal({ service, onClose }) {
  const modalRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    modalRef.current?.focus()
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl animate-modal-in outline-none max-h-[90vh] flex flex-col"
      >
        {/* Image */}
        <div className="relative h-52 md:h-64 flex-shrink-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/70 to-transparent" />
          <h2 className="absolute bottom-5 left-6 text-white font-bold text-xl md:text-2xl">{service.title}</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={17} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          <p className="text-gray-500 leading-relaxed mb-7 text-sm md:text-base">{service.fullDescription}</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => { navigate("/getaquote"); onClose() }} className="btn-primary">
              GET A QUOTE <ArrowRight size={15} />
            </button>
            <button onClick={onClose} className="btn-outline">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
