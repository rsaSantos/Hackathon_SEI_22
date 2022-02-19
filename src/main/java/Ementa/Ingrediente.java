package Ementa;

import Controller.Controller;

/// Representa um ingrediente presente numa receita.
public class Ingrediente {

    /// Nome do ingrediente
    private String nome;
    /// Quantidade necessária do ingrediente.
    private String quantidade;
    /// Sistema numérico em que o ingrediente se encontra.
    private String sistemaNumerico;


    public Ingrediente(String ementaInfo){
        // Database output: name;photo;recipe
        String[] parsedInfo = ementaInfo.split(Controller.parseChar);
        if(parsedInfo.length > 2){
            this.nome = parsedInfo[0];
            this.quantidade = parsedInfo[1];
            this.sistemaNumerico = parsedInfo[2];
        }
        else throw new IllegalArgumentException();
    }

    /**
     * Construtor que gera um novo Ementa.Ingrediente a partir de um já existente.
     *
     * @param i o ingrediente que se pretende copiar.
     */
    public Ingrediente(Ingrediente i){
        this.nome = i.nome;
        this.quantidade = i.quantidade;
        this.sistemaNumerico = i.sistemaNumerico;

    }

    /// Método clone simples.
    public Ingrediente clone() {
        return new Ingrediente(this);
    }

    /// Método nome simples
    public String getNome() {
        return nome;
    }

    /**
     * Junta dois ingredientes, ou seja, a sua quantidade.
     *
     * @param i ingrediente que queremos dar merge com.
     */
    public void mergeIngrediente(Ingrediente i){
        if (this.nome.equals(i.nome) && this.sistemaNumerico.equals(i.sistemaNumerico))
            this.quantidade += i.quantidade;
    }
}
