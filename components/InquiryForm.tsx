import React, { useState } from 'react';
import { Service } from '../types';

interface InquiryFormProps {
  service?: Service;
  onBack: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ service, onBack }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: service ? `Inquiry: ${service.name}` : '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] flex items-center justify-center animate-fade-in-up">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="w-20 h-20 bg-[#EF4444] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-4xl font-display font-bold text-[#2C2A26] uppercase tracking-tighter">Message <span className="font-light">Received.</span></h2>
          <p className="text-[#5D5A53] font-light leading-relaxed">
            Thanks for reaching out. We've received your inquiry and one of our team members will get back to you within 24-48 hours.
          </p>
          <button 
            onClick={onBack}
            className="inline-block py-4 px-12 bg-[#2C2A26] text-white uppercase tracking-widest text-xs font-bold hover:bg-black transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Home
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Left Column: Info */}
          <div className="md:col-span-4 space-y-12">
            <div>
              <h1 className="text-4xl font-display text-[#2C2A26] mb-6 uppercase tracking-tighter font-bold">Let’s Work It <br/><span className="text-[#EF4444] font-light">Out Together.</span></h1>
              <p className="text-[#5D5A53] font-light leading-relaxed">
                If you've got a project in mind — big, small, half-formed — throw us a line. We'll sort through it together.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-2">Email Us</h4>
                <p className="text-[#5D5A53] font-light">hello@reztek.digital</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-2">Land Acknowledgement</h4>
                <p className="text-[#5D5A53] text-[10px] font-light leading-relaxed">
                  Operating on Treaty One Territory and the National Homeland of the Red River Métis, in Wiiniibak, Manido Abi. We acknowledge these are the ancestral lands of the Anishinaabeg, Anisininew, Ininiwak/Nehethowuk, Oceti Sakowin/Dakota Oyate, and Michif (Métis) Peoples. This territory is also a place of significance for the Denesuline and the Inuit, some of whom have been living here for generations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-8 bg-white p-8 md:p-12 shadow-sm border border-[#D6D1C7]/30">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#2C2A26]">Full Name</label>
                  <input 
                    name="fullName"
                    type="text" 
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className={`w-full bg-transparent border-b ${errors.fullName ? 'border-[#EF4444]' : 'border-[#D6D1C7]'} py-3 text-[#2C2A26] placeholder-[#A8A29E]/50 outline-none focus:border-[#EF4444] transition-colors`} 
                  />
                  {errors.fullName && <p className="text-[10px] font-bold text-[#EF4444] uppercase tracking-widest">{errors.fullName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#2C2A26]">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-[#EF4444]' : 'border-[#D6D1C7]'} py-3 text-[#2C2A26] placeholder-[#A8A29E]/50 outline-none focus:border-[#EF4444] transition-colors`} 
                  />
                  {errors.email && <p className="text-[10px] font-bold text-[#EF4444] uppercase tracking-widest">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#2C2A26]">Subject</label>
                <input 
                  name="subject"
                  type="text" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?" 
                  className={`w-full bg-transparent border-b ${errors.subject ? 'border-[#EF4444]' : 'border-[#D6D1C7]'} py-3 text-[#2C2A26] placeholder-[#A8A29E]/50 outline-none focus:border-[#EF4444] transition-colors`} 
                />
                {errors.subject && <p className="text-[10px] font-bold text-[#EF4444] uppercase tracking-widest">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#2C2A26]">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, timeline, and any specific requirements..." 
                  rows={5}
                  className={`w-full bg-transparent border-b ${errors.message ? 'border-[#EF4444]' : 'border-[#D6D1C7]'} py-3 text-[#2C2A26] placeholder-[#A8A29E]/50 outline-none focus:border-[#EF4444] transition-colors resize-none`}
                />
                {errors.message && <p className="text-[10px] font-bold text-[#EF4444] uppercase tracking-widest">{errors.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 bg-[#EF4444] text-white uppercase tracking-widest text-sm font-bold hover:bg-[#DC2626] transition-colors flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send the Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
