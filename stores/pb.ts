import { defineStore } from "pinia";
import PocketBase from 'pocketbase';

export const usePbStore = defineStore("pb", ()=>{

  const pb = new PocketBase('http://localhost:8090');

  return { pb }
})