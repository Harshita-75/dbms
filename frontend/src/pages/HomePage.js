// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Modal, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'animate.css';

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [visibleCategory, setVisibleCategory] = useState('all');
//   const [expandedCategories, setExpandedCategories] = useState({});

//   const places = {
//     mountains: [
//       { title: 'Himalayas', image: 'https://www.insidehimalayas.com/wp-content/uploads/2019/03/annapurna2.jpg', description: 'Stunning peaks for trekking.' },
//       { title: 'Alps', image: 'https://wallpaperaccess.com/full/938058.jpg', description: 'Famous for skiing and vistas.' },
//       { title: 'Rockies', image: 'https://cdn.wallpapersafari.com/15/71/f2UrnT.jpg', description: 'Picturesque mountains in North America.' },
//       { title: 'Andes', image: 'https://wallpapercave.com/wp/wp7139682.jpg', description: 'Explore South America’s Andes.' },
//     ],
//     beaches: [
//       { title: 'Maldives', image: 'https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif', description: 'Crystal-clear waters and villas.' },
//       { title: 'Hawaii', image: 'https://wallpapercave.com/wp/wp4087972.jpg', description: 'Golden beaches and volcanic landscapes.' },
//       { title: 'Bora Bora', image: 'https://wallpaperaccess.com/full/2820006.jpg', description: 'Turquoise lagoons and bungalows.' },
//       { title: 'Goa', image: 'https://assets.serenity.co.uk/58000-58999/58779/1296x864.jpg', description: 'Vibrant beaches in India.' },
//     ],
//     temples: [
//       { title: 'Angkor Wat', image: 'https://th.bing.com/th/id/OIP.-1sExsGQglUbJy2Q57c5AAHaE_?rs=1&pid=ImgDetMain', description: 'UNESCO temple complex in Cambodia.' },
//       { title: 'Golden Temple', image: 'https://static.india.com/wp-content/uploads/2020/06/Golden-Temple-Insta.jpg', description: 'Sacred Sikh pilgrimage site.' },
//       { title: 'Borobudur', image: 'https://cdn.audleytravel.com/2531/1808/79/1009708-borobudur-yogyakarta.jpg', description: 'Buddhist temple in Indonesia.' },
//       { title: 'Wat Arun', image: 'https://th.bing.com/th/id/OIP.yauAtjSsabL2OzRcy4TQxAAAAA?rs=1&pid=ImgDetMain', description: 'Famous temple in Bangkok.' },
//     ],
//   };

//   const handleCategoryClick = (category) => setVisibleCategory(category);

//   const handleCardClick = (place) => setSelectedPlace(place);

//   const handleClose = () => setSelectedPlace(null);

//   const handleLoadMore = (category) => setExpandedCategories({ ...expandedCategories, [category]: true });

//   const filteredPlaces = visibleCategory === 'all' ? places : { [visibleCategory]: places[visibleCategory] };

