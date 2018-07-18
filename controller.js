//var data =[{item:'get milk'},{item:'Clean House'},{item:'Study'}];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
		var mysql = require('mysql');
		var ans="";


//mongoose.connect('mongodb://test:reuben123@ds123971.mlab.com:23971/todo');


/*var regschema = new mongoose.Schema({
	ieee: String,
  email: String,
  phone: String,
  college: String,
  year: String,
  branch: String,
  hub: String,
  years: String,
  volunteering: String,
  aksc: String	
	
})*/
function answer()
{
	var con2 = mysql.createConnection({
  host: "ieeekera",
  user: "ieeekera_aksc18",
  password: "9b-kbEEdLzI@",
  database: "ieeekera_aksc2018"
});
con2.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con2.query("SELECT * FROM answer", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	var answer = result[0].answer;
	console.log(answer);
	return(answer);
	
});

});


}




module.exports = function(app){

	app.get('/decrypt',function(req,res){
		res.sendFile(__dirname+'/decrypt.html');

       
    });
    app.post('/decrypt' || '/decrypt.html',  urlencodedParser ,function(req,res){
		
		
		

var con = mysql.createConnection({
  host: "ieeekera",
  user: "ieeekera_aksc18",
  password: "9b-kbEEdLzI@",
  database: "ieeekera_aksc2018"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("SELECT * FROM game", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	var length = result.length;

	
		ans="aksc"
	
	 	console.log("length="+length);
			 	console.log("answer="+ans);


	  if(req.body.answer== ans)
	  {
	  console.log('Correct');
	 // res.sendFile(__dirname+'/speakers.html');	 
	 var points=100-length;
	 var sql="INSERT INTO game(ieee,name,college,points)values('"+req.body.ieee+"','"+req.body.name1 +"','"+req.body.college +"',"+points+")";
	 
	 console.log("sql="+sql);

  con.query(sql, function (err, result) {
	  if(err) throw err
	  else{

	  res.render('correct.ejs');
	  }

  });

	  }
  else 
  {
	    var sql="INSERT INTO log(ieee,name,college,answer)values('"+req.body.ieee+"','"+req.body.name1 +"','"+req.body.college +"','"+req.body.answer+"')";

	  console.log(req.body.college);
	   console.log("sql="+sql);

  con.query(sql, function (err, result) {
	  if(err) throw err
	  else{

	  res.render('game.ejs',{ieee:req.body.ieee,answer:req.body.answer,name1:req.body.name1,college:req.body.college});
	  }
  });


	  
  }
		
    });
  


 /* var sql = "INSERT INTO register(ieee,name, email, phone, college, year, branch, hub, years, experience, aksc) VALUES('"+req.body.ieee+"','"+name+"','"+req.body.email+"','"+req.body.phone+"','"+req.body.college+"','"+req.body.year+"','"+req.body.branch+"','"+req.body.hub+"','"+req.body.years+"','"+req.body.volunteering+"','"+req.body.aksc+"')";  
console.log(sql);

  con.query(sql, function (err, result) {
	  if(err) throw err
	  else{

	  res.sendFile(__dirname+'/successful.html');}

  });*/
});
		
		
	

	});
	
		 
	
	app.get('/leaderboard',function(req,res){
		var mysql = require('mysql');

var con2 = mysql.createConnection({
  host: "ieeekera",
  user: "ieeekera_aksc18",
  password: "9b-kbEEdLzI@",
  database: "ieeekera_aksc2018"
});

con2.connect(function(err) {
  if (err) throw err;
  con2.query("SELECT * FROM game", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
					res.render('admin.ejs',{result:result});

  });
});



			 
		 });
		 
		 
		 app.get('/admin/log/123',function(req,res){
		var mysql = require('mysql');

var con2 = mysql.createConnection({
  host: "ieeekera",
  user: "ieeekera_aksc18",
  password: "9b-kbEEdLzI@",
  database: "ieeekera_aksc2018"
});

con2.connect(function(err) {
  if (err) throw err;
  con2.query("SELECT * FROM log", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
					res.render('log.ejs',{result:result});

  });
});



			 
		 });
		 
		 
		  app.get('/sql',function(req,res){
		

var con3 = mysql.createConnection({
  host: "ieeekera",
  user: "ieeekera_aksc18",
  password: "9b-kbEEdLzI@",
  database: "ieeekera_aksc2018"
});

con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE answer (answer VARCHAR(255))";
  con3.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});


			 
		 });
		 
		 
		 




}