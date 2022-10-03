package com.project.project_backend;

public class Game {
    private long answer;
    public void start(int range){
        System.out.println("数字在1~"+range+"之间");
    }
public boolean guess(long num){
    if(num>answer){
        System.out.println("比"+num+"小");
    return false;
    }else if(num<answer) {
        System.out.println("比"+num+"大");
        return false;
    }else {
        System.out.println("猜对了");
    return true;
    }
}

    public void setAnswer(long answer) {
        this.answer = answer;
    }
}
