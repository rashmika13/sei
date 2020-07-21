export function getCurrentLatLng() {
  return new Promise((resolve, reject) => {
    const successCallback = function (pos) {
      resolve({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    };

    const errorCallback = function (err) {
      reject(err);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });
}

// export function getCurrentLatLng(cb) {
//   navigator.geolocation.getCurrentPosition(function (pos) {
//     cb({
//       lat: pos.coords.latitude,
//       lng: pos.coords.longitude,
//     })
//   }, function (err) {
//     // do something with error
//   });
// }
