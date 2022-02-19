package Database;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class ConnectionPool {
    private static HikariDataSource ds = createDS();
    private static final String url = "jdbc:mysql://localhost:3306/mydb";
    private static final String username = "root";
    private static final String password = "dockermysql";


    public static HikariDataSource createDS(){
        HikariConfig config = new HikariConfig();
        config.setDriverClassName("com.mysql.jdbc.Driver");
        config.setMaxLifetime(900000);
        config.setIdleTimeout(30000);
        config.setConnectionTimeout(30000);
        config.setMaximumPoolSize(20);
        config.setJdbcUrl(url);
        config.setUsername(username);
        config.setPassword(password);
        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");

        return new HikariDataSource(config);
    }

    public static Connection getConnection() throws SQLException {
        return ds.getConnection();

    }
    //Creates statement to executeQuery
    public static Statement getStatement(Connection c) throws SQLException {
        return c.createStatement();
    }


    ///Closes statement and connection.
    public static void close(Statement st,Connection c) throws SQLException {
        st.close();
        c.close();
    }

    ///Closes statement
    public static void closeStatement(Statement st) throws SQLException {
        st.close();

    }
}