package Ementa;

import Controller.Controller;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/// A classe Ementa representa uma refeição.
public class Ementa implements Serializable {

    /// Informação básica sobre uma ementa.
    private EmentaInfo ementaInfo;
    /// Os passos a seguir para fazer esta receita.
    private String receita;
    /// A lista de ingredientes necessária para fazer esta ementa.
    private List<Ingrediente> listaIngredientes;

    /**
     * Construtor que permite gerar uma ementa.
     *
     * @param ementaInfo a informação de uma ementa formatada numa ‘string’
     */
    public Ementa(String ementaInfo){
        // Database output: name;photo;recipe
        String[] parsedInfo = ementaInfo.split(Controller.parseChar);
        if(parsedInfo.length > 2){
            this.ementaInfo = new EmentaInfo(parsedInfo[0],parsedInfo[1]);
            this.receita = parsedInfo[2];
            this.listaIngredientes = new ArrayList<>();
            // TODO LISTA ING
        }
        else throw new IllegalArgumentException();
    }

    /**
     * Construtor que gera uma nova ementa a partir de uma já gerada.
     *
     * @param e a ementa que se pretende copiar.
     */
    public Ementa(Ementa e){
        this.ementaInfo = e.ementaInfo.clone();
        this.receita = e.receita;
        this.listaIngredientes = e.listaIngredientes.stream().map(Ingrediente::clone).collect(Collectors.toList());

    }

    /// Método get simples
    public List<Ingrediente> getListaIngredientes(){
        return listaIngredientes.stream().map(Ingrediente::clone).collect(Collectors.toList());
    }

    public EmentaInfo getEmentaInfo() {
        return ementaInfo.clone();
    }

    /// Método clone simples
    public Ementa clone() {
        return new Ementa(this);
    }
}
