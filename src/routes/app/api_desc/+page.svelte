<script lang="ts">
import { CodeBlock } from '@skeletonlabs/skeleton';
let apiKey = "168154d6az51";

function showKey() 
  {
		const keyzone = document.querySelector('#zoneBlur');
    const buttonKey = document.querySelector('#buttonKey');
    keyzone.classList.remove("blur-lg");
    console.log(buttonKey);
    buttonKey.remove();
	}
</script>

<svelte:head>
	<title>Utilisation de l'API</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="p-10 space-4">
	<h1 class="pb-5">Clé et utilisation API</h1>

	<p>
		Vous pouvez utiliser en direct la fonction d'optimisation de Pi Planning sans passer par l'interface. Par exemple pour brancher notre solution en direct avec  votre application de gestion de projet interne.
	</p>
  <h2 class="mt-5">Votre clé API</h2>
  <div class="sm:flex flex-col mt-5 xl:flex-row place-content-evenly mt-5">
  <pre class="sm: blur-lg mb-5 w-full xl: blur-lg w-4/5 h-full" id="zoneBlur">{apiKey}</pre> 
  <button type="button" class="btn variant-filled xl: ml-5" on:click={showKey} id="buttonKey">
	<span><svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" /></svg></span>
	<span>Voir la clé</span>
  </button>
  </div>
  <h2 class="mt-5">Documentation de l'API</h2>
  <br/>
  <p>La documentation est disponible à l'adresse suivante : <a href="https://test-api-python-vercel.vercel.app/docs">https://test-api-python-vercel.vercel.app/docs</a> au format SWAGGER(Open API 3)</p>
	<h2 class="mt-5">Fonctionnement de l'API</h2>
  <p>L'API doit être contacté en POST en passant dans les headers votre clé API dans un paramètre <code class="code">api_key</code> et un Body en JSON . Votre clé APi est disponible plus haut sur cette page</p><br/>
  <p>Pour le body de votre requete il est composé de deux éléments :
  </p>
  <ul class="mt-3 mb-5">
    <li>- <code class="code">maxLoad</code> : la charge maximale par équipe en  pourcentage  de la capacité totale : "1" équivaut  à une charge de 100%</li>
    <li>- <code class="code">tasks</code> : une liste de liste contenant les informations de chaque Feature. Chaque feature est une liste sous la forme ["nom feature","valeur feature","charge relative equipe 1","charge relative equipe 2" ...]</li>
  </ul>
  <p>La charge relative d'une equipe sur une feature est simple à  calculer : charge  Feature / Capacité total sur  la période et  sera donc exprimé avec  un nombre à virgule entre 1 et 0</p><br>
  <p>Par exemple pour optimiser un Product Increment Planning avec 2 équipes  , 2 Features et  une charge maximum de 100% le body pourrait ressembler à ceci : </p>
  <CodeBlock class="m-5" language="json" code={`{
    "data": {
      "maxLoad": 1,
      "tasks": [
        [
          "nom Feature 1",
          54,
          0.89,
          1
        ],
        [
          "nom Feature 2",
          65,
          1,
          0.65
        ]
      ]
    }
  }`}></CodeBlock>
</div>
