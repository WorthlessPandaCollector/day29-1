<script lang="ts">
  import axios from "axios";
  import SubmitUserForm from "./components/SubmitUserForm.svelte"
  import DisplayUsers from "./components/DisplayUsers.svelte";
  import Navbar from "./components/Navbar.svelte"
  import { onMount } from "svelte";
  import getUserList from "./utils/getUserList";
  import { users } from "./store/stores";


  onMount(async function() {
  const result = await axios.get("http://localhost:3002/users")
  users.set(await getUserList())
})
let displayUserList: Boolean = false;
async function changeDisplay() {
  displayUserList = !displayUserList
  users.set(await getUserList())
}




</script>

<main>

<Navbar />


<div class = "flex flex-row justify-center items-center gap-5 my-10">
  <button class="btn" on:click={changeDisplay}>Show User List</button>
</div>

{#if !displayUserList}
<SubmitUserForm />
{:else}
<DisplayUsers />
{/if}



</main>




<style global lang ="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
