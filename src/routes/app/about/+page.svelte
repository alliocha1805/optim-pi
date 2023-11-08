<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>
<svelte:head>
	<title>Fonctionnement de l'outil</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="p-10 space-4">
	<h1 class="pb-5">Fonctionnement</h1>
	<Accordion>
		<AccordionItem open>
			<svelte:fragment slot="lead">
				<svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
				  </svg>
			</svelte:fragment>
			<svelte:fragment slot="summary">
				<h2>A quoi sert Opti-PI ?</h2>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla nisi sit amet odio posuere rhoncus. Mauris vel magna molestie, malesuada nibh vel, placerat augue. Suspendisse pretium aliquet nunc. Praesent eleifend, diam eu tristique luctus, risus mi sollicitudin diam, tempus auctor orci leo vel magna. Integer at lacus sed nisl ultrices laoreet vitae vel magna. Mauris auctor pharetra purus, sit amet convallis arcu tristique eu. Vestibulum euismod pulvinar massa eget ultricies. Nunc dictum nec sapien sit amet blandit. Vestibulum finibus tellus at bibendum mattis. Aliquam erat volutpat. Fusce eleifend sagittis ante id pulvinar. Donec vulputate accumsan urna, vel mattis felis vulputate eu. Pellentesque ut sem convallis, tempor nisi sit amet, vulputate mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc maximus aliquam hendrerit. Sed laoreet faucibus euismod. </p>	
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<svelte:fragment slot="summary">(summary)</svelte:fragment>
			<svelte:fragment slot="content">(content)</svelte:fragment>
		</AccordionItem>
	</Accordion>
	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>
</div>
