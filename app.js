
var express = require('express');
var mysql = require('mysql');

var conexion=mysql.createConnection({
    host:'sql107.epizy.com',
    user:'epiz_31522942',
    password:'PakicSMSACr',
    database:'epiz_31522942_numeros_tiempos'
    // host:'localhost',
    // user:'root',
    // password:'',
    // database:'articulosdb'
})
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('exitosa conexion')
    }
})

var app=express();
   app.use(express.json());

    app.get('/',function(req,res){
        // res.send('Ruta Iniciada');
        // res.send('<h1 style="color:blue">rolando Rivera</h1>' )
        res.send('<h1 style="color:blue">Rolando Rivera</h1>' )
    })

   app.get('/api/tiempos',(req,res)=>{
      conexion.query('SELECT * FROM nica',(error,filas)=>{
       if(error){
        throw error;
       }else{
        res.send(filas)
       }
      })
   })
//    ++++++++++++++++++++++++++
   app.get('/api/tiempos/:id',(req,res)=>{
      conexion.query('SELECT * FROM nica WHERE id=?',[req.params.id],(error,fila)=>{
       if(error){
        throw error;
       }else{
        res.send(fila)
        // res.send(fila[0].descripcion)
       }
      })
   })

//    app.post('/api/articulos',(req,res)=>{
//   let data={
//     descripcion:req.body.descripcion,
//     precio:req.body.precio,
//     stock:req.body.stock
//   };
//   let sql="INSERT INTO articulos SET ?";
//     conexion.query(sql,data,function(error,result){
//     if(error){
//         throw error;
//     }else{
//         res.send(result);
//     }
//     })
//    })

const puerto=process.env.PUERTO||3000;
    app.listen(puerto,function(){
console.log('server servidor'+puerto)

    })
// console.log(app)
