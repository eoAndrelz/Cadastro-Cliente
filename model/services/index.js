console.log('SELECT * FROM USUARIO');
const usuarios = awaitdb.selectUsuario();
console.log(usuarios);

console.log('INSERT INTO USUARIO');
const result = await db.insertUsuario({nome: "Zé", senha:"uryweioaawu783"});
console.log(result)

console.log('UPDATE USUARIO');
const result2 = await db.updateUsuario(3, { nome: "Zé José",senha:"jhiofdgb1237"});
console.log(result2)