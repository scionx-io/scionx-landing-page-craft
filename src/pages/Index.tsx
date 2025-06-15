
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check, Globe, Zap, DollarSign, Shield, Clock, Smartphone } from 'lucide-react';

const Index = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Transfers",
      description: "Cross-border payments in minutes, not days"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Lower Fees",
      description: "Reduce costs by up to 90% vs traditional banks"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Wallet-Native",
      description: "Works with crypto wallets — no bank needed"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Ideal for remote teams and international payouts"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Transparent",
      description: "Trackable, programmable, and fully auditable"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliant",
      description: "Navigate regulations across multiple jurisdictions"
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Scalable",
      description: "Scale to $100M+ monthly volume capacity"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Operations",
      description: "No banking hours - payments work around the clock"
    }
  ];

  const stablecoins = [
    { name: "USDC", logo: "/public/lovable-uploads/cb2e462b-2649-41db-86f8-81f8f56c6383.png" },
    { name: "RLUSD", logo: "/public/lovable-uploads/3554892a-692b-46bd-a420-25f9cb9655b1.png" },
    { name: "USDT", logo: "/public/lovable-uploads/401d2fbe-8c09-44cd-a0c2-d127b3d58323.png" },
    { name: "EURC", logo: "/public/lovable-uploads/ad5d43c8-e27c-4d11-8a9b-46a88f604673.png" },
    { name: "PYUSD", logo: "/public/lovable-uploads/be76f49a-3b75-471c-87e8-60809a15718d.png" },
    { name: "FDUSD", logo: "/public/lovable-uploads/14a06070-5c77-4f1e-a1a1-af7721377770.png" }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$500",
      description: "For early-stage teams exploring stablecoins",
      features: [
        "60-minute strategy call",
        "Use case guidance: payouts, treasury, merchant flows",
        "Token and chain selection (USDC, RLUSD, etc.)",
        "Vendor shortlist: wallets, off-ramps, APIs",
        "1-page flow outline + next steps",
        "PDF summary with recommendations"
      ],
      highlighted: false
    },
    {
      name: "Growth",
      price: "$1,500 - $3,000",
      description: "For teams designing their first stablecoin payment flow",
      features: [
        "Everything in Starter",
        "Custom architecture for your payment use case",
        "Wallet, custody, and compliance options",
        "Jurisdiction-specific considerations (UAE, EU, etc.)",
        "Tooling/vendor recommendations (Circle, Fireblocks)",
        "2 support calls to refine implementation",
        "Comprehensive PDF blueprint"
      ],
      highlighted: true
    },
    {
      name: "Scale",
      price: "Custom Pricing",
      description: "For teams actively building or launching",
      features: [
        "Everything in Growth",
        "Bi-weekly advisory calls (2/month)",
        "Warm intros to key partners (banks, tech, legal)",
        "Feedback on GTM strategy, pitch materials, UX",
        "Ongoing support via email or Slack",
        "Ongoing advisory & partner coordination"
      ],
      highlighted: false
    }
  ];

  const handlePackageContact = (packageName: string) => {
    const subject = `${packageName} Package Consultation Request`;
    const body = `Hi, I'm interested in the ${packageName} package consultation. Please let me know your availability.`;
    window.location.href = `mailto:wecare@scionx.consulting?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
              <img 
                src="/public/lovable-uploads/1bc7272d-2d1c-4851-9546-e87b56f9f0c5.png" 
                alt="ScionX Logo" 
                className="w-full h-full object-contain rounded-lg bg-white/10"
              />
            </div>
            <h1 className="text-lg font-semibold" style={{ color: '#ffffff !important', textDecoration: 'none' }}>
              ScionX Web3 Consulting Services
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-blue-500/10"></div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Use Stablecoins to Power Global Payments
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We help individuals, startups, Web3 teams, and emerging fintechs design simple, compliant payment flows using stablecoins — no need for legacy rails or expensive intermediaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Packages
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Why Choose Stablecoin Payments?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stablecoins Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Built for the New Era of Digital Currencies
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {stablecoins.map((coin, index) => (
                <div key={index} className="group">
                  <div className="w-16 h-16 bg-slate-800/50 border border-slate-700 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:border-blue-500/50">
                    <img 
                      src={coin.logo} 
                      alt={coin.name} 
                      className="w-10 h-10 object-contain rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  pkg.highlighted 
                    ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/50 hover:shadow-blue-500/25' 
                    : 'bg-slate-800/50 border-slate-700 hover:shadow-blue-500/10'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                    Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-slate-400 mb-4">{pkg.description}</CardDescription>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-slate-300">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full font-semibold rounded-xl transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                    onClick={() => handlePackageContact(pkg.name)}
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
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
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="ac3ac16f-f5d1-450b-be8f-2e3a01158129" />
                  
                  {/* Honeypot Spam Protection */}
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
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                    >
                      Schedule Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                <img 
                  src="/public/lovable-uploads/1bc7272d-2d1c-4851-9546-e87b56f9f0c5.png" 
                  alt="ScionX Consulting Logo" 
                  className="w-full h-full object-contain rounded-md bg-white/10"
                />
              </div>
              <span className="font-mono text-blue-400 font-medium">scionx.consulting</span>
            </div>
            <p className="text-slate-400 text-center">
              © 2025 ScionX Consulting. Empowering the future of global payments.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
