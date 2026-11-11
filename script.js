const numero1 = 50;
const numero2 = 10;
const textoNumero = '10';

// Um foi somado em valor numerico 
console.log(numero1 + numero2);

// Um foi somado valor+tipo e no final concatena.
console.log(numero1 + textoNumero);

// 2. O Problema do Carrinho de Compras (== vs ===)
const quantidade = 3;
const quantidadeDigitada = "3";
console.log(quantidade == quantidadeDigitada);
console.log(quantidade === quantidadeDigitada);
console.log(quantidade !== quantidadeDigitada);

// 3. Par ou Ímpar? (O Operador de Resto %)
const numeroParaTestar = 14;
const resto = numeroParaTestar % 2;
console.log(resto === 0);

// 4. Sistema de Lotação (< e >=)
const capacidadeMaxima = 500;
let ingressosVendidos = 499;
console.log(ingressosVendidos < capacidadeMaxima);
ingressosVendidos = 500;
console.log(ingressosVendidos >= capacidadeMaxima);

// 5. Autorização de Acesso (Junção E &&)
const idadeUsuario = 18;
const temCNH = true;
console.log(idadeUsuario >= 18 && temCNH);

// 6. Promoção da Loja (Junção OU ||)
const valorDaCompra = 150;
const isClienteVIP = false;
const freteGratis = valorDaCompra > 200;
console.log(valorDaCompra > 200 || isClienteVIP);

// 7. O Verificador de Férias (&& e ===)
const temDinheiroGuarda = true;
const mesAtual = "dezembro";
console.log(temDinheiroGuarda && mesAtual === "dezembro")

// 8. Painel de Administração (!= e !==)
const perfilUsuario = "visitante";
console.log(perfilUsuario != "admin");

let acessoBloqueado = 0;
console.log(acessoBloqueado !== "0");

// 9. Atualização de Dados (A diferença entre = e ==)
let statusPedido = "pendente";
statusPedido == "enviado";
console.log(statusPedido);
statusPedido = "enviado";
console.log(statusPedido);

// 10. O Grande Validador (Desafio Final de Lógica)
const anoNascimento = 2001;
const email = "cyberpunk@gmail.com";
const termosAceitos = true;
const anoAtual = 2026;
const idade = anoAtual - anoNascimento;

console.log(idade >= 18 && termosAceitos === true && email !== "");

