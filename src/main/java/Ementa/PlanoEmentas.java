package Ementa;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/// Um plano de ementas que pode conter n ementas.
public class PlanoEmentas {

    /// Todas as ementas no plano
    private List<EmentaInfo> ementasInfo;
    /// Todos os ingredientes no plano.
    private List<Ingrediente> todosIngredientes;

    /**
     * Construtor que gera um novo plano de ementas.
     *
     * @param ementas a lista de ementas que formam este plano
     */
    public PlanoEmentas(List<Ementa> ementas){
        this.ementasInfo = ementas.stream().map(Ementa::getEmentaInfo).collect(Collectors.toList());
        this.todosIngredientes = encontraTodosIngredientes(ementas);
    }

    /**
     * Usa a lista de ementas para gerar a lista de ingredientes pata cumprir o plano.\n
     * Usa um mapa auxiliar para calcular a lista de ingredientes.
     *
     * @return lista com ingredientes total.
     */
    private List<Ingrediente> encontraTodosIngredientes(List<Ementa> ementas){
        Map<String,Ingrediente> mapaIngredientes = new HashMap<>();
        for (Ementa e : ementas){
            for(Ingrediente i :e.getListaIngredientes()){
                Ingrediente ingrediente = i.clone();
                if (mapaIngredientes.containsKey(ingrediente.getNome())) {
                    ingrediente.mergeIngrediente(mapaIngredientes.get(ingrediente.getNome()));
                    mapaIngredientes.replace(ingrediente.getNome(),ingrediente);
                }
                else mapaIngredientes.put(ingrediente.getNome(),ingrediente);
            }
        }
        return new ArrayList<>(mapaIngredientes.values());
    }
}
