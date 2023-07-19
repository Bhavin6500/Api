

// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Deals = () => {
// //   const [deals, setDeals] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const fetchDealsData = async () => {
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await axios.get('http://localhost:5000/api/deals');
// //       setDeals(response.data.results);
// //     } catch (error) {
// //       setError(error.message);
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div>
// //       <h1>Deals</h1>
// //       <button onClick={fetchDealsData}>Fetch Deals</button>
// //       {loading && <div>Loading...</div>}
// //       {error && <div>Error: {error}</div>}
// //       {deals.length > 0 && (
// //         <ul>
// //           {deals.map(deal => (
// //             <li key={deal.id}>
// //               Deal Name: {deal.properties.dealname}, Amount: {deal.properties.amount}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default Deals;



// import React, { useState } from 'react';
// import axios from 'axios';

// const Deals = () => {
//   const [deals, setDeals] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchDealsData = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get('http://localhost:5000/api/deals');
//       setDeals(response.data.results);
//     } catch (error) {
//       setError(error.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <h1>Deals</h1>
//       <button onClick={fetchDealsData}>Fetch Deals</button>
//       {loading && <div>Loading...</div>}
//       {error && <div>Error: {error}</div>}
//       {deals.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Deal ID</th>
//               <th>Deal Name</th>
//               <th>Amount</th>
//               <th>Create Date</th>
//               <th>Deal Stage</th>
//               <th>Last Modified Date</th>
//               <th>Pipeline</th>
//             </tr>
//           </thead>
//           <tbody>
//             {deals.map(deal => (
//               <tr key={deal.id}>
//                 <td>{deal.id}</td>
//                 <td>{deal.properties.dealname}</td>
//                 <td>{deal.properties.amount}</td>
//                 <td>{deal.properties.createdate}</td>
//                 <td>{deal.properties.dealstage}</td>
//                 <td>{deal.properties.hs_lastmodifieddate}</td>
//                 <td>{deal.properties.pipeline}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Deals;


import React, { useState } from 'react';
import axios from 'axios';

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDealsData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:5000/api/deals');
      setDeals(response.data.results);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Deals</h1>
      <button onClick={fetchDealsData}>Fetch Deals</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {deals.length > 0 && (
        <ul>
          {deals.map(deal => (
            <li key={deal.id}>
              <strong>Deal ID:</strong> {deal.id}<br />
              <strong>Deal Name:</strong> {deal.properties.dealname}<br />
              <strong>Amount:</strong> {deal.properties.amount}<br />
              <strong>Create Date:</strong> {deal.properties.createdate}<br />
              <strong>Deal Stage:</strong> {deal.properties.dealstage}<br />
              <strong>Last Modified Date:</strong> {deal.properties.hs_lastmodifieddate}<br />
              <strong>Pipeline:</strong> {deal.properties.pipeline}<br />
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Deals;
