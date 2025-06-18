import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    websiteType: 'web-development',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        websiteType: 'web-development',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 font-poppins">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Contact Info (matches the image) */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 md:w-2/5 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-blue-200 mb-8">Fill up the form and our Team will get back to you within 24 hours.</p>
            
            <div className="space-y-6 mb-8">
              <ContactInfoItem 
                icon={<FaPhoneAlt />} 
                title="Phone" 
                text="+0123 4567 8910" 
              />
              <ContactInfoItem 
                icon={<FaEnvelope />} 
                title="Email" 
                text="hello@flowbase.com" 
              />
              <ContactInfoItem 
                icon={<FaMapMarkerAlt />} 
                title="Address" 
                text="102 Street 2714 Den" 
              />
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <SocialIcon icon={<FaFacebookF />} />
                <SocialIcon icon={<FaTwitter />} />
                <SocialIcon icon={<FaInstagram />} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Contact Form */}
        <div className="p-6 md:p-8 md:w-3/5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              label="Full Name *"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              placeholder="Enter your full name"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Email *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="your.email@example.com"
              />
              <FormField
                label="Phone *"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="+90 543 779 94 64"
              />
            </div>
            
            <FormField
              label="Company *"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              error={errors.company}
              placeholder="Enter your company/institution name"
            />
       
            
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Write your message..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <FaPaperPlane className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const ContactInfoItem = ({ icon, title, text }) => (
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-blue-200">{text}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-9 h-9 rounded-full bg-blue-500 hover:bg-white hover:text-blue-500 text-white flex items-center justify-center transition-colors">
    {icon}
  </a>
);

const FormField = ({ label, name, type, value, onChange, error, placeholder }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'}`}
      placeholder={placeholder}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default ContactUs;