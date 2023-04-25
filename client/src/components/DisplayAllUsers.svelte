<script lang="ts">

  import { selectedUser, users } from "../store/stores"
  import getSingleUser from "../utils/getSingleUser";
  
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
            <th>{user.username}</th> 
            <td>{user.email}</td> 
  
            <td>

            <button class = "btn" on:click={async () => {
              selectedUser.set(await getSingleUser(user));
              }}>info</button>  
            </td>

      
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
  