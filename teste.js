const express = require("express")

const app=express()

app.get("/", function(req,resp){
    resp.send("Bem vindo a seu app");

})

app.get("/contato",function(req,resp){
    resp.send("Pagina de contato do seu app");
})
    
app.get("/produto", function(req,resp){
        resp.send("Pagina de Produto do seu app");
    })

app.listen(8081,function(){
    console.log("O Servidor esta Funcionando na url http://localhost:8081");
});
