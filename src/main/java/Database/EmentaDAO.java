package Database;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class EmentaDAO {



    // TODO: DELETE
    public static void main(String[] args) {
        try {
            Connection c = ConnectionPool.getConnection();
            Statement st = ConnectionPool.getStatement(c);
            ResultSet rs = st.executeQuery("SELECT * FROM Ementa;");

            rs.next();

            // TEST-ONLY
            System.out.println(rs.getString("Nome"));
            ConnectionPool.close(st, c);

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }



}
