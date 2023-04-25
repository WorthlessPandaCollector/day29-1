<script lang="ts">
import axios from "axios"
  import getUserList from "../utils/getUserList";
  import { users } from "../store/stores";


let email: string = "";
let username: string = "";

async function submitForm() {
  const result = await axios.post("http://localhost:3002/adduser", {
    username: username,
    email: email
  });
  users.set(await getUserList())
  console.log(result)
}


</script>



<div class="flex flex-row justify-center items-center gap-5 my-10">
  <div class="form-control">

    <label class="input-group">
        <label class="input-group">
        <span>Email<svg width="32px" height="32px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M168 667.2h196.2v292.9H168z" fill="#0071CE"></path><path d="M168 667.2h196.2v200.6H168z" fill=""></path><path d="M660.8 667.2H857v292.9H660.8z" fill="#0071CE"></path><path d="M660.8 667.2H857v200.6H660.8z" fill=""></path><path d="M857 812V208c0-80.9-66.2-147.1-147.1-147.1H315.2c-81 0-147.2 66.2-147.2 147.1v604h689z" fill="#0071CE"></path><path d="M709.9 60.9H315.2c-81 0-147.2 66.2-147.2 147.1v188.4h689V208c0-80.9-66.2-147.1-147.1-147.1z" fill="#00B3E3"></path><path d="M740.7 486.7c0-16.2-13.3-29.5-29.5-29.5H313.9c-16.2 0-29.5 13.3-29.5 29.5v223c0 16.2 13.3 29.5 29.5 29.5h397.3c16.2 0 29.5-13.3 29.5-29.5v-223zM705.4 175.6c0-16.2-13.3-29.5-29.5-29.5H349.1c-16.2 0-29.5 13.3-29.5 29.5v130c0 16.2 13.3 29.5 29.5 29.5h326.8c16.2 0 29.5-13.3 29.5-29.5v-130z" fill=""></path><path d="M591.8 235.9H433.2c-8 0-14.6-6.5-14.6-14.6s6.5-14.6 14.6-14.6h158.6c8 0 14.6 6.5 14.6 14.6s-6.5 14.6-14.6 14.6z" fill="#0071CE"></path><path d="M413.9 648.9v-88.1l90.3 62.8c2.5 1.7 5.4 2.6 8.3 2.6 2.9 0 5.8-0.9 8.3-2.6l90.3-62.8v88.1H413.9z m165.3-101.4l-66.7 46.4-66.7-46.4h133.4z m46.4-29.1H399.4c-8 0-14.6 6.5-14.6 14.6v130.5c0 8 6.5 14.6 14.6 14.6h226.2c8 0 14.6-6.5 14.6-14.6V532.9c0-8-6.5-14.5-14.6-14.5z" fill="#FFFFFF"></path></g></svg></span>
            <input type="text" bind:value={email} placeholder="ngmi@email.com" class="input input-bordered" />
        <span>Username<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 78.4 78.4" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M39.2,49.728c1.792,0,3.358-1.791,3.358-2.912c0-1.119-1.566-2.016-3.358-2.016s-3.359,0.895-3.359,2.016 S37.408,49.728,39.2,49.728z"></path> <path d="M35.168,38.529c0-4.031,0.448-7.392-3.359-7.392c-3.809,0-9.856,6.271-9.856,10.527c0,4.03,2.912,4.479,6.721,4.479 C32.032,46.144,35.168,42.785,35.168,38.529z M30.465,40.769c-1.12,0-2.017-0.896-2.017-2.017c0-1.119,0.896-2.017,2.017-2.017 c1.119,0,2.016,0.896,2.016,2.017C32.48,39.873,31.584,40.769,30.465,40.769z"></path> <path d="M39.2,53.312c-3.584,0-6.271-1.567-6.271,0.226s2.912,4.256,6.271,4.256c3.358,0,6.271-2.688,6.271-4.256 C45.471,51.744,42.784,53.312,39.2,53.312z"></path> <path d="M46.594,31.137c-3.584,0-3.359,3.359-3.359,7.392s2.91,7.393,6.72,7.393c3.584,0,6.722-0.448,6.722-4.479 C56.674,37.408,50.4,31.137,46.594,31.137z M47.936,40.769c-1.119,0-2.016-0.896-2.016-2.017c0-1.119,0.896-2.017,2.016-2.017 s2.017,0.896,2.017,2.017S49.055,40.769,47.936,40.769z"></path> <path d="M39.2,0.001C17.472,0.001,0,17.473,0,39.2c0,21.729,17.473,39.199,39.2,39.199c21.729,0,39.2-17.471,39.2-39.199 C78.4,17.473,60.93,0.001,39.2,0.001z M61.152,34.945c-0.225,0-0.448,0-0.674,0c1.121,2.688,1.793,5.6,1.793,8.289 c0,10.977-10.305,16.576-23.071,16.576c-12.767,0-23.071-5.601-23.071-16.576c0-2.688,0.672-5.6,1.792-8.289 c-0.225,0-0.448,0-0.673,0c-4.031-1.12-6.271-5.601-4.928-10.08c1.343-4.479,5.376-7.392,9.408-6.271 c2.688,0.672,4.479,2.912,5.152,5.824c3.584-2.465,7.84-4.257,12.544-4.257c4.704,0,8.959,1.568,12.543,4.257 c0.672-2.688,2.465-5.152,5.151-5.824c4.032-1.12,8.063,1.792,9.407,6.271C67.426,29.344,65.184,33.824,61.152,34.945z"></path> </g> </g> </g> </g></svg></span>
            <input type="text" bind:value={username} placeholder="@everyone" class="input input-bordered" />
            <button class="btn glass" on:click={
              async() => {submitForm();}
            }>NGMI</button>
    </label>
  </div>

  </div>

