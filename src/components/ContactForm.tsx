
import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-input bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-input bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-input bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="" disabled>Select a subject</option>
          <option value="Booking Inquiry">Booking Inquiry</option>
          <option value="Collaboration Proposal">Collaboration Proposal</option>
          <option value="Press Inquiry">Press Inquiry</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-input bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          placeholder="Please include details about your inquiry..."
        />
      </div>
      
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          <span className="text-red-500">*</span> Required fields
        </p>
        
        <button
          type="submit"
          disabled={isSubmitting || submitted}
          className="px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md transition-all duration-300 flex items-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>Processing<span className="ml-2 animate-pulse">...</span></>
          ) : submitted ? (
            <>Sent Successfully</>
          ) : (
            <>Send Message <Send size={16} /></>
          )}
        </button>
      </div>
      
      {submitted && (
        <div className="p-4 rounded-md bg-green-50 text-green-800 text-sm animate-fade-in">
          Your message has been sent successfully. We'll get back to you as soon as possible.
        </div>
      )}
      
      {error && (
        <div className="p-4 rounded-md bg-red-50 text-red-800 text-sm animate-fade-in">
          {error}
        </div>
      )}
    </form>
  );
}
