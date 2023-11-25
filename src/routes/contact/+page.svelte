<script>
	import { fly } from 'svelte/transition';
	import { bounceInOut } from 'svelte/easing';
	import { Card, Avatar, Button } from 'flowbite-svelte';

	const contacts = [
		{
			name: 'Tegar Aditya',
			job: 'Ketua Divisi Riset',
			picture: 'https://ui-avatars.com/api/?name=Tegar+Aditya',
			linkedin: 'https://www.linkedin.com/in/tegar-aditya-703a3b214/',
			instagram: 'https://www.instagram.com/gar_adiit/'
		},
		{
			name: 'Ade Rifky Setiawan',
			job: 'Staff Divisi Riset',
			picture: 'https://ui-avatars.com/api/?name=Ade+Rifky+Setiawan',
			linkedin: 'https://www.linkedin.com/in/ade-rifky-setiawan-996184290/',
			instagram: 'https://www.instagram.com/adrfstwn_/'
		},
		{
			name: 'Zidan Fathul Hakim',
			job: 'Staff Divisi Riset',
			picture: 'https://ui-avatars.com/api/?name=Zidan+Fathul+Hakim',
			linkedin: 'https://www.linkedin.com/in/zidan-fathul-hakim-317009241/',
			instagram: 'https://www.instagram.com/zidanfathul_/'
		}
	];
</script>

<div class="px-5 py-2 mt-16 md:mt-20 xl:mt-20">
	<div class="my-10 mx-auto text-center text-2xl md:text-5xl font-extrabold text-white px-2 w-fit">
		<h1
			class="-mb-2 bg-orange-500 px-4 py-2 pb-5 w-fit mx-auto"
			in:fly={{ y: -100, easing: bounceInOut }}
		>
			Do You Have Any Question?
		</h1>
		<h2
			class="bg-slate-800 dark:text-slate-800 dark:bg-white px-4 py-2 w-fit mx-auto"
			in:fly={{ y: -100, easing: bounceInOut, delay: 250 }}
		>
			Contact Us!
		</h2>
	</div>
	<div class="mt-16 flex justify-center">
		<div class="grid grid-cols-none md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each contacts as contact}
				<Card padding="sm">
					<div class="flex flex-col items-center pb-4">
						<Avatar size="lg" src={contact.picture} />
						<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{contact.name}</h5>
						<span class="text-sm text-gray-500 dark:text-gray-400">{contact.job}</span>
						<div class="flex mt-4 space-x-3 lg:mt-6">
							<Button href={contact.linkedin} color="blue">LinkedIn</Button>
							<Button href={contact.instagram} color="primary">Instagram</Button>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</div>
</div>
