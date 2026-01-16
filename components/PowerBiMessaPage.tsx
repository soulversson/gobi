import React, { useEffect } from 'react';
import { BarChart3, Users, Calendar, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const PowerBiMessaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section for Messa */}
      <div className="relative bg-gobi-dark py-24 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gobi-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gobi-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                    <BarChart3 className="text-gobi-secondary h-6 w-6 mr-2" />
                    <span className="text-white font-medium">12 mánaða menningar- og þekkingarprógramm</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Power BI Messa</h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                    Power BI Messa er prógramm sem byggir upp Power BI menningu innan fyrirtækis með markvissri fræðslu, miðlægri þekkingarmiðlun og virkri þátttöku starfsfólks.
                </p>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        
        {/* Mission Statement */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gobi-dark mb-6">Markmiðið</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                Að færa Power BI úr því að vera vinnutól afmarkaðs hóps yfir í að verða <span className="text-gobi-primary font-bold">sameiginlegur grundvöllur fyrirtækisins</span> í gagnadrifinni ákvarðanatöku.
            </p>
        </div>

        {/* What is included grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-gobi-light p-10 rounded-3xl border border-gobi-secondary/20 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Calendar className="w-32 h-32 text-gobi-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gobi-dark mb-6 flex items-center">
                    <Calendar className="mr-3 text-gobi-primary" /> Mánaðarleg Power BI Messa
                </h3>
                <ul className="space-y-4 text-slate-700">
                    <li className="flex items-start">
                        <div className="h-2 w-2 bg-gobi-secondary rounded-full mt-2 mr-3 shrink-0"></div>
                        <span><strong>60 mín á Teams</strong> einu sinni í mánuði.</span>
                    </li>
                    <li className="flex items-start">
                        <div className="h-2 w-2 bg-gobi-secondary rounded-full mt-2 mr-3 shrink-0"></div>
                        <span><strong>Innanhúss kynning:</strong> Raunverulegt notkunardæmi úr fyrirtækinu.</span>
                    </li>
                    <li className="flex items-start">
                        <div className="h-2 w-2 bg-gobi-secondary rounded-full mt-2 mr-3 shrink-0"></div>
                        <span><strong>Tæknikafli frá Gobi:</strong> Workspace skipulag, nafnavenjur, miðlægt gagnalíkan, RLS, o.fl.</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BookOpen className="w-32 h-32 text-gobi-dark" />
                </div>
                <h3 className="text-2xl font-bold text-gobi-dark mb-6 flex items-center">
                    <BookOpen className="mr-3 text-gobi-primary" /> Sértækar Messur
                </h3>
                <p className="text-slate-600 mb-4">Stigskipt fræðsla yfir árið:</p>
                <div className="grid grid-cols-1 gap-3">
                    {['Messa fyrir nýja notendur', 'Fyrstu skref í skýrslugerð', 'Framhalds messa', 'Tæknilega afmarkaðar messur (DAX, App arkitektúr)'].map((item, i) => (
                        <div key={i} className="flex items-center p-3 bg-slate-50 rounded-lg">
                             <CheckCircle className="h-4 w-4 text-gobi-secondary mr-3" />
                             <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gobi-dark mb-6">SharePoint Þekkingarbanki</h3>
                <p className="text-slate-600 mb-4">Við byggjum upp varanlegan grunn:</p>
                <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 text-gobi-primary mr-2"/> Stuttir fræðslupóstar</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 text-gobi-primary mr-2"/> Best practices & algeng mistök</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 text-gobi-primary mr-2"/> Mini leiðbeiningar</li>
                </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gobi-dark mb-6">Teams / Viva Engage Samfélag</h3>
                <p className="text-slate-600 mb-4">Lifandi umræða og stuðningur:</p>
                <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center"><Users className="h-4 w-4 text-gobi-primary mr-2"/> Tips & tricks</li>
                    <li className="flex items-center"><Users className="h-4 w-4 text-gobi-primary mr-2"/> Power BI í M365 tólum</li>
                    <li className="flex items-center"><Users className="h-4 w-4 text-gobi-primary mr-2"/> Samhjálp notenda</li>
                </ul>
            </div>
        </div>

        {/* Why Annual? */}
        <div className="bg-slate-50 rounded-3xl p-12 mb-24">
            <h2 className="text-3xl font-bold text-gobi-dark mb-10 text-center">Af hverju árlegt prógramm?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h4 className="font-bold text-red-500 mb-4 text-xl">Power BI Messa er EKKI:</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center opacity-70"><XIcon className="mr-3" /> Einstakur fyrirlestur</li>
                        <li className="flex items-center opacity-70"><XIcon className="mr-3" /> Styttra námskeið</li>
                        <li className="flex items-center opacity-70"><XIcon className="mr-3" /> Tilviljanakenndar ráðgjafastundir</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-green-600 mb-4 text-xl">Power BI Messa ER:</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center font-medium"><CheckIcon className="mr-3" /> Stöðug uppbygging yfir heilt ár</li>
                        <li className="flex items-center font-medium"><CheckIcon className="mr-3" /> Samræming vinnubragða</li>
                        <li className="flex items-center font-medium"><CheckIcon className="mr-3" /> Vaxandi hæfni og dýpri skilningur</li>
                        <li className="flex items-center font-medium"><CheckIcon className="mr-3" /> Skalanleg lausn sem þróast með fyrirtækinu</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Benefits */}
        <div className="text-center bg-gobi-secondary/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gobi-dark mb-8">Fyrirtækið Fær:</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {['Skýrari vinnubrögð', 'Betri skýrslugæði', 'Minni tvíverknað', 'Sterkara Power BI samfélag', 'Meiri arðsemi af Power BI'].map((tag, i) => (
                    <span key={i} className="bg-white text-gobi-dark font-bold px-6 py-3 rounded-full shadow-sm border border-white/50">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

// Helper icons
const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={`w-6 h-6 text-green-500 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);
const XIcon = ({ className }: { className?: string }) => (
    <svg className={`w-6 h-6 text-red-400 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);

export default PowerBiMessaPage;