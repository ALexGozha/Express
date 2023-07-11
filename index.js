import express from 'express'
import path from 'path'
import {requestTime, logger} from "./middlewares.js"
import { title } from 'process'
import {cons} from "./middlewares2.js"

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
console.log(app.get('views'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)
app.use(cons)

// console.log(path.resolve(__dirname, 'ejs', 'index.ejs'))

app.get('/',(req,res)=>{
    res.render('index', {title: 'main page'})
})

app.get('/features',(req,res)=>{
    res.render('features', {title:'features page'})
})

app.get('/download', (req,res)=>{
    
    res.download(path.resolve(__dirname, 'ejs', 'index.ejs'))
})
 
// app.get('/', (req,res)=>{ 
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })

// app.get('/download', (req,res) =>{
//     res.download(path.resolve(__dirname, 'static', 'index.html'))
// })

// app.get('/features',(req,res)=>{
//     res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })

console.log(path.resolve(__dirname, 'static'))

app.listen(3000, ()=>{
    console.log(`server has been started on port ${PORT}`)
})