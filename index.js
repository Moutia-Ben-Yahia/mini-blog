// set your config her
const DBname = "testdb"
const viewURL = "_design/blog/_view/blog"
const user = "root"
const secret = "123"
//////////////////////////////////////////////////////////////////
const express = require('express')
const app = express()
const path = require("path")
const bodyParser = require('body-parser')
const NodeCouchDb = require("node-couchdb")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/font', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')))

const couch = new NodeCouchDb({
    auth: {
        user: user,
        pass: secret
    }
});


app.get('/',(req,res)=>{
    couch.get(DBname,viewURL).then(({data, headers, status}) => {
        res.render('index',{blogs:data.rows})
    }, err => {
        console.log(err)
    });
})

app.get('/delete',(req,res)=>{
    if(typeof req.query.id != undefined && typeof req.query.rev != undefined){
        couch.del(DBname, req.query.id,req.query.rev).then(({data, headers, status}) => {
            res.redirect('/')
        }, err => {
            res.send(err)
        });
    }
})


app.post('/update/:id/:rev',(req,res)=>{
    const id = req.params.id;
    const rev = req.params.rev;
    const newTitle = req.body['title-'+id];
    const newDescreption = req.body['descreption-'+id];
    couch.update(DBname,{
        _id:id,
        _rev:rev,
        title:newTitle,
        descreption:newDescreption,
    }).then(({data, headers, status}) => {
        res.redirect('/')
    }, err => {
        res.send(err)
    });
})

app.post('/add',(req,res)=>{
    const title = req.body.title;
    const descreption = req.body.descreption;
    couch.uniqid().then((ids)=>{
        const id = ids[0]

        couch.insert(DBname, {
            _id: id,
            title: title,
            descreption: descreption,
        }).then(({data, headers, status}) => {
            res.redirect('/');
        }, err => {
            res.send(err);
        });
    })
})

app.listen(3000)