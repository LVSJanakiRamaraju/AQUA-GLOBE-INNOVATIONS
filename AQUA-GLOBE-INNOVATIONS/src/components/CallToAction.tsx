import React, { useState } from 'react';
import { Check } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="buy-now" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          {/* Left Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">
              Get Your Aqua Globe Today
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-md">
              Transform your plant care routine with our innovative self-watering solution. Perfect for all plant lovers!
            </p>

            <ul className="space-y-4 text-gray-600 max-w-xs">
              {[
                "100% Satisfaction Guaranteed",
                "Free Shipping on Orders Over $50",
                "30-Day Money-Back Guarantee"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="text-blue-500" size={22} />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form Card */}
          <div className="md:w-1/2 bg-gray-50 rounded-lg border border-gray-200 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="53649f62-67c4-46e7-9161-e32dc138c2ad"/>
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input type="hidden" name="subject" value="New message from portfolio contact form" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-800">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Enter product name, quantity, and any other details'
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-3 rounded-md text-center ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
