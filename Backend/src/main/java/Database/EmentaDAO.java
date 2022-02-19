package Database;

import Controller.Controller;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


public class EmentaDAO {

    private static String createEmentaEntry(String name, String link, String recipe){
        return name + Controller.parseChar + link + Controller.parseChar + recipe;
    }

    /**
     *
     * @return List containing name of ementa, photo link and the step-by-step guide.
     */
    public static List<String> getEmentas(){
        // List with all the entries
        List<String> entries = new ArrayList<>();






        
        try {
            Connection c = ConnectionPool.getConnection();
            Statement st = ConnectionPool.getStatement(c);
            ResultSet rs = st.executeQuery("SELECT * FROM Ementa;");

            while(rs.next()){
                String ementaEntry = createEmentaEntry(rs.getString("Nome"), rs.getString("Fotografia"), rs.getString("Receita"));
                entries.add(ementaEntry);
            }

            ConnectionPool.close(st, c);
            return entries;
        }
        catch (SQLException e) {
            e.printStackTrace();
        }

        return entries;
    }

    /**
     *
     * @param ementa
     * @return List of ingredientes from a recipe.
     */
    public static List<String> getIngredientesEmenta(String ementa){
        // List with all the ingredientes
        List<String> ingredientes = new ArrayList<>();

        try {
            Connection c = ConnectionPool.getConnection();
            Statement st = ConnectionPool.getStatement(c);
            ResultSet rs = st.executeQuery("SELECT IDIngrediente FROM ReceitaIngrediente where nomeReceita = '" + ementa + "';");

            List<Integer> idIngrediente = new ArrayList<>();
            while(rs.next()){
                idIngrediente.add(rs.getInt("IDIngrediente"));
            }

            for(int id : idIngrediente) {
                rs = st.executeQuery("SELECT nomeIngrediente FROM Ingredientes where IDIngrediente = '" + id + "';");
                rs.next();
                ingredientes.add(rs.getString("nomeIngrediente"));
            }

            ConnectionPool.close(st, c);
            return ingredientes;
        }
        catch (SQLException e) {
            e.printStackTrace();
        }

        return ingredientes;
    }


    // TODO: DELETE
    public static void main(String[] args) {
        List<String> ing = getIngredientesEmenta("Bacalhau com Natas");
        for(String ementa : ing)
            System.out.println(ementa);
    }



}
