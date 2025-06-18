import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaComments, FaPaperPlane, FaUpload } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const JobApplicationForm = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roles: '',
    reason: '',
    resume: null
  });
  const [errors, setErrors] = useState({});

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    document.body.style.overflow = isPopupOpen ? 'auto' : 'hidden';
  };

  const handleInternChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleInternshipSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.roles) newErrors.roles = 'Role is required';
    if (!formData.reason.trim()) newErrors.reason = 'Reason is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';

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
      roles: '',
      reason: '',
      resume: null
    });
    setErrors({});
    togglePopup();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Join Our Innovative Team</h1>
        <p className="text-lg text-gray-600 mb-8">
          We're looking for passionate individuals to help us build the future. Apply now to become part of our growing team and make an impact in the tech industry.
        </p>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          onClick={togglePopup}
        >
          <i className="fas fa-paper-plane mr-2"></i>Apply Now
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="p-6 md:p-8">
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                onClick={togglePopup}
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Application Form for interns</h2>
                <p className="text-gray-600 text-sm">
                  Fields marked with <span className="text-red-500">*</span> are required
                </p>
              </div>

              <form onSubmit={handleInternshipSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInternChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInternChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInternChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="roles" className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                    Position
                  </label>
                  <select
                    id="roles"
                    name="roles"
                    value={formData.roles}
                    onChange={handleInternChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.roles ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select a position</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Founder's Office">Founder's Office</option>
                    <option value="Electronics Engineer">Electronics Engineer</option>
                    <option value="Robotics & AI">Robotics & AI</option>
                  </select>
                  {errors.roles && <p className="text-red-500 text-sm mt-1">{errors.roles}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="reason" className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                    Why do you want this opportunity?
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    placeholder="Tell us why you're interested in this position..."
                    value={formData.reason}
                    onChange={handleInternChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] ${errors.reason ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="resume" className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500">
                    Upload Resume
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                    <label htmlFor="resume" className="flex items-center justify-between cursor-pointer">
                      <div className="text-left">
                        <div className="font-medium">
                          {formData.resume ? formData.resume.name : 'Click to upload resume'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {formData.resume ? `PDF (${(formData.resume.size / 1024 / 1024).toFixed(2)} MB)` : 'PDF only (max: 5MB)'}
                        </div>
                      </div>
                      <i className="fas fa-cloud-upload-alt text-gray-400 text-xl"></i>
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf"
                      onChange={handleInternChange}
                      className="hidden"
                    />
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <i className="fas fa-file-pdf text-red-500 mr-2"></i> PDF format only
                    </div>
                    {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-sm text-gray-500 mb-4">
                    We respect your privacy. Your information will not be shared.
                  </div>
                  <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full md:w-auto transition-colors duration-200"
                  >
                    Apply Now <i className="fas fa-paper-plane ml-2"></i>
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

export default JobApplicationForm;