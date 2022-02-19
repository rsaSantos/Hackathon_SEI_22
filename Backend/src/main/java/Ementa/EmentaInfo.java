package Ementa;

import java.io.Serializable;

/// Informação basica sobre uma ementa.
public class EmentaInfo implements Serializable {

    /// Onde está alojada a fotografia desta receita.
    private String fotografia;
    /// O nome desta refeição.
    private String nomeEmenta;

    public EmentaInfo(String fotografia,String nomeEmenta){
        this.fotografia = fotografia;
        this.nomeEmenta = nomeEmenta;
    }

    public String getFotografia() {
        return fotografia;
    }

    public void setFotografia(String fotografia) {
        this.fotografia = fotografia;
    }

    public String getNomeEmenta() {
        return nomeEmenta;
    }

    public void setNomeEmenta(String nomeEmenta) {
        this.nomeEmenta = nomeEmenta;
    }

    public EmentaInfo clone() {
        return new EmentaInfo(fotografia,nomeEmenta);
    }
}
