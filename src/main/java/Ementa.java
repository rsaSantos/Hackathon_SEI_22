import java.util.List;
import java.util.stream.Collectors;

/// A classe Ementa representa uma refeição.
public class Ementa {

    /// O nome desta refeição.
    private String nomeEmenta;
    /// Os passos a seguir para fazer esta receita.
    private String receita;
    /// Onde está alojada a fotografia desta receita.
    private String fotografia;
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
            this.nomeEmenta = parsedInfo[0];
            this.receita = parsedInfo[1];
            this.fotografia = parsedInfo[2];
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
        this.nomeEmenta = e.nomeEmenta;
        this.receita = e.receita;
        this.fotografia = e.fotografia;
        this.listaIngredientes = e.listaIngredientes.stream().map(Ingrediente::clone).collect(Collectors.toList());

    }

    /// Método get simples
    public List<Ingrediente> getListaIngredientes(){
        return listaIngredientes.stream().map(Ingrediente::clone).collect(Collectors.toList());
    }

    /// Método clone simples
    public Ementa clone() {
        return new Ementa(this);
    }
}
