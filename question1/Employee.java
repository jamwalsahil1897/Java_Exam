package question1;
import java.util.Scanner;
public class Employee {
	private String id = null;
	private String name = null;
	private String addrs = null;
	private int sal = 0;
	
	void getData() {
		@SuppressWarnings("resource")
		Scanner sc = new Scanner(System.in);
		System.out.println("Employee ID:");
		id = sc.next();
		System.out.println("Employee_Name:");
		name = sc.next();
		System.out.println("Employee_Address:");
		addrs = sc.next();
		System.out.println("Employee_Salary:");
		sal = sc.nextInt();
	}
	
	void displayData() {
		System.out.println("Employee ID: "+id);
		System.out.println("Employee_Name:"+name);
		System.out.println("Employee_Address:"+addrs);
		System.out.println("Employee_Salary:"+sal);
	}
}
