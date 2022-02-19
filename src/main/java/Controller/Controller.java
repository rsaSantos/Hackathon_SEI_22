package Controller;

import Database.EmentaDAO;
import Ementa.Ementa;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class Controller {

    public static String parseChar = ";";


    /**
     * Oferece informação sobre todas as ementas no sistema.
     *
     * @return Lista de ementas que estão na nossa base de dados.
     */

    @GetMapping("/todasEmentas")
    public List<Ementa> loadTodasEmentas() {
        return makeEmentas(EmentaDAO.getEmentas());
    }

    /**
     * Transforma uma lista de ‘strings’ numa lista de ementas
     *
     * @param ementasInfo Lista com as strings.
     * @return Lista com as \ref Ementas.
     */
    private List<Ementa> makeEmentas(List<String> ementasInfo) {
        List<Ementa> ementas = new ArrayList<>();
        for( String s : ementasInfo )
            ementas.add(new Ementa(s));
        return ementas;
        /*
        return ementasInfo.stream()
                .map(s -> new Ementa(s)).collect(Collectors.toList());*/
    }

}
