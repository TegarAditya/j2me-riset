<script>
	import { BottomNav, BottomNavItem, Tooltip } from 'flowbite-svelte';
	import {
		HomeSolid,
		WalletSolid,
		AdjustmentsVerticalOutline,
		UserCircleSolid,
		PlusSolid
	} from 'flowbite-svelte-icons';
	import { animate } from 'motion';

	function rotate() {
		animate('#plus-button', { transform: 'rotate(45deg)' }, { duration: 0.5 });
	}
</script>

<div class="sm:mx-2">
	<BottomNav position="fixed" navType="application" classInner="grid-cols-5">
		<BottomNavItem btnName="Home" appBtnPosition="left">
			<HomeSolid
				class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
			/>
			<Tooltip arrow={false}>Home</Tooltip>
		</BottomNavItem>
		<BottomNavItem btnName="Wallet" appBtnPosition="middle">
			<WalletSolid
				class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
			/>
			<Tooltip arrow={false}>Wallet</Tooltip>
		</BottomNavItem>
		<div class="flex items-center justify-center">
			<BottomNavItem
				on:click={() => rotate()}
				btnName="Create new item"
				appBtnPosition="middle"
				btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
			>
				<PlusSolid class="text-white" id="plus-button" />
				<Tooltip arrow={false}>Create new item</Tooltip>
			</BottomNavItem>
		</div>
		<BottomNavItem btnName="Settings" appBtnPosition="middle">
			<AdjustmentsVerticalOutline
				class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
			/>
			<Tooltip arrow={false}>Settings</Tooltip>
		</BottomNavItem>
		<BottomNavItem btnName="Profile" appBtnPosition="right">
			<UserCircleSolid
				class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
			/>
			<Tooltip arrow={false}>Profile</Tooltip>
		</BottomNavItem>
	</BottomNav>
</div>
