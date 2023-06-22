require('dotenv').config()
const express = require("express")
const db = require('./config/db')
const PORT = 3001
const app = express()

app.use(express.json())
app.use('/item', require('./routers/itemRoute'))
db.authenticate().then(() => {
    console.log("connection extablished successfully");
    app.listen(PORT, () => {
        console.log(`connected to: ${PORT}`)
    })
}).catch((err) => {
    console.log(`error occursed ${err}`);
})




// mongoose.connect(process.env.MONGO_URI).then(() => {
    // app.listen(PORT, () => {
    //     console.log(`connected to: ${PORT}`)
//     })
// }).catch((error) => {
//     console.log(error);
// })

