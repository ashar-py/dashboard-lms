// // lib/prisma.js

// const { PrismaClient } = require('@prisma/client');

// let prisma;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient({
//     log: ['query'],
//   });
// } else {
//   // In development, ensure the Prisma client is only created once
//   if (!global.prisma) {
//     global.prisma = new PrismaClient({
//       log: ['query'],
//     });
//   }
//   prisma = global.prisma;
// }

// module.exports = prisma;


// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '@prisma/client'
let prisma = new PrismaClient()

// let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

