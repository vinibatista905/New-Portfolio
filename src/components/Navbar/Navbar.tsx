export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-lg">Vinicius.dev</h1>
        <ul className="flex gap-6 text-sm text-muted">
          <li><a href="#about" className="hover:text-primary">Sobre</a></li>
          <li><a href="#skills" className="hover:text-primary">Skills</a></li>
          <li><a href="#projects" className="hover:text-primary">Projetos</a></li>
          <li><a href="#contact" className="hover:text-primary">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}
