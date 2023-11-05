<script  lang="ts">
import { ProgressBar } from '@skeletonlabs/skeleton';
import { ProgressRadial } from '@skeletonlabs/skeleton';
let maxConsumption = 3200;
let consumption = 1235;
let percentConsumtpion = ((consumption/maxConsumption)*100).toFixed(2);
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="p-10 space-4">
	<h1 class="pb-5">Consommation du compte et rappel des couts</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>
	
	<div class="card mt-5">
		<header class="card-header">
			<h2>Consommation du compte ce mois-ci</h2>
		</header>
		<section class="p-4">
			<div class="flex flex-col lg:flex-row">
				<div class="card p-4 m-5">
					<p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
				</div>
				<div class="card p-4 flex flex-col m-5 text-center items-center lg:w-1/3 pt-5">
					<ProgressRadial stroke={160} meter="stroke-primary-500" value={percentConsumtpion}>{percentConsumtpion}% </ProgressRadial>
					<p class="mt-4"><b> {consumption} / {maxConsumption} </b></p>
					<p class="mt-4">Unités de calcul consommées</p>
				</div>
			</div>
		</section>
	</div>
</div>
