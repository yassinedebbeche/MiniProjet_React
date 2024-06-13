// import React, { useState, useEffect } from 'react';

// const APIFetcher = ({ apiUrl, apiKey }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl, {
//           headers: {
//             Authorization: apiKey,
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const jsonData = await response.json();
//         setData(jsonData.photos || []); // Assurez-vous que data est un tableau d'objets photos
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [apiUrl, apiKey]);

//   return (
//     <div className="row portfolio-container">
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error.message}</p>
//       ) : (
//         data.map((photo) => (
//           <div key={photo.id} className="col-lg-4 col-md-6 portfolio-item">
//             <div className="portfolio-img">
//               <img src={photo.src.medium} className="img-fluid" alt={photo.photographer} />
//             </div>
//             <div className="portfolio-info">
//               <h4>{photo.photographer}</h4>
//               <p>{photo.photographer_url}</p>
//               <a href={photo.src.original} className="portfolio-lightbox preview-link" title={photo.photographer}>
//                 <i className="bx bx-plus"></i>
//               </a>
//               <a href={photo.photographer_url} className="details-link" title="More Details">
//                 <i className="bx bx-link"></i>
//               </a>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default APIFetcher;


import React, { useState, useEffect } from 'react';

const APIFetcher = ({ apiUrl, apiKey }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}&page=${page}`, {
          headers: {
            Authorization: apiKey,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData((prevData) => [...prevData, ...jsonData.photos]);
        setHasMore(jsonData.photos.length > 0);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, apiKey, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className="row portfolio-container">
        {loading && page === 1 ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          data.map((photo, index) => (
            <div key={`${photo.id}-${index}`} className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-img">
                <img src={photo.src.medium} className="img-fluid" alt={photo.photographer} />
              </div>
              <div className="portfolio-info">
                <h4>{photo.photographer}</h4>
                <p>{photo.photographer_url}</p>
                <a href={photo.src.original} className="portfolio-lightbox preview-link" title={photo.photographer}>
                  <i className="bx bx-plus"></i>
                </a>
                <a href={photo.photographer_url} className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          ))
        )}
      </div>
      {hasMore && (
        <div className="row">
          <div className="col-12 text-center">
            <button onClick={loadMore} className="btn btn-primary">
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default APIFetcher;

