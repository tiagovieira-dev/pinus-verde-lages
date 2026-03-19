import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${formData.nome}. ${formData.mensagem}`;
    window.open(`https://wa.me/5549999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Contato
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground font-body">
            Entre em contato para solicitar orçamentos, tirar dúvidas ou 
            conhecer melhor nossos produtos e serviços.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Endereço", text: "Rod. SC-438, Km 12 — Lages, SC" },
                { icon: Phone, title: "Telefone", text: "(49) 3222-0000 / (49) 99999-9999" },
                { icon: Mail, title: "E-mail", text: "contato@serradopinus.com.br" },
                { icon: Clock, title: "Horário", text: "Seg a Sex: 7h às 17h | Sáb: 7h às 12h" },
              ].map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-forest-light flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">{info.title}</p>
                    <p className="text-muted-foreground text-sm">{info.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-sm overflow-hidden shadow-md aspect-video">
              <iframe
                title="Localização Serra do Pinus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113811.99703517088!2d-50.37!3d-27.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e1a2a5c3e5b0ab%3A0xb3a3e5a6c0f1b1a0!2sLages%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-sm shadow-md space-y-5"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Solicite um Orçamento
            </h3>
            {[
              { name: "nome" as const, label: "Nome Completo", type: "text" },
              { name: "email" as const, label: "E-mail", type: "email" },
              { name: "telefone" as const, label: "Telefone / WhatsApp", type: "tel" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={formData[field.name]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
              <textarea
                rows={4}
                required
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                placeholder="Descreva o tipo e quantidade de madeira que precisa..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide uppercase rounded-sm hover:bg-forest-dark transition-colors"
            >
              Enviar Mensagem via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
