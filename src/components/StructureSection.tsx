import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ruler, Shield, Leaf, Settings } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Equipamentos Modernos",
    description: "Serraria equipada com maquinário de última geração para cortes precisos e eficientes.",
  },
  {
    icon: Ruler,
    title: "Corte Sob Medida",
    description: "Atendemos pedidos personalizados com dimensões exatas conforme a necessidade do projeto.",
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Rigoroso controle de qualidade em todas as etapas do processo produtivo.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Madeira proveniente de florestas plantadas e manejo sustentável certificado.",
  },
];

const StructureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="estrutura" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Nossa Estrutura
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diferenciais que Fazem a Diferença
          </h2>
          <p className="text-muted-foreground font-body">
            Investimos constantemente em tecnologia e processos para entregar 
            o melhor produto ao nosso cliente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-sm border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-sm bg-forest-light flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
