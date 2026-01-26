import React, { useEffect } from 'react';
import { Tractor, Coffee, pocketKnife , Crown, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Bjarni Salvarsson",
      role: "Gögn",
      email: "bjarni@gobi.is",
      description: "Bjarni er gagnabóndinn okkar frá Vigur. Hann hefur skipt út traktorum fyrir tölvuský og nýtir nú eljusemi bóndans við uppbyggingu vöruhúsa gagna. Hann plægir í gegnum flækjur og sáir fræjum sjálfvirkni svo uppskeran verði sem best.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
      icon: Tractor
    },
    {
      name: "Birgir Þór Svavarsson",
      role: "Skýrslur",
      email: "birgir@gobi.is",
      description: "Birgir er smiður að mennt sem smíðar nú stafrænar lausnir. Hann veit að sterkir innviðir eru forsenda glæsilegrar útkomu. Hann trúir því að góður vinnudagur byrji á rjúkandi kaffibolla og endi á skotheldri skýrslu sem stendur undir væntingum.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      icon: Coffee
    },
    {
      name: "Björn Guðmundsson",
      role: "Hugbúnaður",
      email: "bjorn@gobi.is",
      description: "Björn er svissneski vasahnífurinn okkar. Hann elskar skipulag og hreinleika í kóða jafn mikið og hann elskar gæðasúkkulaði. Hann sér til þess að hugbúnaðurinn okkar gangi eins og svissneskt úr; nákvæmur, áreiðanlegur og án hnökra.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
      icon: pocketKnife
    },
    {
      name: "Guðmundur Jósepsson",
      role: "Framkvæmdastjóri",
      email: "gj@gobi.is",
      description: "Gummi er framkvæmdastjóri og leiðtogi hópsins. Hann er margreyndur stjórnandi sem leysir flókin mál af yfirvegun, oftast með kaffibolla í hendi. Hann sér til þess að stefnan sé rétt og að teymið hafi allt til alls til að skila framúrskarandi árangri.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      icon: Crown
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="relative py-24 bg-gobi-light overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-gobi-dark mb-6">Teymið Okkar</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Við erum fjölbreyttur hópur sérfræðinga með ástríðu fyrir gögnum, tækni og góðu kaffi.
                </p>
            </div>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gobi-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gobi-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Changed grid to 2 columns (md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 max-w-7xl mx-auto">
            {team.map((member, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    
                    {/* Left Side: Profile Info */}
                    <div className="flex flex-col items-center text-center shrink-0 w-full sm:w-48">
                        <div className="relative mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-gobi-primary transition-all duration-300">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-gobi-dark text-white p-2 rounded-full shadow-lg border-2 border-white sm:hidden">
                                <member.icon className="h-4 w-4" />
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gobi-dark mb-1">{member.name}</h3>
                        <div className="text-gobi-primary font-bold uppercase text-xs tracking-wider mb-2">{member.role}</div>
                        <a href={`mailto:${member.email}`} className="text-slate-500 hover:text-gobi-primary text-sm flex items-center transition-colors">
                            <Mail className="h-3 w-3 mr-1" /> {member.email}
                        </a>
                    </div>

                    {/* Right Side: Description */}
                    <div className="flex-1 text-left">
                         <div className="mb-4 text-gobi-secondary hidden sm:block">
                            <member.icon className="h-8 w-8" />
                         </div>
                         <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            {member.description}
                        </p>
                    </div>

                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;