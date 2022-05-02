import { createServer } from "http";
import { URL } from "url";
import countries from "./src/routes/countries";

const server = createServer((req, res) => {
  const { pathname } = new URL(req.url || '', `http://${req.headers.host}`);
  const route = '/' + pathname.split('/')[1];

  switch(route) {
    case '/':
      res.end('Welcome to Covid API');
      break;
    case '/countries':
      countries(req, res);
      break;
    default:
      res.end(`Unhandled routes ${pathname}`)
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
