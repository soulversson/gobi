import React from 'react';
import { SectionId } from '../types';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gobi-dark mb-4">Hafa Samband</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Viltu ræða næsta verkefni? Heyrðu í okkur.
          </p>
        </div>

        <div className="flex justify-center items-center">
            <div className="bg-gobi-light p-10 rounded-3xl border border-gobi-secondary/20 shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-white p-4 rounded-full mb-6 shadow-sm">
                    <Mail className="h-10 w-10 text-gobi-primary" />
                </div>
                <h3 className="text-xl font-bold text-gobi-dark mb-2">Sendu okkur póst</h3>
                <a href="mailto:gobi@gobi.is" className="text-2xl md:text-3xl font-bold text-gobi-primary hover:text-orange-600 transition-colors">
                    gobi@gobi.is
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;