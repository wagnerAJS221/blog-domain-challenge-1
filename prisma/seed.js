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
  const createdProfile = await prisma.profile.create({
    data: {
      profilePic: 'enter Profile pic URL here',
      profileBio: 'profile bio etc',
      user: {
        connect: {
          id: 2
        }
      }
    }
  })

  const createdPost = await prisma.post.create({
    data: {
      postContent: 'this is big ol post!',
      published: true,
      user: {
        connect: {
          id: 1
        }
      }
    }
  })
  const createdComment = await prisma.comment.create({
    data: {
      commentContents: 'this is my comment',
      user: {
        connect: {
          id: 1
        }
      }
    }
  })
  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
