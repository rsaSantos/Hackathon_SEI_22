package Ementa;

/// Informação basica sobre uma ementa.
public class EmentaInfo {

    /// Onde está alojada a fotografia desta receita.
    private String fotografia;
    /// O nome desta refeição.
    private String nomeEmenta;

    public EmentaInfo(String fotografia,String nomeEmenta){
        this.fotografia = fotografia;
        this.nomeEmenta = nomeEmenta;
    }

    public EmentaInfo clone() {
        return new EmentaInfo(fotografia,nomeEmenta);
    }
}
