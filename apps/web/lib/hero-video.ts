export interface HeroVideoAsset {
  id: string
  src: string
  poster: string
  title: string
}

export const HERO_VIDEOS: HeroVideoAsset[] = [
  {
    id: 'observe',
    src: '/videos/Observe.mp4',
    poster: '/videos/Observe-poster.jpg',
    title: 'Observe',
  },
  {
    id: 'understand',
    src: '/videos/Understand.mp4',
    poster: '/videos/Understand-poster.jpg',
    title: 'Understand',
  },
  {
    id: 'evolve',
    src: '/videos/Evolve.mp4',
    poster: '/videos/Evolve-poster.jpg',
    title: 'Evolve',
  },
]
