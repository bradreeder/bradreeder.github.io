module.exports = [{
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
}];
