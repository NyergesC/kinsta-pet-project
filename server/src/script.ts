// 1
 const { PrismaClient } = require("@prisma/client") 
/* import { PrismaClient } from "@prisma/client" */

// 2
const prisma = new PrismaClient()

// 3
async function main() {
const newTrip = await prisma.trip.create({
    data: {
        destination:"Pluto",
        description:"it has a big heart",
        distance: "7.5 billion kilometers",
        duration:"7 years",
        src:"img",
        alt:"Pluto"
    },
    })
  const allTrips = await prisma.trip.findMany()
  console.log(allTrips)

  const users = await prisma.user.findMany()
  

}

// 4
main()
  .catch(e => {
    console.log(e.message)
  })
// 5
  .finally(async () => {
    await prisma.$disconnect()
  })