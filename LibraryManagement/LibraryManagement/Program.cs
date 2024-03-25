using System;
using System.Data.SQLite;
using CsvHelper;
using System.Globalization;
using System.IO;
using System.Linq;

namespace LibraryManagementConsoleApp
{
    public class Kolcsonzo
    {
        public string Nev { get; set; }
        public DateTime SzuletesiDatum { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            string kolcsonzokCsvPath = "C:\\Users\\diak\\Desktop\\Dolgozat - 2024-03-25\\Forras\\csv\\Kolcsonzok.csv";
            string kolcsonzesekCsvPath = "C:\\Users\\diak\\Desktop\\Dolgozat - 2024-03-25\\Forras\\csv\\Kolcsonzesek.csv";

            CreateAndImportData(kolcsonzokCsvPath, kolcsonzesekCsvPath);
        }

        static void CreateAndImportData(string kolcsonzokCsvPath, string kolcsonzesekCsvPath)
        {
            string dbPath = "LibraryDatabase.db";
            SQLiteConnection.CreateFile(dbPath);

            using (var connection = new SQLiteConnection($"Data Source={dbPath};Version=3;"))
            {
                connection.Open();

                string createKolcsonzokTableQuery = @"CREATE TABLE Kolcsonzok (
                                                        id INTEGER PRIMARY KEY,
                                                        nev TEXT,
                                                        szulIdo TEXT)";
                ExecuteNonQuery(connection, createKolcsonzokTableQuery);

                string createKolcsonzesekTableQuery = @"CREATE TABLE Kolcsonzesek (
                                                            id INTEGER PRIMARY KEY,
                                                            kolcsonzokId INTEGER,
                                                            iro TEXT,
                                                            mufaj TEXT,
                                                            cim TEXT)";
                ExecuteNonQuery(connection, createKolcsonzesekTableQuery);

                using (var reader = new StreamReader(kolcsonzokCsvPath))
                using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
                {
                    var records = csv.GetRecords<Kolcsonzo>().ToList();
                    foreach (var record in records)
                    {
                        string insertQuery = $"INSERT INTO Kolcsonzok (nev, szulIdo) VALUES ('{record.Nev}', '{record.SzuletesiDatum.ToString("yyyy-MM-dd")}')";
                        ExecuteNonQuery(connection, insertQuery);
                    }
                }

                using (var reader = new StreamReader(kolcsonzesekCsvPath))
                using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
                {
                    var records = csv.GetRecords<dynamic>().ToList();
                    foreach (var record in records)
                    {
                        string insertQuery = $"INSERT INTO Kolcsonzesek (kolcsonzokId, iro, mufaj, cim) VALUES ({record.KolcsonzoId}, '{record.Író}', '{record.Műfaj}', '{record.Cím}')";
                        ExecuteNonQuery(connection, insertQuery);
                    }
                }

                Console.WriteLine("Sikeresen importált sorok száma:");
                Console.WriteLine($"Kolcsonzok: {GetRowCount(connection, "Kolcsonzok")}");
                Console.WriteLine($"Kolcsonzesek: {GetRowCount(connection, "Kolcsonzesek")}");
            }
        }

        static void ExecuteNonQuery(SQLiteConnection connection, string query)
        {
            using (var command = new SQLiteCommand(query, connection))
            {
                command.ExecuteNonQuery();
            }
        }

        static int GetRowCount(SQLiteConnection connection, string tableName)
        {
            string query = $"SELECT COUNT(*) FROM {tableName}";
            using (var command = new SQLiteCommand(query, connection))
            {
                return Convert.ToInt32(command.ExecuteScalar());
            }
        }
    }
}


