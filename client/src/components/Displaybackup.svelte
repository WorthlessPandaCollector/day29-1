<script lang="ts">
    import axios from "axios";
    import { users } from "../store/stores"
    import type { User } from "../domain/user";
  
  
  
  
    let displayEditFields: boolean = false;
    function openEdits(){
      displayEditFields = !displayEditFields
    }
  
  
  
    async function submitEdits(user: User) {
      const result = await axios.put("http://localhost:3002/users/"+user.uuid,
      {
        email: user.email,
        username: user.username
      })
    }
  </script>
  
  
  
  <div class="overflow-x-auto justify-center">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th>Username</th> 
            <th>Email</th> 
            <th></th>
          </tr>
        </thead> 
        {#each $users as user}
        <tbody>
          <tr>
            {#if displayEditFields}
            <th><input type="text" placeholder={user.username} class="input w-full max-w-xs" bind:value={user.username} /> </th>
            <th><input type="text" placeholder={user.email} class="input w-full max-w-xs" bind:value={user.email}/> </th>
            <td><button class = "btn" on:click={async () => {
              openEdits()
              await submitEdits(user);
            }}>submit</button></td>
            {:else}
            <th>{user.username}</th> 
            <td>{user.email}</td> 
  
            <td><button class = "btn" on:click={async () => {
              openEdits();
              console.log({user})
              
              }}>edit</button></td>
            {/if}
          </tr>
      </tbody> 
      {/each}
      <tfoot>
        <tr>
          <th>Username</th> 
          <th>Email</th> 
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
  