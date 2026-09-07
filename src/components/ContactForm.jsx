import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = "Full name is required."
    if (!form.email.trim()) errs.email = "Email address is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address."
    if (!form.message.trim()) errs.message = "Message is required."
    return errs
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: "" }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
    setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" })
    setTimeout(() => setSubmitted(false), 6000)
  }

  const inputCls = (name) =>
    `w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none transition-colors duration-200 focus:border-brand-orange ${
      errors[name] ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
    }`

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-4 py-16">
        <CheckCircle size={52} className="text-green-500" />
        <h3 className="text-brand-blue font-bold text-2xl">Message Sent!</h3>
        <p className="text-gray-400">{"Thank you for reaching out. We'll get back to you within one business day."}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-5">
      <h3 className="text-brand-blue font-bold text-xl mb-1">Send Us a Message</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block text-brand-blue font-semibold text-sm mb-2">Full Name <span className="text-brand-orange">*</span></label>
          <input id="cf-name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your Full Name" className={inputCls("name")} aria-required="true" />
          {errors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={11}/> {errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-company" className="block text-brand-blue font-semibold text-sm mb-2">Company Name</label>
          <input id="cf-company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your Company" className={inputCls("company")} />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-brand-blue font-semibold text-sm mb-2">Email Address <span className="text-brand-orange">*</span></label>
          <input id="cf-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputCls("email")} aria-required="true" />
          {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={11}/> {errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-brand-blue font-semibold text-sm mb-2">Phone Number</label>
          <input id="cf-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputCls("phone")} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-service" className="block text-brand-blue font-semibold text-sm mb-2">Service of Interest</label>
        <select id="cf-service" name="service" value={form.service} onChange={handleChange} className={inputCls("service")}>
          <option value="">Select a Service</option>
          <option>Ocean Freight</option>
          <option>Air Freight</option>
          <option>Customs Clearance Services</option>
          <option>Domestic Transportation</option>
          <option>ODC & Project Cargo Movements</option>
          <option>Warehousing</option>
          <option>Consultancy Services</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className="block text-brand-blue font-semibold text-sm mb-2">Message <span className="text-brand-orange">*</span></label>
        <textarea id="cf-message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your logistics requirement..." className={inputCls("message") + " resize-none"} aria-required="true" />
        {errors.message && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={11}/> {errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary">
        SEND MESSAGE <Send size={15} />
      </button>
    </form>
  )
}
