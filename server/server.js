const hapi = require('hapi');

const server = new hapi.Server();
server.connection({
  port: 4000,
  host: 'localhost',
});
server.register(require('inert'), (err) => {
  if (err) throw err;
  server.route([{
    path: '/',
    method: 'GET',
    handler: (request, response) => {
      response.file('./index.html');
    },
  }, {
    path: '/public/{file*}',
    method: 'GET',
    handler: {
      directory: {
        path: './public',
        listing: true,
      },
    },
  }, {
    path: '/resources/{file*}',
    method: 'GET',
    handler: {
      directory: {
        path: './resources',
        listing: true,
      },
    },
  }]);
});

server.start(() => {
  console.log(`Server is currently running on: ${server.info.uri}`);
});
