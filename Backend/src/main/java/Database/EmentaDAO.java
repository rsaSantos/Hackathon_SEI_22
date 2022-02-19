package Database;

import Controller.Controller;
import Ementa.Ingrediente;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


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
    public static List<Ingrediente> getIngredientesEmenta(String ementa){
        // List with all the ingredientes
        List<Ingrediente> ingredientes = new ArrayList<>();



        try {
            Connection c = ConnectionPool.getConnection();
            Statement st = ConnectionPool.getStatement(c);
            ResultSet rs = st.executeQuery("SELECT IDIngrediente FROM ReceitaIngrediente where nomeReceita = '" + ementa + "';");

            // (key=IDIngrediente,value=quantity)
            Map<Integer, Integer> idIngrediente = new HashMap<>();
            while(rs.next()){
                idIngrediente.put(rs.getInt("IDIngrediente"), rs.getInt("Quantidade"));
            }

            for (Map.Entry<Integer,Integer> entry : idIngrediente.entrySet()) {
                rs = st.executeQuery("SELECT nomeIngrediente FROM Ingredientes where IDIngrediente = '" + entry.getKey() + "';");
                rs.next();
                ingredientes.add(new Ingrediente(rs.getString("nomeIngrediente"), entry.getValue(), rs.getString("Unidade")));
            }

            ConnectionPool.close(st, c);
            return ingredientes;
        }
        catch (SQLException e) {
            e.printStackTrace();
        }

        return ingredientes;
    }



}
