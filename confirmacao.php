<?php
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $endereco = $_POST['endereco'];
    $produtos = $_POST['produtos'];
    $total = $_POST['total'];

    $mensagem = "Novo Pedido:\nCliente: $nome\nEmail: $email\nTelefone: $telefone\nEndereço: $endereco\nProdutos: $produtos\nTotal: R$ $total\n---\n";
    file_put_contents("pedidos.txt", $mensagem, FILE_APPEND);

    echo "
    <html lang='pt-BR'>
    <head><meta charset='UTF-8'><title>Pedido Confirmado</title><link rel='stylesheet' href='style.css'></head>
    <body style='text-align:center;padding:50px'>
      <h2>Obrigado, $nome! 🐶</h2>
      <p>Seu pedido foi recebido com sucesso!</p>
      <p>Entraremos em contato pelo email <b>$email</b> para confirmar a entrega.</p>
      <a href='index.html' class='checkout-btn'>Voltar à loja</a>
    </body>
    </html>";
}
?>
