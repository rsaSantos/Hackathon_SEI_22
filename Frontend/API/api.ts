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
// mudaPlano?nomeEmentasPlano=Empadão+de+seitan;Bacalhau+com+natas;&nomeEmentasAlterar=Bacalhau+com+natas;
// Devolve novo plano: [nomeEmenta, link foto], [Ingredientes] aka lista de compras
//
import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:8080/",
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});

const request_test = async () => {
    const dados = await API.get("/todasEmentas");    
};

request_test();

export default API;