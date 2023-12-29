import { Client, Account, Databases } from "appwrite";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("658ec4ef66d3735853b9");
export const account=new Account(client)
export const db=new Databases(client,"658ec5783cda4b3fd03b")