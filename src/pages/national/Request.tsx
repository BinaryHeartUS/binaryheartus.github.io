import { useState } from 'react';

export default function Request() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    location: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams({
        'entry.1475264147': formData.firstName,
        'entry.307727203': formData.lastName,
        'entry.1302188399': formData.email,
        'entry.1751717741': formData.phone,
        'entry.1800868177': formData.organization,
        'entry.2093919836': formData.location,
        'entry.870310054': formData.details
      });

      await fetch(
        'https://docs.google.com/forms/u/6/d/e/1FAIpQLSfM2eXGm1FuBLc6LX4JjaVDTPMbTQiVq2XHerTfZv9RS8zoyQ/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formBody.toString()
        }
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        location: '',
        details: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Request Tech from <span className="text-blue-600">Binary</span><span className="text-rose-600">Heart</span>
            </h1>
            <p className="text-xl leading-8 text-gray-700">
              Fill out this form to request technology from the BinaryHeart network.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-900/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2.5"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2.5"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2.5"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="123-456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2.5"
                />
              </div>

              {/* Organization Name */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-900 mb-2">
                  Organization Name (if applicable)?
                </label>
                <textarea
                  id="organization"
                  name="organization"
                  rows={3}
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2.5"
                />
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-2">
                  Where are you or your group/organization based?
                </label>
                <textarea
                  id="location"
                  name="location"
                  rows={3}
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2.5"
                />
              </div>

              {/* Details */}
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-900 mb-2">
                  Tell us more about you or your organization and how we can best help you!
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  required
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2.5"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                  <div className="flex">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="ml-3 text-sm text-green-800">
                      Thank you! Your request has been submitted successfully. We'll be in touch soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-lg bg-red-50 p-4 border border-red-200">
                  <div className="flex">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <p className="ml-3 text-sm text-red-800">
                      There was an error submitting your request. Please try again later.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
