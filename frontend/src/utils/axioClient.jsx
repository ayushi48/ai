// // // import axios from "axios";

// // // const axiosClient = axios.create({
// // //   baseURL: "http://localhost:5000/api",
// // //   withCredentials: true, // send cookies
// // // });

// // // export default axiosClient;





// // import axios from "axios";

// // const axiosClient = axios.create({
// //   baseURL: "http://localhost:5000/api",
// //   withCredentials: true, // ✅ important for cookies
// // });

// // export default axiosClient;





// //////////////////////////////////////////////////////
// import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true, // ✅ important for cookies
// });

// export default axiosClient;
/////////////sssssssssssssssssssss//////////////////////
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,   // 🔑 ensures cookies (accessToken) are sent
});

export default axiosClient;
