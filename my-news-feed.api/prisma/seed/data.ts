import { Prisma } from '@prisma/client'

export const userData: Prisma.UserCreateInput[] = [
  {
    email: 'admin01@gmail.com',
    news: {
      create: [
        {
          title: 'Title 01',
          content: "I'm a content 01",
        },
        {
          title: 'Title 02',
          content: "I'm a content 02",
        },
        {
          title: 'Title 03',
          content: "I'm a content 03",
        },
        {
          title: 'Title 04',
          content: "I'm a content 04",
        },
      ],
    },
  },
  {
    email: 'admin02@gmail.com',
    news: {
      create: [
        {
          title: 'Title 05',
          content: "I'm a content 05",
        },
        {
          title: 'Title 06',
          content: "I'm a content 06",
        },
        {
          title: 'Title 07',
          content: "I'm a content 07",
        },
        {
          title: 'Title 08',
          content: "I'm a content 08",
        },
        {
          title: 'Title 09',
          content: "I'm a content 09",
        },
        {
          title: 'Title 10',
          content: "I'm a content 10",
        },
      ],
    },
  },
];