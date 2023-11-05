<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	function drawerOpen() 
  {
		drawerStore.open({});
	}
	const popupMenu: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupMenu',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
};
</script>

<!-- App Shell -->
<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="pageHeader">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
					<button class="lg:hidden btn btn-sm mr-4 " on:click={drawerOpen}>
							<span>
									<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
											<rect width="100" height="20" />
											<rect y="30" width="100" height="20" />
											<rect y="60" width="100" height="20" />
									</svg>
							</span>
					</button>
			</svelte:fragment>
			<strong class="text-xl uppercase">Opti-PI</strong>
			
			<svelte:fragment slot="trail">
			<div class="">
				<button type="button" class="btn-icon btn-icon-xl variant-primary" use:popup={popupMenu}><svg class="h-10 w-10 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6-6a6 6 0 0 1 -8 -8l3.5 3.5" /></svg></button>
				<div class="card p-4 shadow-xl" data-popup="popupMenu">
				<div class="btn-group-vertical">
					<button type="button" class="btn variant-filled-secondary mb-2">
						<span>
							<svg class="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
						</span>
						<span>Mon compte</span>
					</button>
					<button type="button" class="btn variant-filled-secondary mb-2">
						<span><svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
						</svg>
						</span>
						<span>Deconnexion</span>
					</button>
				</div>

				<div class="arrow bg-surface-100-800-token" />
				</div>
			</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>



	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<div class="bg-surface-100-800-token  space-y-4 p-4 text-center">OPTI-PI TradeMark Piloy de la société Piloy</div>
	</svelte:fragment>
	<!--<svelte:fragment slot="footer">
		<div class="bg-surface-100-800-token  space-y-4 p-4">Footer Extérieur</div>
	</svelte:fragment>-->
</AppShell>
