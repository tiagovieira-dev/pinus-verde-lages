import { TreePine } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TreePine className="w-6 h-6" />
              <span className="font-display font-bold text-lg">Serra do Pinus</span>
            </div>
            <p className="text-accent-foreground/70 text-sm leading-relaxed">
              Madeireira especializada em corte e beneficiamento de pinus, 
              localizada em Lages, Santa Catarina.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              {["Início", "Sobre", "Produtos", "Estrutura", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="block text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-accent-foreground/70">
              <p>Rod. SC-438, Km 12 — Lages, SC</p>
              <p>(49) 3222-0000</p>
              <p>contato@serradopinus.com.br</p>
            </div>
          </div>
        </div>
        <div className="border-t border-accent-foreground/10 pt-6 text-center">
          <p className="text-xs text-accent-foreground/50">
            © {new Date().getFullYear()} Serra do Pinus Madeireira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
