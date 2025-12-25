import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-52 bg-gray-800 text-white p-6">
      <h1 className="text-xl font-bold mb-8">AI Tools</h1>
      <nav className="space-y-4">
        <Link to="/" className="block hover:text-blue-400">ChatGPT</Link>
        <Link to="/img-to-pdf" className="block hover:text-blue-400">Img → PDF</Link>
      </nav>
    </div>
  );
}
