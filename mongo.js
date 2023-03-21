const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://nirmaljasval:8o1g7W6bqoshvXoN@cluster0.cv9nolo.mongodb.net/nirmal9179-DB', function(err, db){
    if(err) throw err;
    console.log("MongoDB is Connected!")
});

const collection = db.collection('myCollection');
collection.insertOne({name:'John', age: 30}, function(err, result){
    if(err) throw err;
    console.log('document inserted');
});

collection.find({age: {$gt : 25}}).toArray(function(err, docs){
    if(err) throw err;
    console.log(docs);
});