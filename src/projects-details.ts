import liqourImgSrc from './images/online-liqour-store.png'
import memoryGameImgSrc from './images/memeory-game.png'

export const projects: ProjectProps[] = [
    {
		title: 'Online Liqour Store',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '+
			'Nulla praesentium saepe ullam necessitatibus quidem magnam. '+
			'Facere expedita, modi quas doloribus amet magnam deserunt consectetur'+
			' dolore et, enim voluptatibus, aut odio.',
		altText: 'online liqour store' ,
		imageSrc: liqourImgSrc,
        liveUrl: 'https://online-liqour-store.vercel.app/',
        sourceUrl: 'https://github.com/GHOST-Aram/online-liqour-store'
    }, {
		title: 'Memory Game',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '+
			'Nulla praesentium saepe ullam necessitatibus quidem magnam. '+
			'Facere expedita, modi quas doloribus amet magnam deserunt consectetur'+
			' dolore et, enim voluptatibus, aut odio.',
		altText: 'online liqour store' ,
		imageSrc: memoryGameImgSrc,
        liveUrl: 'https://memory-game-zi3o.vercel.app/',
        sourceUrl: 'https://github.com/GHOST-Aram/memory-game'
	},
	{
		title: 'Memory Game',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '+
			'Nulla praesentium saepe ullam necessitatibus quidem magnam. '+
			'Facere expedita, modi quas doloribus amet magnam deserunt consectetur'+
			' dolore et, enim voluptatibus, aut odio.',
		altText: 'online liqour store' ,
		imageSrc: memoryGameImgSrc,
        liveUrl: 'https://memory-game-zi3o.vercel.app/',
        sourceUrl: 'https://github.com/GHOST-Aram/memory-game'
	}
]

export interface ProjectProps{
    title: string
    imageSrc: string
    altText: string
    description: string
    liveUrl: string,
    sourceUrl: string
}
