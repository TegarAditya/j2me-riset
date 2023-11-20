export type Categories = 'j2me' | 'emsiklopedia'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
