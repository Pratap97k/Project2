package com.example.coronaaAPI;

import java.util.Objects;

public class coronapatient {
String name;
	int age;
	int oygenlevel;
	String gender;
	public coronapatient(String name, int age, int oygenlevel, String gender) {
		super();
		this.name = name;
		this.age = age;
		this.oygenlevel = oygenlevel;
		this.gender = gender;
	}
	public coronapatient() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "coronapatient [name=" + name + ", age=" + age + ", oygenlevel=" + oygenlevel + ", gender=" + gender
				+ "]";
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getOygenlevel() {
		return oygenlevel;
	}
	public void setOygenlevel(int oygenlevel) {
		this.oygenlevel = oygenlevel;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@Override
	public int hashCode() {
		return Objects.hash(age, gender, name, oygenlevel);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		coronapatient other = (coronapatient) obj;
		return age == other.age && Objects.equals(gender, other.gender) && Objects.equals(name, other.name)
				&& oygenlevel == other.oygenlevel;
	}
	

}
