package Controller;

import Database.EmentaDAO;
import Ementa.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

@RestController
public class Controller {

    public static String parseChar = ";";

    /**
     * Encontra a recieta de uma ementa.
     *
     * @return A ementa selecionada.
     */
    @GetMapping("/mudaPlano")
    public PlanoEmentas mudaPlano(@RequestParam(value = "nomeEmentasPlano") String nomeEmentasPlano,
            @RequestParam(value = "nomeEmentasAlterar") String nomeEmentasAlterar)
    {
        List<String> listNomeEmentasPlano = List.of(nomeEmentasPlano.split(Controller.parseChar));
        List<String> listaNomeEmentasAlterar = List.of(nomeEmentasPlano.split(Controller.parseChar));

        List<Ementa> planoAtual = new ArrayList<>();
        List<Ementa> aRemover = new ArrayList<>();
        List<Ementa> ementasPoll = new ArrayList<>();
        for ( Ementa e : EmentaDAO.getEmentas()){
            if (listaNomeEmentasAlterar.contains(e.getEmentaInfo().getNomeEmenta()))
                aRemover.add(e);
            else if(listNomeEmentasPlano.contains(e.getEmentaInfo().getNomeEmenta()))
                planoAtual.add(e);
            else
                ementasPoll.add(e);
        }

        int n = listaNomeEmentasAlterar.size();

        List<Ementa> novaEmentas = encontraEmentas(n,ementasPoll);
        int diff = n - novaEmentas.size();
        if (diff > 0)
            novaEmentas.addAll(encontraEmentas(diff,aRemover));

        planoAtual.addAll(novaEmentas);

        return new PlanoEmentas(planoAtual);
    }

    /**
     * Encontra a recieta de uma ementa.
     *
     * @return A ementa selecionada.
     */
    @GetMapping("/receita")
    public Ementa getReceita(@RequestParam(value = "nomeEmenta") String nomeEmenta) {
        Ementa e = new Ementa(EmentaDAO.getEmentaByName(nomeEmenta));
        e.setListaIngredientes(EmentaDAO.getIngredientesEmenta(e.getEmentaInfo().getNomeEmenta()));
        return e;
    }

    /**
     * Escolhe n ementas de todas as ementas no sistema.
     *
     * @return Lista de ementas que foram escolhidas.
     */
    @GetMapping("/nEmentas")
    public PlanoEmentas loadNEmentas(@RequestParam(value = "numEmentas") int n) {
        List<Ementa> todasEmentas = makeEmentas(EmentaDAO.getEmentas());
        return new PlanoEmentas(encontraEmentas(n,todasEmentas));
    }

    /**
     * Oferece informação sobre todas as ementas no sistema.
     *
     * @return Lista de ementas que estão na nossa base de dados.
     */

    @GetMapping("/todasEmentas")
    public PlanoEmentas loadTodasEmentas() {
        return new PlanoEmentas(makeEmentas(EmentaDAO.getEmentas()));
    }

    /**
     * Transforma uma lista de ‘strings’ numa lista de ementas
     *
     * @param ementas Lista com as ementas.
     * @return Lista com as \ref Ementas.
     */
    private List<Ementa> makeEmentas(List<Ementa> ementas) {
        for( Ementa e : ementas ) {
            e.setListaIngredientes(EmentaDAO.getIngredientesEmenta(e.getEmentaInfo().getNomeEmenta()));
        }
        return ementas;
    }

    private List<Ementa> encontraEmentas(int n,List<Ementa> ementas){
        List<Ementa> todasEmentas = makeEmentas(EmentaDAO.getEmentas());
        List<Ementa> nEmentas = new ArrayList<>();

        if(n > todasEmentas.size())
            return todasEmentas;

        while(n > 0){
            int random = (int)(Math.random() * n);
            nEmentas.add(todasEmentas.remove(random));
            n--;
        }

        return nEmentas;
    }


}
