module.exports = [{
  path: '/',
  method: 'GET',
  handler: (request, response) => {
    response.file('./public/index.html');
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
}];
