package Ementa;

import java.io.Serializable;

/// Informação basica sobre uma ementa.
public class EmentaInfo implements Serializable {

    /// O nome desta refeição.
    private String nomeEmenta;

    /// Onde está alojada a fotografia desta receita.
    private String fotografia;

    public EmentaInfo(String nomeEmenta, String fotografia){
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
        return new EmentaInfo(nomeEmenta, fotografia);
    }
}
