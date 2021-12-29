/**
 * It will be a pity if nobody reads this😭
 */
import java.util.Scanner;

public class bamidele {

    public static void main(String[] args) {
        //Very unnecessary
        Scanner scan = new Scanner(System.in);
        System.out.println("\nThis is my story, what do you want to hear");
        System.out.println("1.The beginning, startup...");
        System.out.println("2.What I've done soo far");
        System.out.println("3.Where I am now");
        System.out.println("4.Where I want to be");
        System.out.print("Type in here: ");
        int ans = scan.nextInt();
        if(ans == 1) {
            System.out.println("Three years ago, the holiday of js3.I joined a programming camp,used Arduino and stuff and I loved it");
        }else if(ans == 2) {
            System.out.println("Game dev. with Unity, A bit a Hacking with Kali Linux, Learnt some cmd/powershell commands(even though that's not code");
            System.out.println("I also tried HTML(I didn't like it), got involved in Processing(Graphics in programming)");
            System.out.println("And some other stuff sha");
        }else if(ans == 3) {
            System.out.println("I am learning the syntax of Java, I recently made a model supermarket in Java");
            System.out.println("I'm also learning sql");
        }else if(ans == 4){
            System.out.println("I want to learn mobile app dev. with a framework");
        }else{
            System.out.println("This option does not exist");
        }
        scan.close();
       
    }
}
//This simply shows that I don't stick to one thing