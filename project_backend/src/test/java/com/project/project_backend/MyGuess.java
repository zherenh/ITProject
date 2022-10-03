package com.project.project_backend;

import java.util.Scanner;

public class MyGuess {
    public static void main(String[] args) {
        Game game = new Game();
        //设置答案
        game.setAnswer(100);
        //猜数字范围
        game.start(1000);
        Scanner scanner = new Scanner(System.in);
        System.out.print("猜:");
        long num = scanner.nextLong();
        while (!game.guess(num)){
               System.out.print("猜:");
            num= scanner.nextLong();
        }
    }
}
