package utilities;

import pojos.RegistrantPojo;

import java.io.*;
import java.util.List;

public class WriteToTxt {

    public static void saveDataInFileWithPojo(String fileName, List<RegistrantPojo> registrant) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i = 0; i < registrant.size(); i++) {
                writer.append(registrant.get(i).getFirstName() + " , " + registrant.get(i).getLastName() + " , " + registrant.get(i).getSsn() + "\n");
            }
            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveDataInFileWithRequest(RegistrantPojo registrant) {
        try {
            File myObj = new File("US01_registrant_info.txt");
            if (myObj.createNewFile()) {
                System.out.println("File created: " + myObj.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        FileWriter fw = null;
        PrintWriter pw = null;
        try {
            fw = new FileWriter("US01_registrant_info.txt", true);
            pw = new PrintWriter(fw);

            pw.write(registrant.toString() + "\n");
            pw.close();
            fw.close();
        } catch (IOException e) {
            System.err.println("Error while writing to file: " +
                    e.getMessage());
        }
    }


}
