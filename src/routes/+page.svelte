<script lang="ts">
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '/src/app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Test Opti-PI avec Skeleton UI" />
</svelte:head>

<AppShell>
	<!-- (header) -->
	<!-- (sidebarRight) -->
	<svelte:fragment slot="pageHeader">		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">
				<a href="/"><button class="lgshidden btn btn-sm mr-4 ">TEST LOGO
				</button></a>
		</svelte:fragment>
		<strong class="text-xl uppercase">Opti-PI</strong>
		
		<svelte:fragment slot="trail">
			<button class="lg:hidden btn btn-sm mr-4 ">TEST LOGIN
			</button>
		</svelte:fragment>
	</AppBar></svelte:fragment>
	<!-- ---- / ---- -->
	<div class="p-10 space-4">
		<h1 class="mb-5">Optimiseur de PI</h1>
		<div class="w-full card p-4 text-token">
			<a href="/app">TEST</a>
		</div>
	</div>
	
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
