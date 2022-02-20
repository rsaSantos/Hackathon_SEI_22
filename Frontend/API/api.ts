// LIST OF REQUESTS TO BE MADE: http://localhost:8080/
//
// Ingrediente = {"nome":"Cebola","quantidade":1,"sistemaNumerico":"un"}
//
// nEmentas?numEmentas=6
// Escolhe n ementas do sistema (devolve [nomeEmenta, link foto], [Ingredientes] aka lista de compras) 
//
// todasEmentas
// Devolve todas as ementas: [nomeEmenta, link foto]
//
// receita?nomeEmenta=bacalhau+com+natas
// Devolve ementa e seus ingredientes: nomeEmenta, link foto, [Ingredientes]
//
// mudaPlano?nomeEmentasPlano=Empadão+de+seitan,true;Bacalhau+com+natas,false
// Devolve novo plano: [nomeEmenta, link foto], [Ingredientes] aka lista de compras
//
import axios from 'axios'

const API = axios.create({
    baseURL: "http://172.16.42.4:8080",
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const todasEmentas = async () => {
    const dados = await API.get("/todasEmentas");
};

// TODO: ARGUMENTOS
export const nEmentas = async (n : number) => {
    const dados = await API.get("/nEmentas?numEmentas=" + n);
};

export const receita = async (receita_str : string) => {
    const dados = await API.get("/receita?nomeEmenta=" + receita_str);
};

// TODO: Quem cria a string?
const mudaPlano = async (jsonStr : string) => {
    // Build string from json: [ {"ingrediente": nome, "pressed": boolean}, {...} ]
    let jsonObj = JSON.parse(jsonStr)
    // Create empty string
    let plano_str : string = "";
    // Iterate JSON file
    for (let obj of jsonObj){
        // Each obj is a {"ingrediente": nome, "pressed": boolean}
        let nomeEmenta: string = obj.ingrediente
        let boolPress: boolean = obj.pressed
        // Increment string
        plano_str = plano_str + nomeEmenta.replaceAll(" ", "+") + "," + boolPress + ";";
    }
    // Get the data
    const dados = await API.get("/mudaPlano?nomeEmentasPlano=" + plano_str);
};

export default API;