<?php
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $produtos = $_POST['produtos'];
    $total = $_POST['total'];

    echo "
    <html lang='pt-BR'>
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>Finalizar Pedido</title>
      <link rel='stylesheet' href='style.css'>
    </head>
    <body>
    <div style='max-width:500px;margin:auto;padding:20px'>
      <h2>Finalize seu pedido</h2>
      <p><strong>Produtos:</strong> $produtos</p>
      <p><strong>Total:</strong> R$ $total</p>

      <form method='POST' action='confirmacao.php'>
        <label>Nome Completo:</label>
        <input type='text' name='nome' required>

        <label>Email:</label>
        <input type='email' name='email' required>

        <label>Telefone:</label>
        <input type='text' name='telefone' required>

        <label>Endereço Completo:</label>
        <textarea name='endereco' required></textarea>

        <input type='hidden' name='produtos' value='$produtos'>
        <input type='hidden' name='total' value='$total'>
        <button type='submit' class='checkout-btn'>Confirmar Pedido</button>
      </form>
    </div>
    </body>
    </html>";
    exit;
}
?>
