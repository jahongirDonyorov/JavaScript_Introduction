// uzimiz uchun kichik backend serever yaratib olamiz 
// backend ishlashi uchun bunga ws ni install qilib olishimiz kerak 'npm i ws' buyrug;ini terminalga yozgan holda 
// backend ni ishga tushiramiz terminaldan 

const WebSocket = require('ws');

// server port yaratib olamiz 
let ws = new WebSocket.Server({port: 5501});

ws.on('connection', (w, req) => {
  console.log('New clinet connected'); 

  w.on('close', (w) => {
    console.log('New clinet disconnected')
  })

  w.onmessage = (e) => { // uuser yozgan malumotni qolganlarigaham qushadi
    ws.clients.forEach((client) => {
      client.send(e.data)
    })
  }
});


