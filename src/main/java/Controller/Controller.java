package Controller;

import Database.EmentaDAO;
import Ementa.Ementa;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

    public static String parseChar = ";";

    /**
     * Encontra a recieta de uma ementa.
     *
     * @return A ementa selecionada.
     *//*
    @GetMapping("/receita")
    public Ementa change1Ementa(@RequestParam(value = "nomeEmenta") String nomeEmenta) {
        return new Ementa(EmentaDAO.getEmenta(nomeEmenta)); //TODO RUBEN
    }*/ // TODO VER COMO FAZER

    /**
     * Encontra a recieta de uma ementa.
     *
     * @return A ementa selecionada.
     *//*
    @GetMapping("/receita")
    public Ementa loadReceita(@RequestParam(value = "nomeEmenta") String nomeEmenta) {
        return new Ementa(EmentaDAO.getEmenta(nomeEmenta)); //TODO RUBEN
    }*/

    /**
     * Escolhe n ementas de todas as ementas no sistema.
     *
     * @return Lista de ementas que foram escolhidas.
     */
    @GetMapping("/nEmentas")
    public List<Ementa> loadNEmentas(@RequestParam(value = "numEmentas") int n) {
        List<Ementa> todasEmentas = makeEmentas(EmentaDAO.getEmentas());
        List<Ementa> nEmentas = new ArrayList<>();

        System.out.println(n);

        while(n > 0){
            int random = (int)(Math.random() * (n + 1));
            nEmentas.add(todasEmentas.remove(random));
            n--;
        }

        return nEmentas;
    }

    /**
     * Oferece informação sobre todas as ementas no sistema.
     *
     * @return Lista de ementas que estão na nossa base de dados.
     */

    @GetMapping("/todasEmentas")
    public List<Ementa> loadTodasEmentas() {
        return makeEmentas(EmentaDAO.getEmentas()); // TODO FDS
    }

    /**
     * Transforma uma lista de ‘strings’ numa lista de ementas
     *
     * @param ementasInfo Lista com as strings.
     * @return Lista com as \ref Ementas.
     */
    private List<Ementa> makeEmentas(List<String> ementasInfo) {
        List<Ementa> ementas = new ArrayList<>();
        for( String s : ementasInfo ) {
            Ementa e = new Ementa(s);
            System.out.println(e);
            ementas.add(e);
        }
        return ementas;
        /*
        return ementasInfo.stream()
                .map(s -> new Ementa(s)).collect(Collectors.toList());*/
    }
}
