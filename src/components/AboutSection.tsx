import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import sawmillImg from "@/assets/sawmill-cutting.jpg";
import { TreePine, Award, Truck, Clock } from "lucide-react";

const stats = [
  { icon: TreePine, value: "25+", label: "Anos de Experiência" },
  { icon: Award, value: "100%", label: "Madeira Certificada" },
  { icon: Truck, value: "SC/PR/RS", label: "Área de Atendimento" },
  { icon: Clock, value: "Ágil", label: "Entrega Rápida" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Sobre Nós
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Tradição e Qualidade no<br />Beneficiamento de Pinus
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                A <strong className="text-foreground">Serra do Pinus Madeireira</strong> está localizada em 
                Lages, no coração da Serra Catarinense, região reconhecida nacionalmente pela 
                excelência na produção de madeira de pinus.
              </p>
              <p>
                Com mais de 25 anos de atuação no mercado, somos especialistas no corte, 
                desdobro e beneficiamento de toras de pinus, atendendo às necessidades da 
                construção civil, indústria moveleira, embalagens e construção em geral.
              </p>
              <p>
                Nossa estrutura moderna e equipe qualificada garantem produtos com padrão 
                de qualidade superior, respeitando os prazos e as especificações de cada cliente.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={sawmillImg}
              alt="Serraria cortando tora de pinus"
              className="rounded-sm shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-sm shadow-lg">
              <p className="font-display text-2xl font-bold">+25</p>
              <p className="text-sm text-primary-foreground/80">Anos no Mercado</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
