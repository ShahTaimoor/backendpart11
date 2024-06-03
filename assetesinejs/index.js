const express = require('express')
const path =require('path')
const app = express()
const PORT = 3000


// Serve static Files

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')

// Home Route

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})


app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

app.get('/gallery',(req,res)=>{
    res.render('gallery.ejs')
})


app.get('/user',(req,res)=>{
    let userData = {
        username:'Taimoor',
        age:21,
        isPremiumUser:true,
        email:'taimoor@gmail.com'
    }
    res.render('userData.ejs', userData )
})





app.listen(PORT, console.log(`Server is running on port  ${PORT}`))