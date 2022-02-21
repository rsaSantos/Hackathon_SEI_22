package Ementa;


import java.io.Serializable;

/// Representa um ingrediente presente numa receita.
public class Ingrediente implements Serializable {

    /// Nome do ingrediente
    private String nome;
    /// Quantidade necessária do ingrediente.
    private int quantidade;
    /// Sistema numérico em que o ingrediente se encontra.
    private String sistemaNumerico;


    public Ingrediente(String nome,int quantidade,String sistemaNumerico){
        this.nome = nome;
        this.quantidade = quantidade;
        this.sistemaNumerico = sistemaNumerico;
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

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public String getSistemaNumerico() {
        return sistemaNumerico;
    }

    public void setSistemaNumerico(String sistemaNumerico) {
        this.sistemaNumerico = sistemaNumerico;
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
