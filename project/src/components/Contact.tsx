import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      type: 'stream',
      to: 'general',
      topic: 'New Contact Message',
      content: `**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Message:** ${formData.message}`
    };

    const botEmail = 'code-world-bot@codeworld.zulipchat.com';
    const apiKey = 'LQ1ZbvIbO7269FzgCNZqgL84NUh4nLyU';
    const apiUrl = 'https://codeworld.zulipchat.com/api/v1/messages';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + btoa(`${botEmail}:${apiKey}`),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(payload),
      });

      const data = await response.json();

      if (data.result === 'success') {
        setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage({ type: 'error', text: 'Failed to send message. Try again later.' });
      }
    } catch (error) {
      console.error('Zulip error:', error);
      setStatusMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    }

    setTimeout(() => {
      setStatusMessage(null);
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white mb-8">Contact</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <p className="text-gray-300 mb-8">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400">prashantkumarr9837@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-400">+91-7037729841</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-400">Ghaziabad, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            {statusMessage && (
              <div
                className={`p-4 rounded-lg text-white mb-6 transition-opacity duration-500 ${
                  statusMessage.type === 'success'
                    ? 'bg-green-600/80 border border-green-400'
                    : 'bg-red-600/80 border border-red-400'
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-gray-700/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-600/30 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-600/50 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-600/50 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-gray-600/50 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
