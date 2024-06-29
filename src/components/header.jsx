export const Header = () => {
  return (
    <header className="flex justify-between py-4">
      <div className="text-2xl font-bold">Synergia.</div>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Events
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-neutral">
              Dashboard
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
