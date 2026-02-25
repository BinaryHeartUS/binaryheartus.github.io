import { useState, useEffect } from 'react';
import BinaryHeartText from '../../components/BinaryHeartText';
import chaptersData from '../../data/chapters.json';
import type { Chapter } from '../../types/chapters';
import { 
  getCoordinatesFromZipCode, 
  findNearestChapter, 
  getChaptersWithLocation 
} from '../../utils/locationHelpers';

export default function Request() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    location: '',
    details: '',
    zipCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [nearestChapter, setNearestChapter] = useState<Chapter | null>(null);
  const [isLookingUpZip, setIsLookingUpZip] = useState(false);
  const [zipLookupFailed, setZipLookupFailed] = useState(false);

  // Look up nearest chapter when zip code changes
  useEffect(() => {
    const lookupZipCode = async () => {
      const zipCode = formData.zipCode.trim();
      
      // Reset if zip code is empty or invalid length
      if (!zipCode || zipCode.length !== 5) {
        setNearestChapter(null);
        setZipLookupFailed(false);
        return;
      }

      setIsLookingUpZip(true);
      setZipLookupFailed(false);
      
      try {
        const coords = await getCoordinatesFromZipCode(zipCode);
        
        if (coords) {
          const chapters = getChaptersWithLocation(
            chaptersData.higherEducation as Chapter[],
            chaptersData.highSchool as Chapter[]
          );
          const nearest = findNearestChapter(coords, chapters);
          setNearestChapter(nearest);
          setZipLookupFailed(false);
        } else {
          setNearestChapter(null);
          setZipLookupFailed(true);
        }
      } catch (error) {
        console.error('Error looking up zip code:', error);
        setNearestChapter(null);
        setZipLookupFailed(true);
      } finally {
        setIsLookingUpZip(false);
      }
    };

    // Debounce the lookup
    const timeoutId = setTimeout(lookupZipCode, 500);
    return () => clearTimeout(timeoutId);
  }, [formData.zipCode]);

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
      // Determine which form to use
      // If nearest chapter has a form, use it; otherwise use national
      const targetChapter = (nearestChapter?.requestForm) 
        ? nearestChapter 
        : chaptersData.national;
      const formConfig = targetChapter.requestForm;

      if (!formConfig) {
        throw new Error('No form configuration available');
      }

      const formBody = new URLSearchParams({
        [formConfig.fieldIds.firstName]: formData.firstName,
        [formConfig.fieldIds.lastName]: formData.lastName,
        [formConfig.fieldIds.email]: formData.email,
        [formConfig.fieldIds.phone]: formData.phone,
        [formConfig.fieldIds.organization]: formData.organization,
        [formConfig.fieldIds.location]: formData.location,
        [formConfig.fieldIds.details]: formData.details
      });

      await fetch(formConfig.formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        location: '',
        details: '',
        zipCode: ''
      });
      setNearestChapter(null);
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
              Request Tech from <BinaryHeartText />
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

              {/* Zip Code */}
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-900 mb-2">
                  Zip Code (helps us route your request)
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="60614"
                  maxLength={5}
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2.5"
                />
                {isLookingUpZip && (
                  <p className="mt-2 text-sm text-gray-600">
                    Looking up location...
                  </p>
                )}
                {!isLookingUpZip && nearestChapter && (
                  <p className="mt-2 text-sm text-green-700 flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Routing to {nearestChapter.name}
                    {!nearestChapter.requestForm && <span className="text-gray-600 ml-1">(via national form)</span>}
                  </p>
                )}
                {!isLookingUpZip && zipLookupFailed && (
                  <p className="mt-2 text-sm text-amber-700 flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    Could not find a chapter, routing to national
                  </p>
                )}
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
