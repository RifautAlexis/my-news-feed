import { PrismaClient } from '@prisma/client'
import { userData } from './data'

const prisma = new PrismaClient()

async function load() {
  try {
    console.log(`Start seeding ...`)

    await prisma.user.deleteMany()
    console.log('Deleted records in user table')

    await prisma.news.deleteMany()
    console.log('Deleted records in news table')

    userData.forEach(async element => {
      await prisma.user.create({
        data: element,
      })
    });
    console.log('Added user data and related news data')

    console.log(`Seeding finished.`)
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
