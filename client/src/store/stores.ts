import { writable, type Writable } from "svelte/store"
import type { User } from "../domain/user"



export let users: Writable<User[]> = writable([])
export let selectedUser: Writable<User> = writable()
