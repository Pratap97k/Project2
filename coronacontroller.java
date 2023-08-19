package com.example.coronaaAPI;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("covid")
public class coronacontroller {
	@RequestMapping("welcome")
	public String welcomeMessage()
	{
		return "welcome to springboot";
	}
	@RequestMapping("statelist")
	public ArrayList<String> statelist()
	{
		ArrayList<String> a1=new ArrayList<String>();
		a1.add("delhi");
		a1.add("karnatka");
		a1.add("maharashtra");
		return a1;
	}
	
	@RequestMapping("states")
	public ArrayList<String> statelist1(){
		coronaservice cs=new coronaservice();
		ArrayList<String> statelist=cs.statelist();
		return statelist;
		
	}
	@RequestMapping("paitentdetail")
	public coronapatient paitentdetail()
	{
		coronaservice cs=new coronaservice();
		coronapatient cp=new coronapatient();
		return cp;
	}
}
