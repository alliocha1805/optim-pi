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
	<svelte:fragment slot="pageHeader">		
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
					<a href="/"><button class="btn btn-sm mr-4 ">TEST LOGO
					</button></a>
			</svelte:fragment>
			<div class="hidden lg:block"><strong class="text-xl uppercase">Opti-PI</strong></div>
			
			<svelte:fragment slot="trail">
				<button class="btn btn-sm mr-4 ">TEST LOGIN
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- ---- / ---- -->
	<div class="p-10 space-4 ">
		<h1 class="mb-5 text-center">AgileBalance</h1>
		<div class="w-full card p-4 text-token">
			<a href="/login">TEST</a>
		</div>
	</div>
	
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
