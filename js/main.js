(async() => {
  if ('serviceWorker' in navigator) {
      try {
        const worker = await navigator.serviceWorker.register('./js/sw.js');
        console.log('Service Worker Registered');
      } catch (e) {
        console.log(e.message);
      }
  }
})();
