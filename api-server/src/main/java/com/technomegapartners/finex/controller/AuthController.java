package com.technomegapartners.finex.controller;

import com.technomegapartners.finex.model.User;
import com.technomegapartners.finex.request.LoginRequest;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.response.JwtAuthenticationResponse;
import com.technomegapartners.finex.security.JwtTokenProvider;
import com.technomegapartners.finex.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import java.util.HashMap;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenProvider tokenProvider;

	private Optional<User> loggedUser;

	@Autowired
	private UserService dao;

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsernameOrEmail(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = tokenProvider.generateToken(authentication);
		String logginAttempt = loginRequest.getUsernameOrEmail();

		/**
		 * Recuperation du user connecté
		 * 
		 * Si la chaine passé est une email
		 */
		Pattern pattern = Pattern.compile("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}");
		Matcher mat = pattern.matcher(logginAttempt);

		if (mat.matches()) {
			loggedUser = dao.getUserByEmail(logginAttempt);
		} else {
			loggedUser = dao.getUserByUserName(logginAttempt);
		}

		/**
		 * Serialisation du JWT
		 */
		JwtAuthenticationResponse jwtResponse = new JwtAuthenticationResponse(jwt);

		/**
		 * Map du user connecté
		 * 
		 */

		HashMap<String, Object> objMap = new HashMap<String, Object>();

		objMap.put("user", loggedUser);
		objMap.put("jwt", jwtResponse);

		return ResponseEntity.ok(new JsonObjectResponse(true, "Identifiant vefirié avec succès !", objMap));

	}

}
