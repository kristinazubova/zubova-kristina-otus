const axios = require('axios');

async function request(N, isAsync) {
  for (let i = 0; i < N; i++) {
    if (isAsync) {
      axios.get('http://127.0.0.1:3000').then((response) => {
        console.log(i, response.status, isAsync);
      });
    }
    else {
      let response = await axios.get('http://127.0.0.1:3000');
      console.log(i, response.status, isAsync);
    }
  }
}

request(10, true)
request(9, false)