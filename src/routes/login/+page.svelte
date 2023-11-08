<svelte:head>
	<title>Login</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="p-10 space-4">
	<h1 class="pb-5  text-center">Login</h1>

  <div class="card p-4">
    <form method="POST">
      <label class="label m-5">
        <span>Login (Email)</span>
        <input class="input" title="login (email)" type="email" placeholder="john@example.com" autocomplete="email" required/>
      </label>
      <label class="label m-5">
        <span>Mot de passe</span>
        <input class="input" title="Input (password)" type="password" placeholder="password" autocomplete="new-password"  required/>
      </label>
      <div class="flex justify-center items-center">
        <button type="submit" class="btn variant-filled-primary m-5"><a href="../app/">Connexion</a></button>
      </div>
    </form>
  </div>

</div>
