
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Get Started Today
          </h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST" 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <input type="hidden" name="access_key" value="ac3ac16f-f5d1-450b-be8f-2e3a01158129" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-300">
                    Company / Project
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company or project name"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="region" className="text-sm font-medium text-slate-300">
                    Region / Country
                  </label>
                  <input
                    type="text"
                    id="region"
                    name="region"
                    placeholder="e.g., UAE, EU, US"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="useCase" className="text-sm font-medium text-slate-300">
                    Use Case <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your primary use case</option>
                    <option value="payroll">Payroll & Employee Payments</option>
                    <option value="merchant">Merchant Payments</option>
                    <option value="treasury">Treasury Management</option>
                    <option value="remittances">Cross-border Remittances</option>
                    <option value="b2b">B2B Payments</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="package" className="text-sm font-medium text-slate-300">
                    Interested Package <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="package"
                    name="package"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a package</option>
                    <option value="starter">Starter ($500)</option>
                    <option value="growth">Growth ($1,500-$3,000)</option>
                    <option value="scale">Scale (Custom)</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="comments" className="text-sm font-medium text-slate-300">
                    Additional Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    placeholder="Any specific requirements or questions?"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                  >
                    Submit
                    <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
