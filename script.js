// Controle do Bat-Sinal
const btnBatsinal = document.getElementById('batsinal-btn');
const overlayBatsinal = document.getElementById('batsinal-overlay');

btnBatsinal.addEventListener('click', () => {
    overlayBatsinal.classList.toggle('visivel');
    btnBatsinal.classList.toggle('ativo');

    if (overlayBatsinal.classList.contains('visivel')) {
        btnBatsinal.textContent = 'Desligar Bat-Sinal';
    } else {
        btnBatsinal.textContent = 'Ativar Bat-Sinal';
    }
});

// Banco de dados dos Vilões de Gotham
const dadosViloes = {
    coringa: {
        nome: 'Coringa',
        perigo: 'Nível de Perigo: Extremo',
        descricao: 'O Príncipe Palhaço do Crime. Um gênio psicopata sem empatia, cuja única motivação é provar que qualquer pessoa pode enlouquecer após um dia ruim.'
    },
    charada: {
        nome: 'Charada (Edward Nygma)',
        perigo: 'Nível de Perigo: Alto (Intelecto)',
        descricao: 'Obcecado por enigmas, quebra-cabeças e jogos mentais. Deixa pistas complexas em suas cenas de crime para testar a inteligência do Batman.'
    },
    bane: {
        nome: 'Bane',
        perigo: 'Nível de Perigo: Crítico (Físico e Estratégico)',
        descricao: 'Criado na prisão de Peña Duro, combina uma mente tática brilhante com força sobre-humana amplificada pelo soro Veneno.'
    },
    espantalho: {
        nome: 'Espantalho (Dr. Jonathan Crane)',
        perigo: 'Nível de Perigo: Alto (Químico)',
        descricao: 'Ex-professor de psicologia que utiliza sua toxina do medo para explorar as piores fobias de suas vítimas e mergulhar Gotham no pânico.'
    }
};

// Troca dinâmica das fichas dos vilões
const botoesFiltro = document.querySelectorAll('.filtro-btn');
const vilaoNome = document.getElementById('vilao-nome');
const vilaoPerigo = document.getElementById('vilao-perigo');
const vilaoDesc = document.getElementById('vilao-desc');

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove a classe 'ativo' de todos os botões
        botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
        
        // Adiciona 'ativo' no botão clicado
        botao.classList.add('ativo');

        // Atualiza as informações na tela
        const chaveVilao = botao.getAttribute('data-vilao');
        const info = dadosViloes[chaveVilao];

        vilaoNome.textContent = info.nome;
        vilaoPerigo.textContent = info.perigo;
        vilaoDesc.textContent = info.descricao;
    });
});