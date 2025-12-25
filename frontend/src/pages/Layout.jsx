// import { Link, Outlet, useLocation } from "react-router-dom";

// export default function Layout() {
//   const location = useLocation();

//   return (
//     <div className="h-screen flex">
//       {/* Left Sidebar Navbar */}
//       <div className="w-[20%] bg-gray-800 text-white flex flex-col fixed top-0 left-0 h-full p-6">
//         <h1 className="text-xl font-bold mb-6">🚀 MyApp</h1>

//         <nav className="flex flex-col space-y-3">
//           <Link
//             to="/chat"
//             className={`p-3 rounded ${
//               location.pathname === "/chat"
//                 ? "bg-blue-600 font-semibold"
//                 : "hover:bg-gray-700"
//             }`}
//           >
//             ChatGPT
//           </Link>

//           <Link
//             to="/img2pdf"
//             className={`p-3 rounded ${
//               location.pathname === "/img2pdf"
//                 ? "bg-blue-600 font-semibold"
//                 : "hover:bg-gray-700"
//             }`}
//           >
//             Img → PDF
//           </Link>
//         </nav>
//       </div>

//       {/* Main Content Area (shifted right to make space for navbar) */}
//       <div className="flex-1 ml-56 bg-gray-900 text-white">
//         <Outlet />
//       </div>
//     </div>
//   );
// }
////////////////////////////
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="h-screen flex">
      {/* Navbar (23%) */}
      <div className="w-[23%] bg-gray-800 text-white flex flex-col fixed top-0 left-0 h-full p-6 rounded-r-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-8 text-center">🚀 MyApp</h1>

        <nav className="flex flex-col space-y-4">
          <Link
            to="/chat"
            className={`p-3 rounded-lg text-center transition ${
              location.pathname === "/chat"
                ? "bg-blue-600 font-semibold"
                : "hover:bg-gray-700"
            }`}
          >
            ChatGPT
          </Link>

          <Link
            to="/img2pdf"
            className={`p-3 rounded-lg text-center transition ${
              location.pathname === "/img2pdf"
                ? "bg-blue-600 font-semibold"
                : "hover:bg-gray-700"
            }`}
          >
            Img → PDF
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[23%] bg-gray-900 text-white overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
