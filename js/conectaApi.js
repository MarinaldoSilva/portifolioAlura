async function listaCards() {
    const conexao = await fetch("http://localhost:3000/lista-itens");
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);
    return conexaoConvertida;
}

async function criarItem(titulo, valor, imagem) {
    const conexao = await fetch("http://localhost:3000/lista-itens",{
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            titulo : titulo,
            valor : valor,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaCards,
    criarItem
}


