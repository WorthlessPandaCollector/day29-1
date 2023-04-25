<script lang="ts">
  import axios from "axios";


  import { selectedUser, users } from "../store/stores";
  import type { User } from "../domain/user";
  import getUserList from "../utils/getUserList";

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
      return user.uuid;

    }

    async function deleteUser(user: User) {
        const result = await axios.delete("http://localhost:3002/deleteuser/"+user.uuid)
        users.set(await getUserList())
    }


  </script>

  <div>
   SELECTED USER: {$selectedUser.username}
  </div>
  <div class="overflow-x-auto justify-center">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th>Username</th> 
            <th>Email</th> 
            <th>UUID</th>
            <th></th>
            <th></th>

          </tr>
        </thead> 
        <tbody>

            {#if $selectedUser}
                {#if displayEditFields}
                <!-- EDIT USER INPUT FIELDS  -->
                <th><input type="text" placeholder={$selectedUser.username} class="input input-bordered w-full max-w-xs" bind:value={$selectedUser.username} /> </th>
                <th><input type="text" placeholder={$selectedUser.email} class="input input-bordered w-full max-w-xs" bind:value={$selectedUser.email}/> </th>
                <td>Cannot change UUID</td>
                <td>
                <!-- SUBMIT EDITS BUTTON  -->
                <button class = "btn" on:click={async () => {
                    openEdits()
                    await submitEdits($selectedUser);
                    users.set(await getUserList())
                }}>
                SUBMIT</button>
                <!-- CANCEL ACTION BUTTON  -->
                <button class = "btn" on:click={async () => {
                    openEdits();
                    users.set(await getUserList())
                }}>
                CANCEL</button>
                <!-- DELETE USER BUTTON -->
                <button class = "btn" on:click={async () => {     
                    openEdits()
                    await deleteUser($selectedUser)       
                }}>
                DELETE USER</button>
                </td>
                {:else}
                <!-- DISPLAY SELECTED USER INFO SCREEN -->
                <th>{$selectedUser.username}</th> 
                <td>{$selectedUser.email}</td> 
                <td>{$selectedUser.uuid}</td>
                
                <td>
                <!-- EDIT BUTTON -->
                <button class = "btn" on:click={async () => {
                    openEdits();
                    console.log({$selectedUser})
                    }}>
                EDIT</button>
                <!-- CLOSE SINGLE USER VIEW BUTTON  -->
                <button class = "btn" on:click={async () => {
                    selectedUser.set(null);
                    users.set(await getUserList())
                    }}>
                CLOSE</button>
                </td>
                {/if}
            {/if}


        </tbody>


        
      <tfoot>
        <tr>
          <th>Username</th> 
          <th>Email</th> 
          <th>UUID</th>
          <th></th>
          <th></th>

        </tr>
      </tfoot>
    </table>
  </div>
  
  
  