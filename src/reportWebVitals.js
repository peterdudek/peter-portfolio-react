const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// [
//   {
//     "id": 0,
//     "name": "Google Books Search",
//     "image": "https://raw.githubusercontent.com/Piotr72us/google-books-search/main/client/public/img/screenshot-gbs.png",
//     "repo": "https://github.com/Piotr72us/google-books-search",
//     "deployed": "https://google-books-peter.herokuapp.com/"
//   },
//   {
//     "id": 1,
//     "name": "Employee Connect",
//     "image": "https://raw.githubusercontent.com/Piotr72us/employee-connect/main/src/img/screen.png",
//     "repo": "https://github.com/Piotr72us/employee-connect",
//     "deployed": "piotr72us.github.io/employee-connect/"
//   },
//   {
//     "id": 2,
//     "name": "Balance Pro 2.0",
//     "image": "https://raw.githubusercontent.com/Piotr72us/budget-tracker/main/public/img/screen.png",
//     "repo": "https://github.com/Piotr72us/budget-tracker",
//     "deployed": "https://budgets-tracker.herokuapp.com/"
//   },
//   {
//     "id": 3,
//     "name": "Fancy Note Taker",
//     "image": "https://raw.githubusercontent.com/Piotr72us/fancy-note-taker/main/public/assets/img/notetaker.png",
//     "repo": "https://github.com/Piotr72us/fancy-note-taker",
//     "deployed": "https://serene-oasis-86335.herokuapp.com/"
//   },
//   {
//     "id": 4,
//     "name": "Weather Station",
//     "image": "https://raw.githubusercontent.com/Piotr72us/weather-station/master/assets/images/Screenshot.png",
//     "repo": "https://github.com/Piotr72us/weather-station",
//     "deployed": "https://piotr72us.github.io/weather-station/index.html"
//   },
//   {
//     "id": 5,
//     "name": "Destination Dashboard",
//     "image": "https://raw.githubusercontent.com/Piotr72us/Destination-Dashboard/master/assets/destinationDemo.gif",
//     "repo": "https://github.com/Piotr72us/Destination-Dashboard",
//     "deployed": "https://piotr72us.github.io/Destination-Dashboard/dashboard.html"
//   },
//   {
//     "id": 6,
//     "name": "Shrewd Investor",
//     "image": "https://raw.githubusercontent.com/Piotr72us/Shrewd-Investor/main/assets/shrewd.png",
//     "repo": "https://github.com/Piotr72us/Shrewd-Investor",
//     "deployed": "https://our-shrewd-investor.herokuapp.com/"
//   },
//   {
//     "id": 7,
//     "name": "Kakeibo 家計簿",
//     "image": "https://raw.githubusercontent.com/Piotr72us/piotr-portfolio/master/assets/images/kakeibo-screen.png",
//     "repo": "https://github.com/Piotr72us/project3",
//     "deployed": "https://kakeibo21.herokuapp.com/"
//   }
// ]
