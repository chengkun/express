exports.index = function(req, res){
  var user = {
    first: 'Brian',
    last: 'Mancini',
    site: 'http://derpturkey.com',
    age: 32
  }
  res.render('index', user);
}
