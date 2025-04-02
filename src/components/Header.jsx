export default function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-heading">ResumeAI</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="hover:text-accent">
                Features
              </a>
            </li>
            <li>
              <a href="#get-started" className="hover:text-accent">
                Get Started
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
