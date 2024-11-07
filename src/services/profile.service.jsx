// // src/App.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const getProfile = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // URL API dan Token
//   const API_URL = "https://take-home-test-api.nutech-integrasi.com/profile"; // Ganti dengan URL API sebenarnya
//   const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbnV0ZWNoLWludGVncmFzaS5jb20iLCJtZW1iZXJDb2RlIjoiTExLUjZKTDEiLCJpYXQiOjE3MzA5NzMzODQsImV4cCI6MTczMTAxNjU4NH0.gRtGqNKQ8uLmOSuN-fsHfy_IgitGgxqjrkxoSQn5cf0"; // Ganti dengan token yang valid

//   useEffect(() => {
//     // Fungsi untuk mengambil data dari API
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(API_URL, {
//           headers: {
//             Authorization: `Bearer ${TOKEN}`,
//           },
//         });
//         setData(response.data); // Simpan data ke state
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // return (
//   //   <div>
//   //     <h1>Data dari API</h1>
//   //     <ul>
//   //       {data.map((item, index) => (
//   //         <li key={index}>{item.email}</li> // Sesuaikan dengan struktur data API
//   //       ))}
//   //     </ul>
//   //   </div>
//   // );
// }

// export default getProfile

import axios from "axios";
import { useEffect, useState } from "react";

export const getProfile = () => {
  const url = "https://take-home-test-api.nutech-integrasi.com/registration";
  const [email, setEmail] = useState([]);

  const getProfile = async () => {
    const response = await fetch(url);
    const dataEmail = await response.json();
    setEmail(dataEmail);
    console.log(email);
  }

  
}