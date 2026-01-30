import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  // Formspree Endpoint for Whitt Lewis Holdings
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqeblrry";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const firstName = data.firstName as string;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmittedName(firstName);
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        // If the user hasn't updated the URL yet, it will fail, so we show a helpful message
        if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID_HERE')) {
          setErrorMessage("Form setup required: Please update the Formspree URL in the code.");
        } else {
          setErrorMessage(errorData.error || "Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      setErrorMessage("Unable to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6 font-bold">Start a Conversation</h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed font-medium">
                  Thank you for reaching out. I approach every conversation with strict confidentiality and no obligation.
                </p>
             </div>
             <Card className="bg-white/10 border-none text-white rounded-sm shadow-2xl backdrop-blur-sm flex items-center justify-center min-h-[400px]">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <CheckCircle className="h-20 w-20 text-green-400" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">Message Sent</h3>
                <p className="text-blue-100 text-lg mb-8">
                  Thanks for getting in touch, {submittedName}. I have received your message and will get back to you shortly.
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-6 rounded-sm"
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 font-bold">Start a Conversation</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed font-medium">
              I approach every conversation with strict confidentiality and no obligation. Whether you are ready to sell now or just starting to think about your succession plan, I would love to hear from you.
            </p>
            <div className="space-y-6 text-blue-100">
              <div>
                <h3 className="text-white font-bold mb-1">Email</h3>
                <p>Will@WhittLewisHoldings.com</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Office</h3>
                <p>Raleigh, NC</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Phone</h3>
                <p>(704) 685-5733</p>
              </div>
            </div>
          </div>
          
          <Card className="bg-white/10 border-none text-white rounded-sm shadow-2xl backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-blue-100">First name *</label>
                    <Input id="firstName" name="firstName" placeholder="John" required className="bg-white/10 border-white/20 text-white placeholder:text-blue-300/50 focus-visible:ring-blue-400 rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-blue-100">Last name *</label>
                    <Input id="lastName" name="lastName" placeholder="Doe" required className="bg-white/10 border-white/20 text-white placeholder:text-blue-300/50 focus-visible:ring-blue-400 rounded-sm" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-blue-100">Email *</label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required className="bg-white/10 border-white/20 text-white placeholder:text-blue-300/50 focus-visible:ring-blue-400 rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-blue-100">Phone *</label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required className="bg-white/10 border-white/20 text-white placeholder:text-blue-300/50 focus-visible:ring-blue-400 rounded-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-blue-100">Company Name *</label>
                  <Input id="company" name="company" placeholder="Acme Corp" required className="bg-white/10 border-white/20 text-white placeholder:text-blue-300/50 focus-visible:ring-blue-400 rounded-sm" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-blue-100">Optional Message</label>
                  <Textarea id="message" name="message" placeholder="Tell me about your business..." className="bg-white/10 border-white/20 text-white placeholder:text-blue-300/50 min-h-[120px] focus-visible:ring-blue-400 rounded-sm" />
                </div>
                
                {errorMessage && (
                  <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-3 rounded-sm flex items-start gap-2 text-sm">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <Button 
                  disabled={isSubmitting}
                  className="w-full bg-white text-blue-900 hover:bg-blue-50 rounded-sm h-12 text-base font-bold mt-2 border-none shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
