import React, { useEffect, useState } from 'react';
import { BarChart3, Users, Calendar, BookOpen, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Star } from 'lucide-react';

const PowerBiMessaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedPackages, setExpandedPackages] = useState<Record<number, boolean>>({});

  const togglePackage = (index: number) => {
    setExpandedPackages(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const packages = [
    {
      title: "Pakki 1",
      subtitle: "Grunnur og yfirsýn",
      description: "Fyrir fyrirtæki sem vilja byrja rétt og skapa sameiginlegan skilning á Power BI.",
      duration: "6 mánuðir",
      highlights: [
        "Mánaðarleg Power BI Messa (60 mín)",
        "Power BI skýrslusniðmát (Template)",
        "Dynamic Data Catalog yfirlitssíða",
        "SharePoint Þekkingarbanki",
        "Teams / Viva Engage Samráðsvettvangur"
      ],
      details: [
        {
          head: "Mánaðarleg Power BI Messa",
          items: ["Haldið á Teams, einu sinni í mánuði", "Hagnýt fræðsla byggð á raunverulegum verkefnum", "Áhersla á gagnalíkön, measures og bestu lausnir"]
        },
        {
          head: "Power BI skýrslusniðmát",
          items: ["3 tillögur að uppbyggingu skýrslu", "Gervigögn til prófunar og lærdóms", "Skýrt flæði og lesanleiki"]
        },
        {
          head: "Dynamic Data Catalog",
          items: ["Lýsir innihaldi gagnalíkans", "Sýnir töflur, dálka og mælingar", "Fyrir notendur með eingöngu app-aðgang"]
        },
        {
          head: "SharePoint & Teams",
          items: ["Innanhúss svæði fyrir best practices", "Algeng mistök og lausnir uppfært mánaðarlega", "Spurningar og lausnir milli Power BI notenda"]
        }
      ]
    },
    {
      title: "Pakki 2",
      subtitle: "Þekking og virk notkun",
      description: "Fyrir fyrirtæki sem nota Power BI reglulega og vilja efla gæði og samvinnu.",
      duration: "6 mánuðir",
      isPro: true,
      highlights: [
        "Allt innifalið í Pakka 1",
        "Virkjun Power BI samráðsvettvangs",
        "Létt mótun og leiðrétting frá Gobi",
        "Gobi birtir 2 stutt innlegg í mánuði",
        "Yfirferð á raunverulegu Power BI efni"
      ],
      details: [
        {
          head: "Virkjun samráðsvettvangs",
          items: ["2 stutt innlegg í mánuði til að kveikja umræðu", "Hvetja til þekkingarmiðlunar", "Festa vettvanginn í sessi"]
        },
        {
          head: "Létt mótun frá Gobi",
          items: ["Draga fram gagnleg svör", "Leiðrétta villandi eða áhættusamar lausnir", "Tengja umræðu við fræðslu í Messu"]
        },
        {
          head: "Yfirferð á efni",
          items: ["Yfirferð á einu Power BI skjali/líkani á samningstíma", "Ábendingar um DAX, uppbyggingu og performance"]
        }
      ]
    },
    {
      title: "Pakki 3",
      subtitle: "Þroski og sjálfbærni",
      description: "Fyrir fyrirtæki þar sem Power BI er orðið lykilkerfi og ákvarðanir byggja á gögnum.",
      duration: "12 mánuðir",
      highlights: [
        "Allt innifalið í Pakka 2",
        "Power BI rekstraryfirsýn (API)",
        "Stjórnunar- og regluverk (Governance-lite)",
        "Samþætting þekkingar og innsýnar",
        "Sjálfvirk monitoring skýrsla"
      ],
      details: [
        {
          head: "Power BI rekstraryfirsýn",
          items: ["Sjálfvirk monitoring skýrsla", "Sýnir notkun, eignarhald og aðgangsstýringu", "Merki um tæknilega áhættu og ónotuð gögn"]
        },
        {
          head: "Stjórnunar- og regluverk",
          items: ["Beiting best practices út frá raunverulegu umhverfi", "Stutt skrifleg samantekt með áhættum og ráðleggingum", "Forgangsröðun: Hvað skiptir máli og hvað má sleppa"]
        },
        {
          head: "Samþætting þekkingar",
          items: ["Niðurstöður úr monitoring nýttar í Messu og bankann", "Þekking verður skipulögð og endurnýtanleg"]
        }
      ]
    }
  ];

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

      <div className="container mx-auto px-4 py-20 max-w-7xl">
        
        {/* Mission Statement */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gobi-dark mb-6">Markmiðið</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                Að færa Power BI úr því að vera vinnutól afmarkaðs hóps yfir í að verða <span className="text-gobi-primary font-bold">sameiginlegur grundvöllur fyrirtækisins</span> í gagnadrifinni ákvarðanatöku.
            </p>
        </div>

        {/* Pricing / Packages Section */}
        <div className="mb-24">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gobi-dark mb-4">Veldu þinn pakka</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">Við bjóðum upp á þrjár leiðir til að innleiða Power BI menningu, allt eftir þörfum og þroskastigi fyrirtækisins.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {packages.map((pkg, index) => {
                  const isExpanded = expandedPackages[index];
                  return (
                    <div 
                        key={index} 
                        className={`relative bg-white rounded-3xl transition-all duration-300 border flex flex-col
                        ${pkg.isPro 
                            ? 'border-gobi-primary shadow-xl scale-105 z-10' 
                            : 'border-slate-200 shadow-lg hover:shadow-xl'
                        }`}
                    >
                        {pkg.isPro && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gobi-primary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center shadow-md">
                                <Star className="w-3 h-3 mr-1" fill="currentColor" /> Vinsælast
                            </div>
                        )}

                        <div className="p-8 pb-4 flex-grow">
                            <h3 className="text-2xl font-bold text-gobi-dark">{pkg.title}</h3>
                            <p className="text-gobi-primary font-bold text-sm uppercase tracking-wider mb-2">{pkg.subtitle}</p>
                            <p className="text-slate-500 text-sm mb-6 min-h-[40px]">{pkg.description}</p>
                            
                            <div className="inline-block bg-slate-100 rounded-lg px-3 py-1 text-sm font-semibold text-slate-700 mb-6">
                                Lengd: {pkg.duration}
                            </div>

                            <ul className="space-y-4 mb-6">
                                {pkg.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle className={`w-5 h-5 mr-3 shrink-0 ${pkg.isPro ? 'text-gobi-primary' : 'text-gobi-secondary'}`} />
                                        <span className="text-slate-700 text-sm font-medium">{highlight}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Expandable Details */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pt-4 border-t border-slate-100 space-y-6 pb-4">
                                    {pkg.details.map((section, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-bold text-gobi-dark text-sm mb-2">{section.head}</h4>
                                            <ul className="space-y-2 pl-4 border-l-2 border-slate-100">
                                                {section.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="text-slate-600 text-xs leading-relaxed">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-8 pt-0 mt-auto">
                            <button 
                                onClick={() => togglePackage(index)}
                                className="w-full mb-4 flex items-center justify-center text-slate-500 hover:text-gobi-dark text-sm font-medium transition-colors focus:outline-none"
                            >
                                {isExpanded ? (
                                    <>Minna <ChevronUp className="ml-1 w-4 h-4" /></>
                                ) : (
                                    <>Sjá nánar <ChevronDown className="ml-1 w-4 h-4" /></>
                                )}
                            </button>
                            
                            <button className={`w-full py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg
                                ${pkg.isPro 
                                    ? 'bg-gobi-primary hover:bg-orange-600 text-white' 
                                    : 'bg-gobi-dark hover:bg-slate-800 text-white'
                                }`}>
                                Velja {pkg.title}
                            </button>
                        </div>
                    </div>
                  );
                })}
            </div>
        </div>

        {/* What is included grid (Existing content condensed slightly or kept as feature breakdown) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-gobi-light p-10 rounded-3xl border border-gobi-secondary/20 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Calendar className="w-32 h-32 text-gobi-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gobi-dark mb-6 flex items-center">
                    <Calendar className="mr-3 text-gobi-primary" /> Innifalið í öllum pökkum
                </h3>
                <ul className="space-y-4 text-slate-700">
                    <li className="flex items-start">
                        <div className="h-2 w-2 bg-gobi-secondary rounded-full mt-2 mr-3 shrink-0"></div>
                        <span><strong>Mánaðarleg Messa:</strong> 60 mín á Teams með hagnýtri fræðslu.</span>
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
                    <BookOpen className="mr-3 text-gobi-primary" /> Dæmi um efni Messa
                </h3>
                <p className="text-slate-600 mb-4">Stigskipt fræðsla sem aðlagast þörfum:</p>
                <div className="grid grid-cols-1 gap-3">
                    {['Messa fyrir nýja notendur', 'Fyrstu skref í skýrslugerð', 'Framhalds messa', 'Tæknilega afmarkaðar messur (DAX, App arkitektúr)'].map((item, i) => (
                        <div key={i} className="flex items-center p-3 bg-slate-50 rounded-lg">
                             <CheckCircle className="h-4 w-4 text-gobi-secondary mr-3" />
                             <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Why Annual? */}
        <div className="bg-slate-50 rounded-3xl p-12 mb-24">
            <h2 className="text-3xl font-bold text-gobi-dark mb-10 text-center">Af hverju árlegt prógramm?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h4 className="font-bold text-green-600 mb-4 text-xl">Power BI Messa ER:</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center font-medium"><CheckIcon className="mr-3" /> Stöðug uppbygging yfir heilt ár</li>
                        <li className="flex items-center font-medium"><CheckIcon className="mr-3" /> Samræming vinnubragða</li>
                        <li className="flex items-center font-medium"><CheckIcon className="mr-3" /> Vaxandi hæfni og dýpri skilningur</li>
                        <li className="flex items-center font-medium"><CheckIcon className="mr-3" /> Skalanleg lausn sem þróast með fyrirtækinu</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-red-500 mb-4 text-xl">Power BI Messa er EKKI:</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center opacity-70"><XIcon className="mr-3" /> Einstakur fyrirlestur</li>
                        <li className="flex items-center opacity-70"><XIcon className="mr-3" /> Styttra námskeið</li>
                        <li className="flex items-center opacity-70"><XIcon className="mr-3" /> Tilviljanakenndar ráðgjafastundir</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Benefits */}
        <div className="text-center bg-gobi-secondary/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gobi-dark mb-8">Fyrirtækið fær:</h2>
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