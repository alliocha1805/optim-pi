<script lang="ts">
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import { TabGroup, Tab} from '@skeletonlabs/skeleton';
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	let maxLoadPercent=100;
	let maxLoad=maxLoadPercent/100;
	let numberTeam=1;
	let numFeature=1;
	let resultat = {}
	let tableData = [];
	let tableDataClean = [];

	let visibleResult = false;
	let resultReceived = false;

	
	async function optimize(data){
		const res = await fetch('/api/optimize', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-Key': 'poneychoucroute',
			},
			body: JSON.stringify(data),
			})
		
		const json = await res.json()
		if(res.ok){
			resultat = JSON.stringify(json);
		}
		else{
			console.log(json)
		}
		
	}

	function delay(ms: number) {
			return new Promise( resolve => setTimeout(resolve, ms) );
	}

	const backStepper = () =>  {
		visibleResult=false;
	}

	const collectAndCleanCellValues = () => {
			tableData = [];
			const table = document.querySelector('.table');

			if (table) {
					const rows = table.querySelectorAll('tbody tr');
					rows.forEach(row => {
							const rowData = [];
							const cells = row.querySelectorAll('td input');
							cells.forEach(cell => {
									rowData.push(cell.value);
							});
							tableData.push(rowData);
					});

					// Clean the data based on your rule
					tableDataClean = tableData.map(row => {
							return row.map((value, index) => {
									if (index < 2) {
											return value; // Don't divide the first two values
									} else {
											return value / 100; // Divide other values by 100
									}
							});
					});
					visibleResult=true;
					console.log(tableDataClean);
					optimize(tableDataClean);
			}
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Test Dashboard KOnsult.io avec Skeleton UI" />
</svelte:head>

<div class="p-10 space-4">
	<h1 class="mb-5">Optimiseur de PI</h1>
	<div class="w-full card p-4 text-token">
		<Stepper on:complete={collectAndCleanCellValues} on:back={backStepper}>
		<Step>
			<svelte:fragment slot="header">Parametrage</svelte:fragment>
			<label class="label">
				<span>Charge Maximum de chaque équipe (en pourcentage avec un max de 110%)</span>
				<input class="input remove-arrow" title="Input (number)" type="number" bind:value={maxLoadPercent} max="110"/>
			</label>
			<label class="label">
				<span>Nombre d'équipes dans le Product Increment</span>
				<input class="input remove-arrow" title="Input (number)" type="number" bind:value={numberTeam} max="25"/>
			</label>
			<label class="label">
				<span>Nombre de fonctionnalités dans le Product Increment</span>
				<input class="input remove-arrow" title="Input (number)" type="number" bind:value={numFeature} max="25"/>
			</label>			
		</Step>
		<Step>
			<svelte:fragment slot="header">Features</svelte:fragment>
			<div class="table-container">
				<!-- Native Table Element -->
				<table class="table table-hover">
					<thead>
						<tr>
							<th class="text-center">Nom feature</th>
							<th class="text-center">Valeur métier</th>
							{#each Array(numberTeam) as _, index}
							<th class="text-center">Charge équipe {index + 1} (en %)</th>
							{/each}
						</tr>
					</thead>
					<tbody>
							{#each Array(numFeature) as _, index}
							<tr>
								<td><input class="input remove-arrow" id="nomFeature" type="text"/></td>
								<td><input class="input remove-arrow" type="number" min=0/></td>
								{#each Array(numberTeam) as _, index}
								<td><input class="input remove-arrow" type="number" min=0 max=100/></td>
								{/each}
							</tr>
							{/each}
					</tbody>
				</table>
			</div>
		</Step>
		</Stepper>
	</div>
	{#if visibleResult}
		{resultat}
		{#if resultReceived}
		<p>prout</p>
		{/if}
		<section class="card w-full mt-5">
			<div class="p-4 space-y-4">
				<div class="placeholder animate-pulse" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder animate-pulse" />
					<div class="placeholder animate-pulse" />
					<div class="placeholder animate-pulse" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder animate-pulse" />
					<div class="placeholder animate-pulse" />
					<div class="placeholder animate-pulse" />
					<div class="placeholder animate-pulse" />
				</div>
			</div>
		</section>
	{/if}
</div>

<style>

</style>
