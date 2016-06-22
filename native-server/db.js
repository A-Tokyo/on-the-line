var mongo = require('mongodb').MongoClient;
var DB = null;
var dbURL = 'mongodb://localhost:27017/onTheLine';

exports.connect = function(cb) {
  return mongo.connect(dbURL, function(err, db) {
    if (err) return cb(err);
    console.log('connected to db');
    DB = db;
    DB.collection('users').ensureIndex({email:1}, {unique:true});
    cb(null, db);
  });
}

exports.db = function() {
  if (DB === null) throw Error('DB Object has not yet been initialized');
  return DB;
};
exports.signup= function(user,cb){
  DB.collection('users').findOne({email: user.email}, function(err,doc){
    console.log(doc);
    if(doc===null){
      DB.collection('users').insert(user, function(err){
        cb("Sign up failed!");
      });
    }
    else{
      cb("Email already exists!")
    }
  })

}
