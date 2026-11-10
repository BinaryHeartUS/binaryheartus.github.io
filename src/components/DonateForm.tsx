import { useRef, useState } from 'react';
import { HEARD_ABOUT_OPTIONS } from '../data/heardAboutOptions';
import type { DonateFormData, DonateFormFieldIds, DonateFormSubmitInfo } from '../types/forms';
import { submitDonateFormToGoogle } from '../utils/googleForms';

interface DonateFormProps {
  formUrl: string;
  fieldIds: DonateFormFieldIds;
  buttonGradientClass?: string;
  onSubmit?: (data: DonateFormData, info: DonateFormSubmitInfo) => Promise<void>;
}

const MAX = {
  firstName: 40,
  lastName: 80,
  email: 80,
  phone: 40,
  donationContents: 2000,
  additionalNotes: 2000,
  heardAboutOther: 150,
};

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  donationContents: '',
  additionalNotes: '',
  heardAbout: '',
  heardAboutOther: '',
  website: '',
};

export default function DonateForm({ formUrl, fieldIds, buttonGradientClass = 'from-blue-600 to-indigo-600', onSubmit }: DonateFormProps) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const startedAt = useRef(0);
  const showHeardAbout = Boolean(fieldIds.heardAbout);

  const markStarted = () => {
    if (!startedAt.current) startedAt.current = Date.now();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    markStarted();
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const finish = () => {
    setSubmitStatus('success');
    setFormData(EMPTY_FORM);
    startedAt.current = 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('idle');

    const trimmed = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim()])
    ) as typeof EMPTY_FORM;

    if (trimmed.website) {
      finish();
      return;
    }

    const data: DonateFormData = {
      firstName: trimmed.firstName,
      lastName: trimmed.lastName,
      email: trimmed.email,
      phone: trimmed.phone,
      donationContents: trimmed.donationContents,
      additionalNotes: trimmed.additionalNotes,
      heardAbout: trimmed.heardAbout === 'Other' && trimmed.heardAboutOther
        ? `Other: ${trimmed.heardAboutOther}`
        : trimmed.heardAbout,
    };
    const info: DonateFormSubmitInfo = {
      secondsToFill: startedAt.current ? Math.round((Date.now() - startedAt.current) / 1000) : 0,
    };

    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(data, info);
      } else {
        await submitDonateFormToGoogle(formUrl, fieldIds, data);
      }
      finish();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-900/5">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Donation</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 rounded-lg bg-green-50 p-4 border border-green-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Donation request submitted successfully! We'll reach out to coordinate pickup or drop-off.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 border border-red-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">
                There was an error submitting your donation request. Please try again.
              </p>
            </div>
          </div>
        </div>
      )}

      <form 
        onSubmit={handleSubmit}
        onFocus={markStarted}
        className="space-y-6"
      >
        {/* Name Fields */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
              First name
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                maxLength={MAX.firstName}
                autoComplete="given-name"
                className="block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
              Last name
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                maxLength={MAX.lastName}
                autoComplete="family-name"
                className="block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                required
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              maxLength={MAX.email}
              autoComplete="email"
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
            Phone number
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={MAX.phone}
              autoComplete="tel"
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Donation Contents */}
        <div>
          <label htmlFor="donationContents" className="block text-sm font-semibold text-gray-900 mb-2">
            What are the contents of your donation?
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute top-3 left-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <textarea
              name="donationContents"
              id="donationContents"
              rows={4}
              value={formData.donationContents}
              onChange={handleChange}
              maxLength={MAX.donationContents}
              placeholder="e.g., 2 laptops, 1 monitor, keyboard and mouse"
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 resize-none"
              required
            />
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-900 mb-2">
            Anything else you'd like to share?
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute top-3 left-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <textarea
              name="additionalNotes"
              id="additionalNotes"
              rows={3}
              value={formData.additionalNotes}
              onChange={handleChange}
              maxLength={MAX.additionalNotes}
              placeholder="Special pickup instructions, preferred times, etc."
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 resize-none"
            />
          </div>
        </div>

        {showHeardAbout && (
          <div>
            <label htmlFor="heardAbout" className="block text-sm font-semibold text-gray-900 mb-2">
              How did you hear about us?
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                </svg>
              </div>
              <select
                name="heardAbout"
                id="heardAbout"
                value={formData.heardAbout}
                onChange={handleChange}
                className="block w-full rounded-lg border-0 bg-white py-3 pl-10 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              >
                <option value="">Select one (optional)</option>
                {HEARD_ABOUT_OPTIONS.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            {formData.heardAbout === 'Other' && (
              <input
                type="text"
                name="heardAboutOther"
                id="heardAboutOther"
                aria-label="Where did you hear about us?"
                value={formData.heardAboutOther}
                onChange={handleChange}
                maxLength={MAX.heardAboutOther}
                placeholder="Where did you hear about us?"
                className="mt-3 block w-full rounded-lg border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
            )}
          </div>
        )}

        <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
          <label htmlFor="website">Website</label>
          <input
            type="text"
            name="website"
            id="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-lg bg-gradient-to-r ${buttonGradientClass} px-6 py-3 text-base font-semibold text-white shadow-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Donation Request'}
          </button>
        </div>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        We'll reach out to coordinate a pickup or drop-off time
      </p>
    </div>
  );
}
