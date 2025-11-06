export interface Member {
  id: number
  name: string
  description: string
  photo?: string
  socials?: {
    facebook?: string
  }
  featured?: boolean
}

export const membersData: Member[] = [
  {
    id: 1,
    name: "Akash",
    description: "MURI KHUR - Always hungry for life and adventure",
    photo:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_1164624662259051-01M5dzNJ1htnvzwAc5mp1fQLS1SEf9.jpeg",
    socials: {
      facebook: "https://www.facebook.com/Ahmedakash.MR.AHMED",
    },
    featured: true,
  },
  {
    id: 2,
    name: "Kashif",
    description: "ALU - Simple, dependable, and always there when needed",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kashif-wXH42J8owcClB60Abd3dqDN7lyu4Uy.jpg",
    socials: {
      facebook: "https://www.facebook.com/kashif.reza.536745",
    },
    featured: true,
  },
  {
    id: 3,
    name: "Maria",
    description: "CONFUSED AFA - Always lost but finding her way with style",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maria-Xypn1C3IlQW9kq3yg1L2YFSx7GpESM.jpeg",
    socials: {
      facebook: "",
    },
    featured: true,
  },
  {
    id: 4,
    name: "Md Ismail",
    description: "GANDO - The creative mind behind the madness",
    photo:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251027-WA0022-JAQ2Y0fq7XRTvslIp1vsxEBNuHbDo8.jpg",
    socials: {
      facebook: "https://www.facebook.com/profile.php?id=61568108246777",
    },
    featured: true,
  },
  {
    id: 5,
    name: "Yousuf",
    description: "BHAATPAGLU - The foodie who thinks with his stomach",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yousuf-7kwjpQMMOkn82M5gZJ9YWZIDRLVRmv.jpeg",
    socials: {
      facebook: "https://www.facebook.com/mdyousufmim",
    },
  },
  {
    id: 6,
    name: "Arif",
    description: "SHOBAR HELPING HAND - The silent hero who helps everyone",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arif-JQmaaNerEQRNb7j1MkFuQ7CloK6bbs.jpeg",
    socials: {
      facebook: "https://www.facebook.com/md.arif.991181",
    },
  },
  {
    id: 7,
    name: "Megha",
    description: "TEACHER - The patient soul who explains everything twice",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Megha-VLFSawbRb6eg3IDw0SSJbk0fg83IU5.jpeg",
    socials: {
      facebook: "",
    },
  },
  {
    id: 8,
    name: "Tuhin",
    description: "SHIYAL - The cool guy with the laid-back charm",
    photo:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_1216787996991871-uaHOFX1wcb3N8FioPNCDWKG6TmPTwm.jpeg",
    socials: {
      facebook: "https://www.facebook.com/kenji03060",
    },
  },
  {
    id: 9,
    name: "Fahim",
    description: "THE GAY - The bright, spirited soul who lights up any room",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fahim-W1F5SgSPOQBNABTdwnuKPFWNTwWZvT.jpeg",
    socials: {
      facebook: "https://www.facebook.com/lorban.fuzeskoh",
    },
  },
  {
    id: 10,
    name: "Mehidy",
    description: "BOLDA CR - The confident leader everyone looks up to",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mehidy-LZnWZurQQtQe5ff5L22fXtTAQB4EXy.jpeg",
    socials: {
      facebook: "https://www.facebook.com/mehidy.hasan.2408",
    },
  },
  {
    id: 11,
    name: "Ononto",
    description: "BHONDOGAYOK - The trickster with a heart of gold",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ononto-GBNuib41lTwaNaxbefewHClWrq6fBl.jpeg",
    socials: {
      facebook: "https://www.facebook.com/tazeno.kaizen",
    },
  },
  {
    id: 12,
    name: "Eash",
    description: "EASH - The mysterious one with untold stories",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eash-b1XdDh7uaN0Xg5ft7piplaMG7Pqn5H.jpeg",
    socials: {
      facebook: "https://www.facebook.com/raiyan.islam.92123",
    },
  },
]

export interface GalleryImage {
  id: number
  title: string
  image: string
  category: string
}

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    title: "Food Sharing Moment",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_1781734712768717-yIuQIGU32Rit9rLWL5jO0GPk8dGI2U.jpeg",
    category: "Memories",
  },
  {
    id: 2,
    title: "Batch Celebration",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_1813283666217844-ZtCwDBcxoNLdJTuKV8Y31R7iXR69X1.jpeg",
    category: "Moments",
  },
  {
    id: 3,
    title: "Formal Batch Photo",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_1279892890559463-7tjrEZp7VQVeVDKyR1niFEHJHawOi1.jpeg",
    category: "Events",
  },
  {
    id: 4,
    title: "Seminar & Workshop",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_1235243628417064-aXhuXFaLSHyEIxvBjs7mNMuuJPHWkP.jpeg",
    category: "Achievements",
  },
  {
    id: 5,
    title: "Sports Event",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_1355110022915376-6rVrmEkXNMC31z8DjMQFrdgupszJnO.jpeg",
    category: "Events",
  },
  {
    id: 6,
    title: "Campus Gathering",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_3608505712637518-t16BbH7MQIVasOW1yBXMt5KR8lPtJL.jpeg",
    category: "Moments",
  },
  {
    id: 7,
    title: "Indoor Group Photo",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_1343079480943411-5kQcPBiWx3E5ClUgFgqwkmk5OeQkXF.jpeg",
    category: "Memories",
  },
  {
    id: 8,
    title: "Casual Outing",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_25404760649142354-B4wYAW3hdhP94Lrn8hkij4LChycsDj.jpeg",
    category: "Moments",
  },
  {
    id: 9,
    title: "Dessert Time",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/received_1610274380413888-YMDnbBdmK94mHOzTv05V4MXG9phhi8.jpeg",
    category: "Memories",
  },
]