//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="hero-section d-flex justify-content-center align-items-center text-white text-center vh-100"
//         style={{
//           backgroundImage: `url('https://th.bing.com/th/id/R.82e42a92ef8e386f8cdd8a91ea73eaef?rik=hE6OaSFWKRQXog&riu=http%3a%2f%2fwww.wns.com%2fPortals%2f0%2fImages%2fHeaderBanner%2fdesktop%2f1087%2f53%2ftravel_HD.jpg&ehk=YgCzUQ9TIaahPKhlmdx2Tjge2evZU%2fpeb%2bYbaGf0eNQ%3d&risl=&pid=ImgRaw&r=0')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '50px' }}>
//           <h1 className="display-4 animate__animated animate__fadeInDown">Welcome to Travel Agency System</h1>
//           <p className="lead animate__animated animate__fadeInUp mt-3">
//             Manage vehicles, employees, trips, and bookings effortlessly.
//           </p>
//           <div className="mt-4">
//             <button
//               className="btn btn-primary btn-lg me-2 animate__animated animate__zoomIn"
//               onClick={() => navigate('/employee')}
//             >
//               Employee Dashboard
//             </button>
//             <button
//               className="btn btn-outline-light btn-lg animate__animated animate__zoomIn"
//               onClick={() => navigate('/booking')}
//             >
//               Booking Dashboard
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Explore Section */}
//       <section className="destinations-section py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center mb-5">Explore Our Destinations</h2>
//           <div className="categories mb-4 text-center">
//             <button className="btn btn-outline-dark mx-2" onClick={() => handleCategoryClick('all')}>
//               All
//             </button>
//             <button className="btn btn-outline-dark mx-2" onClick={() => handleCategoryClick('mountains')}>
//               Mountains
//             </button>
//             <button className="btn btn-outline-dark mx-2" onClick={() => handleCategoryClick('beaches')}>
//               Beaches
//             </button>
//             <button className="btn btn-outline-dark mx-2" onClick={() => handleCategoryClick('temples')}>
//               Temples
//             </button>
//           </div>
//           {Object.entries(filteredPlaces).map(([category, places]) => (
//             <div key={category}>
//               <h3 className="text-center mt-4 text-capitalize">{category}</h3>
//               <div className="row">
//                 {(expandedCategories[category] ? places : places.slice(0, 2)).map((place, index) => (
//                   <div key={index} className="col-md-6 mb-4">
//                     <div className="card shadow-sm h-100" onClick={() => handleCardClick(place)}>
//                       <img
//                         src={place.image}
//                         className="card-img-top"
//                         alt={place.title}
//                         style={{ height: '200px', objectFit: 'cover' }}
//                       />
//                       <div className="card-body text-center">
//                         <h5 className="card-title">{place.title}</h5>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               {!expandedCategories[category] && places.length > 2 && (
//                 <div className="text-center mt-3">
//                   <button className="btn btn-secondary" onClick={() => handleLoadMore(category)}>
//                     Load More
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//        {/* About Section */}
// //          <section className="about-section py-5 bg-light text-center">
// //    <div className="container">
// //      <h2 className="mb-4">Why Choose Us?</h2>
// //      <p className="text-muted">
// //        Our system helps streamline travel management processes, offering a seamless experience for both customers
// //        and employees.
// //      </p>
// //      <div className="row mt-5">
// //        <div className="col-md-4">
// //          <div className="card shadow-sm h-100">
// //            <img
//             src="https://th.bing.com/th/id/OIP.iyGgG3OtLAYzAyPG29GOhgHaE8?rs=1&pid=ImgDetMain"
//             className="card-img-top"
//             alt="Efficiency"
//             style={{ objectFit: 'cover', height: '250px' }} // Ensures consistent image size
//           />
//           <div className="card-body d-flex flex-column">
//             <h5 className="card-title">Efficient Management</h5>
//             <p className="card-text text-muted">Easily organize trips, employees, and vehicles.</p>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="card shadow-sm h-100">
//           <img
//             src="https://th.bing.com/th/id/OIP.yMdAJa4Wh3btGlW2I02vOQHaE8?rs=1&pid=ImgDetMain"
//             className="card-img-top"
//             alt="Customer Satisfaction"
//             style={{ objectFit: 'cover', height: '250px' }} // Ensures consistent image size
//           />
//           <div className="card-body d-flex flex-column">
//             <h5 className="card-title">Customer Satisfaction</h5>
//             <p className="card-text text-muted">Deliver top-notch service and a memorable experience.</p>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="card shadow-sm h-100">
//           <img
//             src="https://the-cfo.io/wp-content/uploads/2023/09/shutterstock_2332604711-scaled.jpg"
//             className="card-img-top"
//             alt="Cost Effective"
//             style={{ objectFit: 'cover', height: '250px' }} // Ensures consistent image size
//           />
//           <div className="card-body d-flex flex-column">
//             <h5 className="card-title">Cost-Effective</h5>
//             <p className="card-text text-muted">Optimize resources and reduce operational costs.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


//       {/* Modal for Place Details */}
//       {selectedPlace && (
//         <Modal show={true} onHide={handleClose} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>{selectedPlace.title}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <img
//               src={selectedPlace.image}
//               alt={selectedPlace.title}
//               className="img-fluid mb-3"
//               style={{ borderRadius: '10px' }}
//             />
//             <p>{selectedPlace.description}</p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}

