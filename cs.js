import java.util.Scanner;

public class Greeting {
    public static void main(String[] args) {
        // Создаем объект Scanner для считывания ввода пользователя
        Scanner scanner = new Scanner(System.in);
        
        // Запрашиваем у пользователя ввод его имени
        System.out.print("Пожалуйста, введите ваше имя: ");
        String name = scanner.nextLine();
        
        // Выводим приветствие с использованием введенного имени
        System.out.println("Привет, " + name + "! Добро пожаловать!");
        
        // Закрываем Scanner
        scanner.close();
    }
}
