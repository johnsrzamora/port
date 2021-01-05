const express = require('express');
const bodyParser = require('body-parser');
const cors =  require('cors');
const mongodb = require('mongodb');


const app = express();

app.use(bodyParser.json());
 
app.get('/', async function(req, res){
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

app.post('/', async function(req, res){
    const posts = await loadPostsCollection();
    await posts.insertOne({
        skillName: req.body.text1,
        skillPie: req.body.text2,
        skillBarName: req.body.text3,
        skillBarRate: req.body.text4,
        createdAt: new Date()
    });
    res.status(201).send();
});
app.delete('/:id' , async(req, res)=>{
    const posts = await loadPostsCollection();
    await posts.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    })
    res.status(200).send();
})


async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://Steve:12345@cluster0.qitz6.mongodb.net/Noots>?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
    return client.db('portfolio').collection('posts');
}

module.exports = {
    path: "/api/",
    handler: app
}