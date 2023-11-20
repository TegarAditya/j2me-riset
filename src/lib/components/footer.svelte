<script>
	import { Footer, FooterCopyright, FooterBrand, FooterIcon } from 'flowbite-svelte';
	import { FacebookSolid, LinkedinSolid, TwitterSolid } from 'flowbite-svelte-icons';
	import Instagram from '$lib/icons/instagram.svelte';
	import Logo from '$lib/images/emailkomp.png';

	const socials = [
		{
			title: 'Facebook',
			link: 'https://www.facebook.com/emailkompsvuns/',
			logo: FacebookSolid
		},
        {
			title: 'LinkedIn',
			link: 'https://www.linkedin.com/emailkompsvuns/',
			logo: LinkedinSolid
		},
		{
			title: 'Twitter',
			link: 'https://www.twitter.com/emailkompsvuns/',
			logo: TwitterSolid
		},
        {
			title: 'Instagram',
			link: 'https://www.instagram.com/emailkompsvuns/',
			logo: Instagram
		}
	];
</script>

<Footer footerType="socialmedia">
	<div class="flex items-center justify-center">
		<FooterBrand href="/">
			<img src={Logo} class="mx-3 h-10 sm:h-12" alt="Logo" />
			<span class="pr-2 text-2xl font-light dark:text-white">|</span>
			<p class="font-bold text-3xl px-2 bg-orange-500 font-mono text-white">J2ME</p>
		</FooterBrand>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="flex flex-wrap items-center sm:items-center justify-center sm:justify-between">
		<FooterCopyright href="/" by="Emailkomp" />
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			{#each socials as social}
				<FooterIcon href={social.link}>
                    <div class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svelte:component this={social.logo} />
                    </div>
				</FooterIcon>
			{/each}
		</div>
	</div>
</Footer>
