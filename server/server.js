require('dotenv').config()
const express = require("express")
const db = require('./config/db')
const PORT = 3001
const app = express()
const cors = require('cors')
const helmet = require("helmet")
const bodyParser = require('body-parser')
// const corsOptions = require('./config/allowedOrigins')

// app.use(helmet())
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
// const domainsFromEnv = process.env.WHITELISTED_ORIGINS
// const whitelist = domainsFromEnv.split(",").map(item => item.trim())

// const whitelist = ['http://localhost:3000', 'http://localhost:3001']

// const credentials =
// app.use((req, res, next) => {
//     const origin = req.headers.origin;
//     if (whitelist.includes(origin)) {
//         res.header('Access-Control-Allow-Credentials', true);
//     }
//     next();
// });

// const corsOptions = {
//     origin: (origin, cb) => {
//         if (!origin || whitelist.indexOf(origin) !== -1) {
//             cb(null, true)
//         } else {
//             cb(new Error("Not allowed by CORS"))
//         }
//     },
//     // origin: (origin, cb) => {
//     //     cb(null, true)
//     // },
//     optionsSuccessStatus: 200
// }

// app.use(helmet())
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

// ROUTE
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

