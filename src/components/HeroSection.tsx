import heroImg from "@/assets/hero-forest.jpg";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Plantação de pinus na Serra Catarinense"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest-dark/50 to-forest-dark/80" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-primary-foreground/70 text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Lages · Santa Catarina
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Qualidade em Madeira<br />
            <span className="text-primary-foreground/80">de Pinus</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light">
            Especialistas no corte e beneficiamento de pinus, fornecendo madeira 
            de alta qualidade para construção civil, indústria e comércio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide uppercase rounded-sm hover:bg-forest-dark transition-colors"
            >
              Solicite um Orçamento
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-medium text-sm tracking-wide uppercase rounded-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Conheça a Empresa
            </a>
          </div>
        </motion.div>
      </div>

      <a href="#sobre" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce">
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
