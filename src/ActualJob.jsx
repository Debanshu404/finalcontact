import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUpload } from 'react-icons/fa';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const ActualJob = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });
  const [errors, setErrors] = useState({});

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    document.body.style.overflow = isPopupOpen ? 'auto' : 'hidden';
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';
    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    } else if (formData.resume.type !== 'application/pdf') {
      newErrors.resume = 'Only PDF files are allowed';
    } else if (formData.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = 'File size must be less than 5MB';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Thank you for your application! We will contact you soon.');
    console.log('Form data:', formData);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: null
    });
    setErrors({});
    togglePopup();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Section - Company Info */}
       

        {/* Right Section - Application Info */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md md:w-3/5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Job Application for job seekers</h2>
          <p className="text-gray-600 mb-8">
            We're looking for talented individuals to join our team. Submit your application and we'll get back to you soon.
          </p>
          
          <button 
            onClick={togglePopup}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
          >
            <FaPaperPlane /> Apply Now
          </button>
        </div>
      </div>

      {/* Application Form Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                onClick={togglePopup}
              >
                &times;
              </button>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Job Application Form</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Fields marked with <span className="text-red-500">*</span> are required
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.coverLetter ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Tell us why you'd be a great fit for this position..."
                  ></textarea>
                  {errors.coverLetter && <p className="text-red-500 text-sm mt-1">{errors.coverLetter}</p>}
                </div>

                <div className="mb-6">
                  <label className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                    Upload Resume (PDF)
                  </label>
                  <div className={`border-2 border-dashed rounded-lg p-4 ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}>
                    <label className="flex flex-col items-center justify-center cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-2">
                        <FaUpload className="text-blue-500 text-2xl mb-2" />
                        <p className="text-sm text-gray-500">
                          {formData.resume 
                            ? formData.resume.name 
                            : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PDF only (max. 5MB)
                        </p>
                      </div>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf"
                        onChange={handleChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                </div>

                <div className="mt-8">
                  <div className="text-sm text-gray-500 mb-4">
                    We respect your privacy. Your information will not be shared.
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full flex items-center justify-center gap-2 transition-colors"
                  >
                    Submit Application <FaPaperPlane />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActualJob;