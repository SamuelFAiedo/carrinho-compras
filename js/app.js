let valorTotal = 0;
limpar()

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeproduto = produto.split('-')[0];
    let valorunitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = (valorunitario * quantidade);
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}</span> ${nomeproduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

    valorTotal = valorTotal + preco
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = '0';
}

function limpar() { //zerar o carrinho (valortotal e lista) e zerar quantidade.
    valorTotal = 0;
    document.getElementById("lista-produtos").innerHTML = ' ';
    document.getElementById("valor-total").innerHTML = 'R$:0';
    
}