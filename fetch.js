const https = require('https');
https.get('https://unsplash.com/s/photos/mexican-engineer', (res) => {
  let d = '';
  res.on('data', c => d+=c);
  res.on('end', () => {
    const matches = d.match(/\"id\":\"([a-zA-Z0-9_\-]{11})\"/g);
    if (matches) {
       console.log([...new Set(matches.map(m => m.slice(6, 17)))].slice(0, 10));
    } else { console.log('no match'); }
  });
});
