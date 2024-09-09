function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "Nenhum jogo encontrado. Você não inseriu nenhuma informação."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let resumo = "";
    let tags = "";

    // Para cada dado dentro da lista de dados, fazer uma repetição.
    for (let jogo of jogos) {
        titulo = jogo.titulo.toLowerCase()
        resumo = jogo.resumo.toLowerCase()
        tags = jogo.tags.toLowerCase()
        // Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || resumo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${jogo.titulo}</a>
                </h2>
                <p class="descricao-meta">${jogo.resumo}</p>
                <a href="${jogo.link}" target="_blank">Mais informações na wiki</a>
            </div>
        `
        }
    }

    if (!resultados) {
        resultados = "Nenhum jogo encontrado."
    }

    section.innerHTML = resultados
}