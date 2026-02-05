import React from 'react';
import { Code2, Database, BarChart3, Container, Users, Compass, ArrowRight } from 'lucide-react';
import { useNavigate } from '../types';
import { SectionId } from '../types';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Vöruhús Gagna",
      description: "Databricks, Fabric og dbt lausnir fyrir nútíma gagnanotkun.",
      icon: Database,
      id: "data-warehouse",
      link: "/thjonusta#data-warehouse"
    },
    {
      title: "Skýrslugerð",
      description: "Lifandi mælaborð og framsetning gagna í Power BI.",
      icon: BarChart3,
      id: "reporting",
      link: "/thjonusta#reporting"
    },
    {
      title: "Power BI Messa",
      description: "Menningarprógramm sem eflir gagnaþekkingu alls fyrirtækisins.",
      icon: Users,
      id: "messa",
      link: "/powerbimessa"
    },
    {
      title: "Hugbúnaðargerð",
      description: "Sérsmíðaðar lausnir sem mæta þínum þörfum.",
      icon: Code2,
      id: "software",
      link: "/thjonusta#software"
    },
    {
      title: "CI/CD & Innleiðing",
      description: "Sjálfvirkni í rekstri með Docker og Kubernetes.",
      icon: Container,
      id: "cicd",
      link: "/thjonusta#cicd"
    },
    {
      title: "Stjórnun & Greining",
      description: "Fagleg verkefnastjórnun og kostnaðargreiningar (FinOps).",
      icon: Compass,
      id: "management-analysis",
      link: "/thjonusta#management-analysis"
    },
  ];

  return (
    <section id={SectionId.SERVICES} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gobi-dark mb-4">Okkar Þjónusta</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Heildarlausnir í gögnum, hugbúnaði og stjórnun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              onClick={() => navigate(service.link)}
              className="p-8 bg-gobi-light rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gobi-secondary/20 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-orange-50 text-gobi-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-gobi-primary group-hover:text-white transition-colors">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gobi-dark mb-3 flex items-center">
                {service.title} <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
            <button 
                onClick={() => navigate('/thjonusta')}
                className="inline-flex items-center text-gobi-primary font-bold text-lg hover:text-gobi-dark transition-colors"
            >
                Lesa nánar um þjónustu <ArrowRight className="ml-2 h-5 w-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Services;