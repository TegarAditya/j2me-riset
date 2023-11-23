<script lang="ts">
	import { page } from '$app/stores';
	import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { GithubSolid } from 'flowbite-svelte-icons';
	import Logo from '$lib/images/emailkomp.png';

	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="px-2 sm:px-4 py-3 sm:py-2.5 fixed w-full z-20 left-0 border-b top-0">
	<NavBrand href="/">
		<img src={Logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold">Divisi Riset</span>
	</NavBrand>
	<div class="flex items-center ml-auto">
		<a
			class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mx-2"
			href="https://github.com/TegarAditya/j2me-riset"
			target="_blank"
		>
			<GithubSolid />
		</a>
		<DarkMode />
	</div>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
