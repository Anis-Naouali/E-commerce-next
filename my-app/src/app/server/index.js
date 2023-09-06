const next = require('next');
const server = next({
  dev: false,
  dir: './',
});
server.listen(3000, (err) => {
  if (err) throw err;
  console.log('> Ready on http://localhost:3000');
});
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()