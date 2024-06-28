const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é IA?",
        alternativas: [
            {
                texto: "É um ramo da ciência que se concentra no desenvolvimento de sistemas e algoritmos capazes de realizar tarefas que normalmente exigem inteligência humana.",
                afirmacao: "afirmacao"
            },
            {
                texto: "É o índice de aumento de expectativa de vida no mundo.",
                afirmacao: "afirmacao"
            }
               
        ]
    },
    {
        enunciado: "Como a inteligência artificial pode ser útil no dia-a-dia?",
        alternativas: [
            {
                texto: "Com assistentes pessoais, casas inteligentes, na educação, na medicina, nas empresas e na indústria.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Levando café da manhã na sua cama.",
                afirmacao: "afirmacao"
            }
               
        ]
    },
    {
        enunciado: "Quais são os 3 pilares da IA?",
        alternativas: [
            {
                texto: "Tecnologia, cultura, vendas.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Lutas marciais, balé, culinária",
                afirmacao: "afirmacao"
            }
              
        ]
    },
    {
        enunciado: "Qual o principal objetivo da IA?",
        alternativas: [
            {
                texto: "Extinguir a raça humana.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Automatizar tarefas.",
                afirmacao: "afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Quais são os principais tipos de IA utilizados na indústria?",
        alternativas: [
            {
                texto: "Aprendizado de máquina, processamento de linguagem natural, visão computacional e robótica inteligente.",
                afirmacao: "afirmacao"
            },
            {
                texto: "A IA não é utilizada na indústria.",
                afirmacao: "afirmacao"
            }
            
        ]
    }
]; 

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoselecionada){
    const afirmacoes = opcaoselecionada.afirmacoes;
    historiaFinal = afirmacoes;
     atual++;
     mostraPergunta();    
}
mostraPergunta();