//       {/* Footer Section */}
//       <footer className="footer bg-dark text-center text-white py-3">
//         <p className="mb-0">© 2024 Travel Agency System. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';


const HomePage = () => {
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [visibleCategory, setVisibleCategory] = useState('all'); // To track the visible category
  const [expandedCategories, setExpandedCategories] = useState({}); // To track expanded categories

  const places = {
    mountains: [
      { title: 'Himalayas', image: 'https://www.insidehimalayas.com/wp-content/uploads/2019/03/annapurna2.jpg', description: 'Stunning peaks for trekking.' },
      { title: 'Darjeeling', image: 'https://www.holidaymonk.com/wp-content/uploads/2021/07/Darjeeling.jpg', description: 'Famous for skiing and vistas.' },
      { title: 'Shimla', image: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/kufri-1.jpg', description: 'Picturesque mountains in North America.' },
      { title: 'Ooty', image: 'https://th.bing.com/th/id/R.4b511892af03f25af38d7632a4eafe54?rik=84rDE1yeogG4VQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-cz8zCR5RpSU%2fVOAtC7AVnUI%2fAAAAAAAAARY%2fAqLCT2gximg%2fs1600%2fOoty.jpg&ehk=U2gz9Vni3l%2bfmbfRnMe%2bQuujoxDERvuWbgkusZiQPMY%3d&risl=&pid=ImgRaw&r=0', description: 'Explore South America’s Andes.' },
      { title: 'Nainital', image: 'https://1.bp.blogspot.com/-5WtytcU0cV8/Xt-JQJOGffI/AAAAAAAADY8/__4BPVjfI_gW3oautX2GSPW1Dnc7aKZCwCK4BGAsYHg/s1440/Best-Places-to-visit-in-Nainital.jpg', description: 'a wall of blue ice that climbers must navigate en route to the summit.' },
      { title: 'Mount Everest', image: 'https://www.thirdrockadventures.com/assets-back/images/news/Mt._Everest_from_Gokyo_Ri_November_5,_2012.jpgG2Z.jpg', description: 'Explore Everest’s history filled with fascinating tales' },
      { title: 'Saputara', image: 'https://www.tripnomadic.com/wp-content/uploads/2021/03/Saputara.jpg', description: 'sacred by the people of Sikkim' },
      { title: 'Mirik', image: 'https://www.tripnomadic.com/img/place/west-bengal/The-Mirik-tea-garden.jpg', description: ' “Great Black One,” a reference to the mountain’s dark, imposing rock.' },

      { title: ' Manali', image: 'https://www.tripsavvy.com/thmb/amg-yrFsqIZip4Gi5aiTqgP_Fr8=/5000x2813/filters:fill(auto,1)/manali-india-657d891cdec84fee85ac417c22c3bb0d.jpg', description: ' “beginner’s” mountain for high-altitude climbers.' },
      { title: 'Mussoorie', image: 'https://static.toiimg.com/photo/msid-80611280,width-96,height-65.cms', description: ' “White Mountain” in Sanskrit, a fitting tribute to its snow-covered peaks and ridges' },


    ],
    beaches: [
      { title: 'Maldives', image: 'https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif', description: 'Crystal-clear waters and villas.' },
      { title: 'Hawaii', image: 'https://wallpapercave.com/wp/wp4087972.jpg', description: 'Golden beaches and volcanic landscapes.' },
      { title: 'Bora Bora', image: 'https://wallpaperaccess.com/full/2820006.jpg', description: 'Turquoise lagoons and bungalows.' },
      { title: 'Goa', image: 'https://im.whatshot.in/img/2020/Jan/shutterstock-1321441472-cropped-1580207153-1580300957.jpg', description: 'Vibrant beaches in India.' },
      { title: 'As Catedrais Beach – Spain', image: 'https://www.gastrotravelogue.com/wp-content/uploads/2019/12/AS-CATEDRAIS-BEACH.jpg', description: ' the stunning row of giant arches off the cliffs ' },

      { title: ' Hidden Beach – Mexico', image: 'https://scenichunter.com/wp-content/uploads/2021/06/60bc2e2f09987.jpg', description: ' it sits within an open-air crater, which adds to its special and secret feel.' },
      { title: 'Jokulsarlon – Iceland', image: 'https://guidetoiceland.is/image/328799/x/0/the-icebergs-of-joekulsarlon-glacier-lagoon-come-in-a-variety-of-shapes-sizes-and-colours-5.jpg', description: ' ice littering its pebble shores..' },
      { title: 'Glass Beach – California, USA', image: 'https://img.locationscout.net/images/2019-05/glass-beach-usa_l.jpeg', description: ' it’s just as magical to see the multicolored shores of Glass Beach.' },
      { title: 'Pink Sand Beach – Indonesia', image: 'https://hiideemedia.com/wp-content/uploads/2021/11/Komodo-Pink-Beach-Indonesia.jpeg', description: ' the beach owes its color to small grains of red coral mixed into the sand.' },
      { title: ' Koekohe Beach – New Zealand', image: 'https://www.worldbeachguide.com/photos/large/koekohe-beach-new-zealand.jpg', description: 'a collection of huge spherical boulders dotted across its shores.' },

    ],
    temples: [
      { title: 'Angkor Wat', image: 'https://lp-cms-production.imgix.net/2019-06/52727192.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4', description: 'UNESCO temple complex in Cambodia.' },
      { title: 'Golden Temple', image: 'https://th.bing.com/th/id/OIP.jXqs1wdTJay1twMsYFbESQHaFj?rs=1&pid=ImgDetMain', description: 'Sacred Sikh pilgrimage site.' },
      { title: 'Borobudur', image: 'https://cdn.audleytravel.com/2531/1808/79/1009708-borobudur-yogyakarta.jpg', description: 'Buddhist temple in Indonesia.' },
      { title: 'Wat Arun', image: 'https://th.bing.com/th/id/OIP.yauAtjSsabL2OzRcy4TQxAAAAA?rs=1&pid=ImgDetMain', description: 'Famous temple in Bangkok.' },
      { title: ' Wat Rong Khun, Thailand', image: 'https://ergo-reiseblog.de/wp-content/uploads/Wat-Rong-Khun-in-Thailand.jpg', description: 'murals depict swirling orange flames and demon faces' },
      { title: 'Al-Khazneh, Jordan', image: 'http://c8.alamy.com/comp/CX6K65/the-al-khazneh-or-treasury-at-petra-in-jordan-CX6K65.jpg', description: 'The play of light and shadow over The Treasurys columns and sculptures creates an almost ethereal experience.' },
      { title: ' Kinkaku-ji, Japan', image: 'https://i.redd.it/tov8i48aetj11.jpg', description: 'Explore South America’s Andes.' },
      { title: 'Andes', image: 'https://wallpapercave.com/wp/wp7139682.jpg', description: 'Explore South America’s Andes.' },
      { title: 'Andes', image: 'https://wallpapercave.com/wp/wp7139682.jpg', description: 'Explore South America’s Andes.' },
      { title: 'Andes', image: 'https://wallpapercave.com/wp/wp7139682.jpg', description: 'Explore South America’s Andes.' },

    ],
  };

  const handleCategoryClick = (category) => {
    setVisibleCategory(category);
  };

  const handleCardClick = (place) => {
    setSelectedPlace(place);
  };

  const handleClose = () => {
    setSelectedPlace(null);
  };

  const handleLoadMore = (category) => {
    setExpandedCategories({ ...expandedCategories, [category]: true });
  };

  const filteredPlaces = visibleCategory === 'all' ? places : { [visibleCategory]: places[visibleCategory] };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section d-flex justify-content-center align-items-center text-white text-center vh-100"
        style={{
          backgroundImage: `url('https://th.bing.com/th/id/R.82e42a92ef8e386f8cdd8a91ea73eaef?rik=hE6OaSFWKRQXog&riu=http%3a%2f%2fwww.wns.com%2fPortals%2f0%2fImages%2fHeaderBanner%2fdesktop%2f1087%2f53%2ftravel_HD.jpg&ehk=YgCzUQ9TIaahPKhlmdx2Tjge2evZU%2fpeb%2bYbaGf0eNQ%3d&risl=&pid=ImgRaw&r=0')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '50px' }}>
          <h1 className="display-4 animate__animated animate__fadeInDown">Welcome to Travel Agency System</h1>
          <p className="lead animate__animated animate__fadeInUp mt-3">
            Manage vehicles, employees, trips, and bookings effortlessly.
          </p>
          <div className="mt-4">
            <button
              className="btn btn-primary btn-lg me-2 animate__animated animate__zoomIn"
              onClick={() => navigate('/employee')}
            >
              Employee Dashboard
            </button>
            <button
              className="btn btn-outline-light btn-lg animate__animated animate__zoomIn"
              onClick={() => navigate('/booking')}
            >
              Booking Dashboard
            </button>
          </div>
        </div>
      </div>
      <section className="destinations-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Explore Our Destinations</h2>
          <div className="categories mb-4 text-center">
            <button className="btn btn-outline-dark mx-2" onClick={() => handleCategoryClick('all')}>
              All
            </button>
            <button className="btn btn-outline-dark mx-2" onClick={() => handleCategoryClick('mountains')}>
              Mountains
            </button>
            <button className="btn btn-outline-dark mx-2" onClick={() => handleCategoryClick('beaches')}>
              Beaches
            </button>
            <button className="btn btn-outline-dark mx-2" onClick={() => handleCategoryClick('temples')}>
              Temples
            </button>
          </div>
          {Object.entries(filteredPlaces).map(([category, places]) => (
            <div key={category}>
              <h3 className="text-center mt-4 text-capitalize">{category}</h3>
              <div className="row">
                {(expandedCategories[category] ? places : places.slice(0, 2)).map((place, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="card shadow-sm h-100" onClick={() => handleCardClick(place)}>
                      <img
                        src={place.image}
                        className="card-img-top"
                        alt={place.title}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{place.title}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {!expandedCategories[category] && places.length > 2 && (
                <div className="text-center mt-3">
                  <button className="btn btn-secondary" onClick={() => handleLoadMore(category)}>
                    Load More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
  {/* About Section */}
         <section className="about-section py-5 bg-light text-center">
   <div className="container">
     <h2 className="mb-4">Why Choose Us?</h2>
     <p className="text-muted">
       Our system helps streamline travel management processes, offering a seamless experience for both customers
       and employees.
     </p>
     <div className="row mt-5">
       <div className="col-md-4">
         <div className="card shadow-sm h-100">
           <img
            src="https://th.bing.com/th/id/OIP.iyGgG3OtLAYzAyPG29GOhgHaE8?rs=1&pid=ImgDetMain"
            className="card-img-top"
            alt="Efficiency"
            style={{ objectFit: 'cover', height: '250px' }} // Ensures consistent image size
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Efficient Management</h5>
            <p className="card-text text-muted">Easily organize trips, employees, and vehicles.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm h-100">
          <img
            src="https://th.bing.com/th/id/OIP.yMdAJa4Wh3btGlW2I02vOQHaE8?rs=1&pid=ImgDetMain"
            className="card-img-top"
            alt="Customer Satisfaction"
            style={{ objectFit: 'cover', height: '250px' }} // Ensures consistent image size
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Customer Satisfaction</h5>
            <p className="card-text text-muted">Deliver top-notch service and a memorable experience.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm h-100">
          <img
            src="https://the-cfo.io/wp-content/uploads/2023/09/shutterstock_2332604711-scaled.jpg"
            className="card-img-top"
            alt="Cost Effective"
            style={{ objectFit: 'cover', height: '250px' }} // Ensures consistent image size
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Cost-Effective</h5>
            <p className="card-text text-muted">Optimize resources and reduce operational costs.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     

      {/* Modal for Place Details */}
      {selectedPlace && (
        <Modal show={true} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPlace.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedPlace.image}
              alt={selectedPlace.title}
              className="img-fluid mb-3"
              style={{ borderRadius: '10px' }}
            />
            <p>{selectedPlace.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Footer Section */}
      <footer className="footer bg-dark text-center text-white py-3">
        <p className="mb-0">© 2024 Travel Agency System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;


