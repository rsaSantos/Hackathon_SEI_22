package Controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Database.EmentaDAO;
import Ementa.Ementa;
import Ementa.EmentaInfo;
import Ementa.PlanoEmentas;

@RestController
public class Controller {

    public static String parseChar = ";";

    /**
     * Encontra a recieta de uma ementa.
     *
     * @return A ementa selecionada.
     */
    @CrossOrigin(origins = "*")
    @GetMapping("/mudaPlano")
    public PlanoEmentas mudaPlano(@RequestParam(value = "nomeEmentas") String ementas)
    {
        Map<String,Boolean> map = parsePlano(ementas);

        List<Ementa> planoAtual = new ArrayList<>();
        List<Ementa> aRemover = new ArrayList<>();
        List<Ementa> ementasPoll = new ArrayList<>();
        for ( Ementa e : EmentaDAO.getEmentas()){
            boolean b = map.containsKey(e.getEmentaInfo().getNomeEmenta());
            if (b && map.get(e.getEmentaInfo().getNomeEmenta()))
                aRemover.add(e);
            else if(b)
                planoAtual.add(e);
            else
                ementasPoll.add(e);
        }

        int n = aRemover.size();

        List<Ementa> novaEmentas = encontraEmentas(n,ementasPoll);
        int diff = n - novaEmentas.size();
        if (diff > 0)
            novaEmentas.addAll(encontraEmentas(diff,aRemover));

        planoAtual.addAll(novaEmentas);

        return new PlanoEmentas(makeReceitas(planoAtual));
    }

    /**
     * Encontra a recieta de uma ementa.
     *
     * @return A ementa selecionada.
     */
    @CrossOrigin(origins = "*")
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
    @CrossOrigin(origins = "*")
    @GetMapping("/nEmentas")
    public PlanoEmentas loadNEmentas(@RequestParam(value = "numEmentas") int n) {
        List<Ementa> todasEmentas = makeReceitas(EmentaDAO.getEmentas());
        return new PlanoEmentas(encontraEmentas(n,todasEmentas));
    }

    /**
     * Oferece informação sobre todas as ementas no sistema.
     *
     * @return Lista de ementas que estão na nossa base de dados.
     */

    @CrossOrigin(origins = "*")
    @GetMapping("/todasEmentas")
    public List<EmentaInfo> loadTodasEmentas() {
        return makeReceitas(EmentaDAO.getEmentas()).stream()
                .map(s -> s.getEmentaInfo())
                .collect(Collectors.toList());
    }

    /**
     * Transforma uma lista de ‘strings’ numa lista de ementas
     *
     * @param ementas Lista com as ementas.
     * @return Lista com as \ref Ementas.
     */
    private List<Ementa> makeReceitas(List<Ementa> ementas) {
        for( Ementa e : ementas ) {
            e.setListaIngredientes(EmentaDAO.getIngredientesEmenta(e.getEmentaInfo().getNomeEmenta()));
        }
        return ementas;
    }

    private Map<String,Boolean> parsePlano(String plano){
        Map<String,Boolean> map = new HashMap<>();

         for(String ementa : plano.split(Controller.parseChar)){
             String [] values = ementa.split(",");
             map.put(values[0],Boolean.parseBoolean(values[1]));
         }

        return map;
    }

    private List<Ementa> encontraEmentas(int n, List<Ementa> ementas){
        List<Ementa> nEmentas = new ArrayList<>();

        if(n >= ementas.size())
            return ementas;

        while(n > 0){
            int random = (int) Math.round((Math.random() * n));
            nEmentas.add(ementas.remove(random));
            n--;
        }

        return nEmentas;
    }

}
