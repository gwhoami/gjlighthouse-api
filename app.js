const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const fileUpload = require('express-fileupload');
const adminRoutes = require('./src/routes/adminRoutes');
const commonRouter = require('./src/routes/commonRoute');
const userRouter = require('./src/routes/userRouter');
const Sib = require('sib-api-v3-sdk');
//process.env['EMAIL_API'] = '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';

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 5151;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.raw())
app.use(cors());
app.use(fileUpload());


const username = "gwhoami_development";
const password = "FUkyN6nhes9F4E67";
const cluster = "gwhoamidev.yayght4";
const dbname = "gwhoami";
mongoose.connect( `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true
    }
);
const client = Sib.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.get('/', async(req, res) => {
    res.send("gwhoami rest api");
});
app.get('/test', async(req, res) => {
    res.json({success: true});
});
app.use("/api/user", adminRoutes);
app.use('/api/common', commonRouter);
app.use('/api/client', userRouter)
app.listen(port, () => {
    console.log(`Listening in port ${port}`);
});

// mongoose.connect("mongodb+srv://msumansavio:Edappad-43@cluster0.mkdyl.mongodb.net/gwhoami?authSource=admin&replicaSet=atlas-r9a0qd-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {useNewUrlParser: true,useUnifiedTopology: true} ).then(()=>{
//     const app = express();
//     const port = process.env.PORT || 5151;
//     app.use(express.urlencoded({extended: true}));
//     app.use(express.json());
//     app.use(express.raw())
//     app.use(cors());
//     app.get('/', async(req, res) => {
//         res.send("gwhoami rest api");
//     });
//     app.get('/test', async(req, res) => {
//         res.json({success: true});
//     });
//     app.use("/api/user", adminRoutes)
//     app.listen(port, () => {
//         console.log('Listening in port 5151');
//     });
// });