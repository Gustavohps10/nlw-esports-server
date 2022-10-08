import express, {Request, Response} from "express"

const app = express()

app.get('/', (req: Request, res: Response)=>{
    return res.json({
        test: "123",
        test2: "2222",
        test3: "333333"
    })
})

app.listen(3333)