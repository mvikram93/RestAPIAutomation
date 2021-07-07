package com.example.project.steps;

import com.example.project.apis.ExampleAPILogic;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import net.thucydides.core.annotations.Steps;

public class ExampleAPISteps {
	
	@Steps
	ExampleAPILogic business;
	
	String apiEndpoint;
	Response response;
	
	@Given("^the urls of the user details service with the \"([^\"]*)\"$")
	public void the_urls_of_the_user_details_service(String scenario) throws Throwable {
		apiEndpoint = business.url(scenario);
	}

	@When("^the url is hit$")
	public void the_url_is_hit() throws Throwable {
		response = business.sendGetRequest(apiEndpoint);
	}

	@Then("^validate the response status code (\\d+)$")
	public void validate_the_response_status_code(int statusCode) throws Throwable {
		business.validateStatusCode(statusCode,response);
	}

	@Then("^extract support text in the response if \"([^\"]*)\" is positive$")
	public void extract_support_text_in_the_response_if_is_positive(String testScenario) throws Throwable {
		business.extractSupportText(response,testScenario);
	}

}
