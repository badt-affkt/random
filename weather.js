import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Weather {
    public static void main(String[] args) {
        try {
            // Your API key from OpenWeatherMap
            String apiKey = "YOUR_API_KEY";

            // City for which you want to get the weather
            String city = "Moscow";

            // Forming the URL for the request
            String apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

            // Creating a URL object and establishing a connection
            URL url = new URL(apiUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            // Reading the response from the server
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            StringBuilder response = new StringBuilder();
            String inputLine;
            while ((inputLine = reader.readLine()) != null) {
                response.append(inputLine);
            }
            reader.close();

            // Converting the response to a JSON object
            JSONObject jsonResponse = new JSONObject(response.toString());

            // Getting weather information from the JSON object
            JSONObject mainObject = jsonResponse.getJSONObject("main");
            double temperature = mainObject.getDouble("temp");
            double humidity = mainObject.getDouble("humidity");

            System.out.println("Temperature: " + temperature + " K");
            System.out.println("Humidity: " + humidity + "%");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
