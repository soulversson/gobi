import React, { useEffect } from 'react';
import { Database, BarChart3, Code2, Container, Compass, Check } from 'lucide-react';
import { ViewState } from '../types';

interface ServicesPageProps {
  navigateTo: (view: ViewState) => void;
  scrollTarget?: string;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ navigateTo, scrollTarget }) => {
  useEffect(() => {
    if (scrollTarget) {
        setTimeout(() => {
            const element = document.getElementById(scrollTarget);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    } else {
        window.scrollTo(0, 0);
    }
  }, [scrollTarget]);

  const detailedServices = [
    {
      id: "data-warehouse",
      title: "Vöruhús Gagna",
      icon: Database,
      content: (
        <>
          <p className="mb-4">
            Það er algengur misskilningur að það sé nóg að gögn séu til í bókhalds- eða sölukerfum. Þessi kerfi eru hönnuð til að taka við færslum, ekki til að svara flóknum greiningum. Þegar Power BI sækir gögn beint úr mörgum kerfum og reynir að púsla þeim saman í rauntíma verður til flöskuháls. Vöruhús gagna leysir þetta með því að forvinna og auðga gögnin, sem tryggir að skýrslur opnast hratt og allir stjórnendur horfa á sömu samræmdu mælikvörðunum.
          </p>
          <p>
            Vöruhús gagna eykur hagræði verulega með því að draga úr handvirkri vinnu og sjálfvirknivæða gagnaöflun, sem nýtir tíma starfsfólks betur í verðmætasköpun. Þetta er ekki aðeins lausn á núverandi vanda, heldur nauðsynleg fjárfesting í stafrænni framtíð fyrirtækisins. Það myndar grunninn að sjálfvirkni og hagnýtingu nýrrar tækni á borð við gervigreind, sem er ómögulegt að innleiða án góðra gagna.
          </p>
        </>
      ),
      tech: ["Databricks", "Microsoft Fabric", "dbt", "Azure Data Factory", "SQL Server", "Postgresql", "Kimball"]
    },
    {
      id: "reporting",
      title: "Skýrslugerð & Greining",
      icon: BarChart3,
      content: "Við gerum gögn lifandi. Með Power BI smíðum við gagnvirkar mælaborðslausnir sem veita stjórnendum og starfsmönnum innsýn í reksturinn í rauntíma. Við leggjum áherslu á sjálfsafgreiðslu (Self-Service BI) og hönnum skýrslur sem eru ekki bara fallegar, heldur svara lykilspurningum rekstrarins.",
      tech: ["Power BI", "DAX", "Data Visualization", "Self-Service BI", "Governance"],
      linkToMessa: true
    },
    {
      id: "software",
      title: "Hugbúnaðargerð",
      icon: Code2,
      content: "Sérsmíðaður hugbúnaður sem leysir sértæk vandamál. Hvort sem um er að ræða veflausnir, bakenda vinnslu eða samþættingar (API), þá notum við nýjustu tækni til að skila öflugum og viðhaldsvænum lausnum.",
      tech: ["Full-stack þróun", "API hönnun", "Örþjónustur (Microservices)", "React / Node.js"]
    },
    {
      id: "cicd",
      title: "CI/CD & Sjálfvirkni (DevOps)",
      icon: Container,
      content: "Við tryggjum hraða og öryggi í hugbúnaðarþróun með CI/CD (Continuous Integration / Continuous Deployment). Við setjum upp gáma-umhverfi (Containerization) með Docker og stýrum rekstri með Kubernetes, sem tryggir að kerfin þín séu alltaf uppi og auðvelt sé að uppfæra þau.",
      tech: ["Docker", "Kubernetes", "GitHub Actions", "Azure DevOps", "Infrastructure as Code"]
    },
    {
      id: "management-analysis",
      title: "Stjórnun & Greining (Management & FinOps)",
      icon: Compass,
      content: "Við sameinum faglega verkefnastjórnun og ítarlegar kostnaðargreiningar. Við beitum viðurkenndum aðferðafræðum (Agile/Scrum) til að stýra tækniverkefnum árangursríkt. Samhliða því greinum við rekstrarkostnað tækniumhverfis (FinOps), finnum óhagkvæmni í skýjaumhverfi og hjálpum fyrirtækjum að hámarka virði fjárfestinga sinna.",
      tech: ["Agile/Scrum", "Jira", "FinOps", "Cloud Cost Optimization", "ROI Útreikningar"]
    }
  ];

  return (
    <div className="pt-24 pb-12 bg-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-5xl font-bold text-gobi-dark mb-6">Þjónusta</h1>
            <p className="text-xl text-slate-600">
                Ítarleg yfirferð yfir þær lausnir sem við bjóðum upp á til að styrkja stafræna innviði þína.
            </p>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">
            {detailedServices.map((item, index) => (
                <div id={item.id} key={index} className="flex flex-col md:flex-row gap-8 items-start border-b border-gobi-secondary/20 pb-16 last:border-0 scroll-mt-28">
                    <div className="w-full md:w-1/3">
                        <div className="bg-gobi-light p-8 rounded-2xl inline-block mb-4">
                            <item.icon className="h-12 w-12 text-gobi-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-gobi-dark mb-4">{item.title}</h2>
                        {item.linkToMessa && (
                            <button 
                                onClick={() => navigateTo('POWER_BI_MESSA')}
                                className="text-gobi-primary font-bold hover:underline"
                            >
                                Kynntu þér Power BI Messuna &rarr;
                            </button>
                        )}
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="text-lg text-slate-700 leading-relaxed mb-6">
                            {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h4 className="font-bold text-gobi-dark mb-3 uppercase text-sm tracking-wider">Tækni & Aðferðir</h4>
                            <div className="flex flex-wrap gap-2">
                                {item.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 flex items-center">
                                        <Check className="h-3 w-3 mr-1 text-gobi-secondary" /> {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;