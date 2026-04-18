//Inica a função quando a página carregar.
window.onload = function(){
    carregarFrase();
}

//Função que vai pegar os dados da API, verificando, se não houver erro, apresentando a frase e o autor dela.
async function carregarFrase() {

    //Aqui é a parte que ela tenta rodar a função.
  try {

    //Aqui é criado uma variavel que recebera a resposta da API
    //await é um comando que manda o JS esperar até que a API envie a resposta.
    const res = await fetch('https://raw.githubusercontent.com/devmatheusguerra/frasesJSON/main/frases.json');

    //Aqui quer dizer que se o res(os dados da API) não forem "ok"(true), ele vai lançar um erro, e vai ir direto pro catch, a partir do comando "throw".
    if (!res.ok) throw new Error('Erro ao buscar JSON');

    //Aqui vai pegar os dados da API, esperando até que ela pegue os dados do arquivo JSON.
    //OBS: essa variavel é diferente da primeira, já que a primeira tem o objetivo de encontrar o arquivo da API na internet, e essa tem o objetivo de pegar os dados que estão dentro da API.
    const data = await res.json();

    //Essa variavel tem o principal obejtivo de pegar a partir do Math.floor que arredonda o numero para baixo, e do math.random que pega um numero aleatório, sendo multiplicado pelo numero de dados da API, assim pegando um número aleatório.
    const aleatoria = data[Math.floor(Math.random() * data.length)];

    //E aqui vai pegar as ids do html e mudar o texto dentro delas por meio do textContent.
    document.getElementById('frase').textContent = `"${aleatoria.frase}"`;
    document.getElementById('autor').textContent = `- ${aleatoria.autor}`;

    //Se ela não conseguir executar.
  } catch (erro) {
    //Vai exibir que houve um erro, a partir do console.
    console.error(erro);
  }
}
