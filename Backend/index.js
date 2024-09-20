const express = require('express')
const cors =require('cors')
const userRouter =require('./Routers/Router')
const contactRouter = require('./Routers/Contact-Router')
const productRouter = require("./Routers/Product-Router");
const adminUser = require("./Routers/Admin-user");
const paymentRouter = require("./Routers/Payment");
const {connection}=require('./Models/Model');
const dotenv =require("dotenv");
const errorMiddleware  =require('./Middleware/Error-middleware');

const app = express();

dotenv.config({path:"./Config/config.env"});
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'], 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/User',userRouter);
app.use('/api/Contact',contactRouter);
app.use('/api/Product',productRouter);
app.use('/api/admin',adminUser);
app.use('/api/payment',paymentRouter);


app.use(errorMiddleware);

connection();
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})


// shivam coding
// coding testing 