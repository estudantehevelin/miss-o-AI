const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Você recebeu uma mensagem dizendo que ganhou um celular de graça, mas precisa clicar em um link. O que você faz?",
        alternativas: [
            {
                texto: "Clico imediatamente para resgatar o prêmio.",
                afirmacao: "Aprendeu que é importante verificar se um link é confiável antes de acessá-lo."
            },
            {
                texto: "Ignoro a mensagem e verifico se ela é verdadeira.",
                afirmacao: "Demonstrou cuidado ao analisar mensagens suspeitas antes de tomar uma decisão."
            }
        ]
    },
    {
        enunciado: "Na escola, o professor pede uma apresentação em grupo. Como você prefere organizar o trabalho?",
        alternativas: [
            {
                texto: "Divido as tarefas para que todos participem.",
                afirmacao: "Aprendeu a importância do trabalho em equipe."
            },
            {
                texto: "Faço quase tudo sozinho para garantir o resultado.",
                afirmacao: "Percebeu que confiar na equipe pode tornar o trabalho mais eficiente."
            }
        ]
    },
    {
        enunciado: "Você precisa estudar para uma prova difícil. Como se prepara?",
        alternativas: [
            {
                texto: "Monto um cronograma e estudo um pouco por dia.",
                afirmacao: "Desenvolveu organização e disciplina nos estudos."
            },
            {
                texto: "Estudo apenas na véspera da prova.",
                afirmacao: "Descobriu que estudar aos poucos traz melhores resultados."
            }
        ]
    },
    {
        enunciado: "Durante uma pesquisa na internet, você encontra informações diferentes sobre o mesmo assunto. O que faz?",
        alternativas: [
            {
                texto: "Comparo várias fontes confiáveis antes de decidir.",
                afirmacao: "Aprendeu a importância de verificar a confiabilidade das informações."
            },
            {
                texto: "Acredito na primeira informação que encontrei.",
                afirmacao: "Percebeu que nem tudo o que está na internet é verdadeiro."
            }
        ]
    },
    {
        enunciado: "Um colega está com dificuldades em uma atividade. Como você reage?",
        alternativas: [
            {
                texto: "Ofereço ajuda e explico o conteúdo.",
                afirmacao: "Descobriu que compartilhar conhecimento fortalece a aprendizagem."
            },
            {
                texto: "Continuo minha atividade sem ajudar.",
                afirmacao: "Percebeu que a colaboração pode beneficiar toda a turma."
            }
        ]
    },
    {
        enunciado: "Ao terminar todas as atividades da semana, o que você faz?",
        alternativas: [
            {
                texto: "Organizo meus materiais e planejo a próxima semana.",
                afirmacao: "Criou o hábito de manter a organização para alcançar seus objetivos."
            },
            {
                texto: "Deixo tudo para resolver depois.",
                afirmacao: "Aprendeu que planejar o tempo evita imprevistos e facilita a rotina."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();