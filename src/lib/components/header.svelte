<script lang="ts">
	import { page } from '$app/stores';
	import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import Logo from '$lib/images/emailkomp.png';

	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="px-2 sm:px-4 py-3 sm:py-2.5 fixed w-full z-20 left-0 border-b top-0">
	<NavBrand href="/">
		<img src={Logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold">Divisi Riset</span>
	</NavBrand>
	<DarkMode class="ml-auto" />
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
