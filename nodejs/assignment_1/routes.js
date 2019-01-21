
const routes = (req, res) => {
  if(req.url === '/new-user' && req.method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsed = Buffer.concat(body).toString();
      console.log(parsed.split('=').pop());
    })

    return res.end();
  }

  if(req.url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<div>`);
    res.write(`<ul>`);
    res.write(`<li>User 1</li>`);
    res.write(`<li>User 2</li>`);
    res.write(`<li>User 3</li>`);
    res.write(`</ul>`);
    res.write(`</div>`);
  }


  res.setHeader('Content-Type', 'text/html');
  res.write(`<div>`);
  res.write(`<h1>Welcome World!!</h1>`);
  res.write(`</div>`);
  if(req.url === '/') {
    res.write(`<form action="/new-user" method="POST"><input type="text" name="new-user"/><button type="submit">Add user</button></form>`);
  }
  res.end();
}

module.exports = routes;