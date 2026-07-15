import app from "./app.js"
import connectDB from "./config/db.js"
import config from "./config/index.js"

const main = async () =>{
    


  connectDB();

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`)
})
}


main();