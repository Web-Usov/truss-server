import app from '../app'
import { serverConfig } from '../config';
import dbConcnetion from './db-connection'


dbConcnetion.then(() => {
    try {
        app.listen(serverConfig.PORT, () => {
            console.log("Server is listening on port",serverConfig.PORT)            
        })
        
    } catch (error) {
        console.error("App init error") 
        console.error(error)    
        
    }
}).catch((err) => {
    console.error("DataBase connecting error")  
    console.error(err)    
})


