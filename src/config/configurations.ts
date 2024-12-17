import { registerAs } from "@nestjs/config";

export enum ConfigKeys {
    App = 'App',

}


const AppConfig = registerAs(ConfigKeys.App , ()=>({
    port:3000,
    cors:{
        origin: '*', 
        methods: 'GET,POST,PUT',     
        allowedHeaders: 'Content-Type, Authorization', 
        credentials: true,           
      }
    
}))




export const configurations = [AppConfig]