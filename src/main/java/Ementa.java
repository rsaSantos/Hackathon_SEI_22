


public class Ementa {

    private final String nomeEmenta;
    private final String receita;
    private final String fotografia;

    public Ementa(String ementaInfo){
        // Database output: name;photo;recipe
        String[] parsedInfo = ementaInfo.split(";");
        if(parsedInfo.length > 2){
            this.nomeEmenta = parsedInfo[0];
            this.receita = parsedInfo[1];
            this.fotografia = parsedInfo[2];
        }
    }





}
