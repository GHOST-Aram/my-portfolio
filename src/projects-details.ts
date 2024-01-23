import liqourImgSrc from './images/online-liqour-store.png'
import memoryGameImgSrc from './images/memeory-game.png'

export const projects: ProjectProps[] = [
    {
		title: 'Online Liqour Store',
		description: 'Online liquor store is a React based user interface for'+
        ' selling alcoholic beverages on the internet. '+
        'It was debeloped as part of training projects in The Odin Project '+
        'software development curriculumn. The UI has a homepage, a shop page '+
        'for displaying products and a shopping cart page.',
		altText: 'online liqour store' ,
		imageSrc: liqourImgSrc,
        liveUrl: 'https://online-liqour-store.vercel.app/',
        sourceUrl: 'https://github.com/GHOST-Aram/online-liqour-store'
    }, {
		title: 'Memory Game',
		description: 'Memory game is a game based on your ability to remember the images'+
			'that you have interacted with before. The puzzle is made up of 12 images.'+
			'You win if you can remember all the images correctly without clicking the same image'+
			' twice. You loose when you click the same image twice. Give it a try and see how good '+
            'you are at remembering images.',
		altText: 'memory game' ,
		imageSrc: memoryGameImgSrc,
        liveUrl: 'https://memory-game-zi3o.vercel.app/',
        sourceUrl: 'https://github.com/GHOST-Aram/memory-game'
	},
	{
		title: 'Memory Game',
		description: 'Memory game is a game based on your ability to remember the images'+
			'that you have interacted with before. The puzzle is made up of 12 images.'+
			'You win if you can remember all the images correctly without clicking the same image'+
			' twice. You loose when you click the same image twice. Give it a try and see how good '+
            'you are at remembering images.',
		altText: 'memory game' ,
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
