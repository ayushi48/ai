// // // // // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // // // // // import Login from "./pages/Login";
// // // // // // import Signup from "./pages/Signup";
// // // // // // import Chat from "./pages/Chat";

// // // // // // function App() {
// // // // // //   const isAuthenticated = document.cookie.includes("accessToken"); // quick check

// // // // // //   return (
// // // // // //     <Router>
// // // // // //       <Routes>
// // // // // //         <Route path="/" element={isAuthenticated ? <Navigate to="/chat" /> : <Login />} />
// // // // // //         <Route path="/signup" element={<Signup />} />
// // // // // //         <Route path="/chat" element={isAuthenticated ? <Chat /> : <Navigate to="/" />} />
// // // // // //       </Routes>
// // // // // //     </Router>
// // // // // //   );
// // // // // // }

// // // // // // export default App;


// // // // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // // // // import { useEffect, useState } from "react";
// // // // // import axiosClient from "./utils/axioClient";
// // // // // import Login from "./pages/Login";
// // // // // import Signup from "./pages/Signup";
// // // // // import Chat from "./pages/Chat";

// // // // // function App() {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const checkAuth = async () => {
// // // // //       try {
// // // // //         const res = await axiosClient.get("/auth/me");
// // // // //         setUser(res.data);
// // // // //       } catch {
// // // // //         setUser(null);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };
// // // // //     checkAuth();
// // // // //   }, []);

// // // // //   if (loading) {
// // // // //     return <div className="h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>;
// // // // //   }

// // // // //   return (
// // // // //     <Router>
// // // // //       <Routes>
// // // // //         <Route path="/" element={user ? <Navigate to="/chat" /> : <Login setUser={setUser} />} />
// // // // //         <Route path="/signup" element={<Signup />} />
// // // // //         <Route path="/chat" element={user ? <Chat user={user} setUser={setUser} /> : <Navigate to="/" />} />
// // // // //       </Routes>
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // // // export default App;















// // // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // // // import { useEffect, useState } from "react";
// // // // import axiosClient from "./utils/axioClient";
// // // // import Login from "./pages/Login";
// // // // import Signup from "./pages/Signup";
// // // // import Chat from "./pages/Chat";

// // // // function App() {
// // // //   const [user, setUser] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const checkAuth = async () => {
// // // //       try {
// // // //         const res = await axiosClient.get("/auth/me");
// // // //         setUser(res.data);
// // // //       } catch {
// // // //         setUser(null);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };
// // // //     checkAuth();
// // // //   }, []);

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
// // // //         Loading...
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <Router>
// // // //       <Routes>
// // // //         <Route
// // // //           path="/"
// // // //           element={user ? <Navigate to="/chat" /> : <Login setUser={setUser} />}
// // // //         />
// // // //         <Route path="/signup" element={<Signup />} />
// // // //         <Route
// // // //           path="/chat"
// // // //           element={user ? <Chat user={user} /> : <Navigate to="/" />}
// // // //         />
// // // //       </Routes>
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;
// // // //////////////////////////////////////////////////
// // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // // import { useEffect, useState } from "react";
// // // import axiosClient from "./utils/axioClient";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Chat from "./pages/Chat";

// // // function App() {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const checkAuth = async () => {
// // //       try {
// // //         const res = await axiosClient.get("/auth/me");
// // //         setUser(res.data);
// // //       } catch {
// // //         setUser(null);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     checkAuth();
// // //   }, []);

// // //   if (loading) {
// // //     return (
// // //       <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
// // //         Loading...
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route
// // //           path="/"
// // //           element={user ? <Navigate to="/chat" /> : <Login setUser={setUser} />}
// // //         />
// // //         <Route path="/signup" element={<Signup />} />
// // //         <Route
// // //           path="/chat"
// // //           element={user ? <Chat user={user} /> : <Navigate to="/" />}
// // //         />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// // ////////////////////ssssssssssssssssssssssssssssssss///////////////////////////////
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axiosClient from "./utils/axioClient";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Chat from "./pages/Chat";

// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const res = await axiosClient.get("/auth/me");
//         setUser(res.data);
//       } catch {
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     checkAuth();
//   }, []);

//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <Routes>
//         {/* ✅ default root redirects to login if not authenticated */}
//         <Route path="/" element={<Navigate to="/login" />} />

//         {/* ✅ Login route */}
//         <Route
//           path="/login"
//           element={user ? <Navigate to="/chat" /> : <Login setUser={setUser} />}
//         />

//         {/* ✅ Signup route */}
//         <Route
//           path="/signup"
//           element={user ? <Navigate to="/chat" /> : <Signup />}
//         />

//         {/* ✅ Protected Chat route */}
//         <Route
//           path="/chat"
//           element={user ? <Chat user={user} /> : <Navigate to="/login" />}
//         />

//         {/* ✅ catch all unknown routes */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "./utils/axioClient";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import ImgToPDF from "./pages/ImgToPdf"; // new page
import Layout from "./pages/Layout";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axiosClient.get("/auth/me");
        setUser(res.data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth pages */}
        <Route
          path="/login"
          element={user ? <Navigate to="/chat" /> : <Login setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/chat" /> : <Signup />}
        />

        {/* Protected routes with Layout */}
        <Route element={user ? <Layout setUser={setUser} /> : <Navigate to="/login" />}>
          <Route path="/chat" element={<Chat user={user} />} />
          <Route path="/img2pdf" element={<ImgToPDF />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
