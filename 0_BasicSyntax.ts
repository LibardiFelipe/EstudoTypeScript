// SINTAXE BÁSICA
// var/let/const nome:tipo = valor
var minhaString1: string = "Essa é minha string 1!";
let minhaString2: string = "Essa é minha string 2!";
const minhaString3: string = "Essa é minha string 3!";

// Os tipos, podem ser:
// number, string, boolean, void, null, undefined e any.
// #IMPORTANTE: O tipo "number" é alocado como um double de 64 bits.
let meuNumber1: number = 9007199254740991;
let meuNumber2: number = -9007199254740991;
let minhaBoolean: boolean = false;
let meuVoid: void;

// Any é usado para atribuir qualquer valor para a variável
let meuAny: any = 10;
let meuAny2: any = "Any pode armazenar qualquer outro valor!";

// #IMPORTANTE: Undefined é DIFERENTE de null!
// Tipicamente, o null é usado para indicar a ausência de um OBJETO,
// enquanto o undefined indica a ausência de UM VALOR QUALQUER.
let meuNull: null;
let meuUndefined: undefined;

// #IMPORTANTE: Variáveis com tipos implícitos não precisam de seu tipo assimilado.
let claramenteUmaString = "Como já estou assimilando uma string pra essa var, não preciso especificar o tipo :string!";

// A mesma coisa pode ser feita em funções, exemplo:
const minhaFuncaoQuePrecisaDeTipo = (parametro: boolean) => {
    // Repare que meu parâmetro não possui um valor padrão,
    // logo, eu preciso atribuir o tipo de variável que ele carregará
}
function minhaFuncaoQueNaoPrecisaDeTipo(parametro = true) {
    // Já neste caso, como o valor padrão do meu parâmetro é true,
    // o compilador já entende que será recebidos valores booleanos.
}

// Caso nenhum tipo nem valor sejam atribuídos para uma variável,
// ela será salva como o tipo "any".
let variavelSemTipoNemValor; // Colocando o mouse em cima do nome é possível ver o tipo "any"

// #IMPORTANTE: O typescript te permite converter uma variável para outro tipo.
// Isso é chamado de TYPE ASSERTION. Por exemplo, se você tem uma string armazenando o valor de "1",
// você pode converter esse valor para um number sem erros!
// PS: Pode ser que você conheça esse método pelo nome de "casting".
var minhaVar = "1"; // Variável com tipo string implícito
var minhaVarConvertidaParaNumber: number = <number><any>minhaVar;

// nome:tipo_desejado <tipo_desejado><any> varDeQualSeraConvertido;