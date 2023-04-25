<script lang="ts">
  import DisplayAllUsers from "./DisplayAllUsers.svelte";
  import { selectedUser } from "../store/stores";
  import DisplaySingleUser from "./DisplaySingleUser.svelte";
 


</script>


<main>

{#if $selectedUser}
<DisplaySingleUser />
{:else}
<DisplayAllUsers />

{/if}
</main>