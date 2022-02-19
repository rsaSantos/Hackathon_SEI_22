import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
     *//*
    @GetMapping("/todasEmentas")
    public List<Ementa> loadTodasEmentas() {
        return makeMuseums(EmentaDAO.getMuseums()); // TODO MAGIA BASE DE DADOS
    }*/

    /**
     * Desmonta a informação da ‘string’ para formar uma ementa
     */
    private Ementa deserializationEmenta(String info){
        String[] splitInfo = info.split(parseChar);

        return new Ementa(""); // TODO MAGIA BASE DE DADOS
    }

    /**
     * Transforma uma lista de ‘strings’ numa lista de ementas
     *
     * @param ementasInfo Lista com as strings.
     * @return Lista com as \ref Ementas.
     */
    private List<Ementa> makeMuseums(List<String> ementasInfo) {
        return ementasInfo.stream()
                .map(this::deserializationEmenta).collect(Collectors.toList());
    }

}
