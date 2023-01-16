const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: 'alice', email: 'alice@land.gamilcom' },
      { username: 'aliceM', email: 'alice@wonderland.com' }
    ]
  })

  console.log(`${createdUsers.count} users created`, createdUsers)

  // Add your code here

  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
