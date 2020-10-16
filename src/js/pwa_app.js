if('serviceWorker' in navigator){
 
  navigator.serviceWorker.register('src/js/sw.js')
    .then(reg => console.log('service worker registered. GG Backend!! SW SUCCESS.'))
    .catch(err => console.log('service worker not registered;(', err));
}
