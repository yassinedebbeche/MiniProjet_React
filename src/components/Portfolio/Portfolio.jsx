// import React from 'react';
// import FetchAPI from '../FetchAPI/FetchAPI'



// const Portfolio = () => {
//   const apiUrl = 'https://api.pexels.com/v1/curated?per_page=6'; // URL de l'API Pexels
//   const apiKey = 'Bearer Bdlo1qWornPryuK1LgcF95Ih4qbvYoFbjkZSZ74Xtk7TdNhIgKHKAU5aw'; // Clé API Pexels

//   return (
//     <div id="portfolio" className="portfolio"> {/* Ajoutez l'identifiant 'portfolio' */}
//       <h2>My Portfolio</h2>
//       <FetchAPI apiUrl={apiUrl} apiKey={apiKey} />
//     </div>
//   );
// };

// export default Portfolio;


import React from 'react';
import FetchAPI from '../FetchAPI/FetchAPI';

const Portfolio = () => {
  const apiUrl = 'https://api.pexels.com/v1/curated?per_page=6';
  const apiKey = 'dlo1qWornPryuK1LgcF95Ih4qbvYoFbjkZSZ74Xtk7TdNhIgKHKAU5aw';

  return (
    <div id="portfolio" className="portfolio">
      <h2>Photography Portfolio</h2>
      <FetchAPI apiUrl={apiUrl} apiKey={apiKey} />
    </div>
  );
};

export default Portfolio;
