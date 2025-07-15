function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 text-white bg-gray-800">
      <div className="text-xl font-bold">MySite</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          About
        </a>
        <a href="#" className="hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
