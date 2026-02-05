import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../types';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute top-0 w-full h-full bg-center bg-cover" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2070&auto=format&fit=crop')" }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-40 bg-gobi-dark mix-blend-multiply"></span>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-9/12 px-4 ml-auto mr-auto text-center">
            <div className="">
              <h1 className="text-white font-bold text-5xl md:text-7xl tracking-tight mb-6 animate-fade-in-up drop-shadow-lg">
                Gerum flókin gögn <br/> að skýrri sýn
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto font-medium drop-shadow-md leading-relaxed">
                Við hjálpum fyrirtækjum að beisla kraft gagnanna sinna og breyta þeim í verðmætar upplýsingar. Sérfræðingar í vöruhúsum gagna, stefnumótun og sérsmíðuðum lausnum sem virka.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link 
                  to="/#contact"
                  className="bg-gobi-primary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl flex items-center border border-transparent"
                >
                  Hafa Samband <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/thjonusta"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-gobi-primary transition-colors"
                >
                  Skoða Þjónustu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;