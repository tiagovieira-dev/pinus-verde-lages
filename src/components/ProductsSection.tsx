import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import lumberImg from "@/assets/lumber-stack.jpg";
import productsImg from "@/assets/products.jpg";
import sawmillImg from "@/assets/sawmill-cutting.jpg";

const products = [
  {
    title: "Tábuas e Pranchas",
    description: "Tábuas e pranchas de pinus em diversas dimensões, ideais para construção civil, forros e revestimentos.",
    image: lumberImg,
  },
  {
    title: "Caibros e Vigas",
    description: "Peças estruturais de pinus com precisão dimensional para telhados, estruturas e construções diversas.",
    image: productsImg,
  },
  {
    title: "Madeira Bruta e Serrada",
    description: "Corte sob medida de toras de pinus, atendendo especificações técnicas do seu projeto.",
    image: sawmillImg,
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="produtos" className="py-24 bg-secondary">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Nossos Produtos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Madeira de Pinus para Todos os Fins
          </h2>
          <p className="text-muted-foreground font-body">
            Trabalhamos com diversas linhas de produtos em pinus, sempre com foco 
            na qualidade e no atendimento às necessidades do cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
