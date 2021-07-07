package com.example.project.apis;


import org.junit.Assert;


import io.restassured.RestAssured;
import io.restassured.response.Response;

import net.thucydides.core.util.EnvironmentVariables;
import net.thucydides.core.util.SystemEnvironmentVariables;

public class ExampleAPILogic {
	

	
	private static final String POSITIVE = "Positive";
	EnvironmentVariables variables = SystemEnvironmentVariables.createEnvironmentVariables();
	
	
	public String url(String scenario) {
		String url;
		if(scenario.equals(POSITIVE)) {
			url = variables.getProperty("Userdetails");
		}else {
			url= variables.getProperty("Userdetails")+"/abc";
		}
		
		System.out.println("URL: "+url);
		return url;
	}


	public Response sendGetRequest(String apiEndpoint) {
		
		return RestAssured.when().get(apiEndpoint);
		
	}


	public void validateStatusCode(int statusCode, Response response) {

		Assert.assertEquals(statusCode, response.getStatusCode());
		
	}


	public void extractSupportText(Response response,String testScenario) {
	
		if(testScenario.equals(POSITIVE)) {
		String supportText = response.getBody().jsonPath().getString("support.text");
		Assert.assertEquals("To keep ReqRes free, contributions towards server costs are appreciated!", supportText);
		}
	}


}
