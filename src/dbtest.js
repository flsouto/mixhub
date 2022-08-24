const {MongoClient} = require('mongodb')
const uri = "mongodb://mixhub:l3tm3c0nn3ct@mongo/mixhub"
const client = new MongoClient(uri)
client.connect(() => {
	const db = client.db('mixhub')
    const f = db.collection('test')
		.find()
	f.toArray((_,docs)=>{
		console.log(docs[0]._id)
	})
})
