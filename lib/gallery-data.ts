export interface GalleryImage {
  id: number
  title: string
  category: string
  description: string
  image: string
}

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    title: "Batch Photo 2024",
    category: "Group Photos",
    description: "Official batch photo at the university campus",
    image: "/large-group-photo-of-university-students-in-comput.jpg",
  },
  {
    id: 2,
    title: "Graduation Ceremony",
    category: "Milestones",
    description: "Celebrating the completion of our academic journey",
    image: "/graduation-ceremony-celebration-students.jpg",
  },
  {
    id: 3,
    title: "Tech Symposium 2023",
    category: "Events",
    description: "Annual tech symposium showcasing innovative projects",
    image: "/tech-conference-presentation-auditorium.jpg",
  },
  {
    id: 4,
    title: "Hackathon Winners",
    category: "Achievements",
    description: "Our batch winning the inter-college hackathon",
    image: "/hackathon-winning-team-with-trophy.jpg",
  },
  {
    id: 5,
    title: "Campus Life",
    category: "Memories",
    description: "Candid moments from our college days",
    image: "/students-studying-together-on-campus-lawn.jpg",
  },
  {
    id: 6,
    title: "Project Showcase",
    category: "Achievements",
    description: "Displaying final year projects and innovations",
    image: "/students-presenting-software-projects-on-display.jpg",
  },
]
