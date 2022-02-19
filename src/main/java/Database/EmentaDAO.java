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



    // TODO: DELETE
    public static void main(String[] args) {
        List<String> entries = getEmentas();
        for(String ementa : entries)
            System.out.println(ementa);
    }



}
