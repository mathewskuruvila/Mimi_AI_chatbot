import express from 'express'
const app = express();


//middllewares
app.use(express.json());

//connections and listeneres
app.post("/hello",(req, res ,next) =>{
    console.log(req.body.name);
    return res.send("Hello world")
})

app.listen(5000,() => console.log("Server listening on port"))


//npm run dev
