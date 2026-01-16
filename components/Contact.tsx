import React from 'react';
import { SectionId } from '../types';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gobi-dark mb-4">Hafa Samband</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Viltu ræða næsta verkefni? Heyrðu í okkur.
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 bg-gobi-dark text-white p-10 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gobi-secondary">Upplýsingar</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-gobi-primary mr-4" />
                  <span>gobi@gobi.is</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-gobi-primary mr-4" />
                  <span>+354 555 1234</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-gobi-primary mr-4" />
                  <span>Borgartún 99, 105 Reykjavík</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-slate-400 text-sm">
                Opnunartímar:<br />
                Mán - Fös: 09:00 - 16:00
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gobi-dark mb-2">Nafn</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-gray-900 focus:border-gobi-primary focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder-slate-400" placeholder="Jón Jónsson" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gobi-dark mb-2">Netfang</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-gray-900 focus:border-gobi-primary focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder-slate-400" placeholder="jon@email.is" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gobi-dark mb-2">Efni</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-gray-900 focus:border-gobi-primary focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder-slate-400" placeholder="Fyrirspurn um vefsíðu" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gobi-dark mb-2">Skilaboð</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-gray-900 focus:border-gobi-primary focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder-slate-400" placeholder="Hvernig getum við aðstoðað?"></textarea>
              </div>

              <button type="submit" className="w-full bg-gobi-primary hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Senda Fyrirspurn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;