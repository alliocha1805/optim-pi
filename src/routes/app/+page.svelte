<script lang="ts">
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	let maxLoadPercent=100;
	let maxLoad=maxLoadPercent/100;
	let numberTeam=2;
	let numFeature=2;
	let resultat = {}
	let tableData = [];
	let tableDataClean = [];

	let visibleResult = false;
	let resultReceived = false;

	
	async function optimize(dataClean) {
		// Use the environment variables for API URL and API key
		const apiUrl = "https://test-api-python-vercel.vercel.app/optimize/";
		const apiKey = "poneychoucroute";
		const requestData = {
			"data": {
			'maxLoad': maxLoad, // Add the maxLoad value here
			'tasks': dataClean,      // Use the data from the function parameter
			},
		};
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			'X-API-Key': apiKey,
			},
			body: JSON.stringify(requestData),
		});

		console.log("reponse");
		console.log(response);

		if (response.ok) {
			const json = await response.json();
			console.log(json);
			//resultat = JSON.stringify(json);
			resultat = json
			console.log(resultat);
			resultReceived = true;
		} else {
			const json = await response.json(); // Parse error response
			console.log(json);
		}
	}

	const backStepper = () =>  {
		visibleResult=false;
		resultReceived=false;
	}

	const collectAndCleanCellValues = () => {
			tableData = [];
			const table = document.querySelector('.table');

			if (table) {
					const rows = table.querySelectorAll('tbody tr');
					rows.forEach(row => {
							const rowData = [];
							const cells = row.querySelectorAll('td input');
							cells.forEach((cell, index) => {
								if (index === 1) {
									// Convert the second value to a float
									rowData.push(parseFloat(cell.value));
								} else {
									rowData.push(cell.value);
								}
							});
							tableData.push(rowData);
					});

					// Clean the data based on your rule
					tableDataClean = tableData.map(row => {
							return row.map((value, index) => {
									if (index < 2) {
											return value;
									 // Don't divide the first two values
									}
									else {
											return value / 100; // Divide other values by 100
									}
							});
					});
					visibleResult=true;
					optimize(tableDataClean);
			}
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Test Opti-PI avec Skeleton UI" />
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
	{#if !resultReceived}
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
	{/if}
	{#if resultReceived}
		{#if resultat}
		<div class="card p-4 mt-5">
			<p> Valeur maximale pouvant être délivrée :{JSON.parse(resultat.ValeurTotale)} </p><br/>
			<p> Features à prioriser</p>
			<ul class="list">
			{#each Object.entries(resultat.Feature) as [nom, statut]}
			<li>
				{#if statut == false}
				<span><svg class="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
				  </svg>
				  </span>
				{/if}
				{#if statut == true}
				<span><svg class="h-8 w-8 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
				  </svg>
				  </span>
				{/if}
				<span class="flex-auto">{nom}</span>
			</li>
			{/each}
			</ul><br/>
			<p> Charge equipe</p>
			<ul class="list">
			{#each Object.entries(resultat.ChargeEquipes) as [nom, valeur]}
			<li>
				<span>{nom}</span>
				<span class="flex-auto">{valeur}</span>
			</li>
			{/each}
			</ul>
		</div>
		{/if}
	

	{/if}
</div>

<style>

</style>
