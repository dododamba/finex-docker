package com.technomegapartners.finex.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

public class CreateUserRequest {
	@NotEmpty
	@Email(message = "Entre une adresse email valid !")
	private String email;
	@NotEmpty(message = "Selectioner un employe")
	private String employeSlug;
	@NotEmpty(message = "Selection un  role")
	private String role;

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the employeSlug
	 */
	public String getEmployeSlug() {
		return employeSlug;
	}

	/**
	 * @param employeSlug the employeSlug to set
	 */
	public void setEmployeSlug(String employeSlug) {
		this.employeSlug = employeSlug;
	}

	/**
	 * @return the role
	 */
	public String getRole() {
		return role;
	}

	/**
	 * @param role the role to set
	 */
	public void setRole(String role) {
		this.role = role;
	}

}
