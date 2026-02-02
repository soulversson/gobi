import React from 'react';
import { Link } from 'react-router-dom';
import { SectionId } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-gobi-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gobi-secondary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gobi-primary/20 rounded-full blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                alt="Skrifstofa Gobi" 
                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[400px]"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:pl-16">
            <h2 className="text-4xl font-bold text-gobi-dark mb-6">Um Gobi</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Við erum teymi sérfræðinga með áratuga reynslu í gagnavinnslu og hugbúnaðargerð. 
              Markmið okkar er að færa íslenskum fyrirtækjum bestu mögulegu lausnir 
              til að umbreyta gögnum í verðmæti og takast á við áskoranir framtíðarinnar.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-gobi-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gobi-dark">Sérfræðiþekking</h4>
                  <p className="text-slate-600">Djúp þekking á vöruhúsum gagna og hugbúnaði.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-gobi-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gobi-dark">Gagnadrifin sýn</h4>
                  <p className="text-slate-600">Við byggjum ákvarðanir og lausnir á gögnum.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-gobi-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gobi-dark">Áreiðanleiki</h4>
                  <p className="text-slate-600">Við skilum verkefnum á tíma og með gæðum.</p>
                </div>
              </div>
            </div>

            <Link 
                to="/umokkur"
                className="inline-flex items-center text-white bg-gobi-dark hover:bg-gobi-primary font-bold py-3 px-6 rounded-lg transition-colors"
            >
                Sjá nánar um teymið <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;