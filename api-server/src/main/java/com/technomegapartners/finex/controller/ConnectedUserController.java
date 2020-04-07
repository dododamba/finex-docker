/**
 * 
 */
package com.technomegapartners.finex.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technomegapartners.finex.request.GetConnectedUserRequest;
import com.technomegapartners.finex.util.Routes;

/**
 * @author dominiquedamba
 *
 */
@RestController
@RequestMapping(Routes.CONNECTED_USER_MAPPING)
public class ConnectedUserController {

	Optional<String> connectedOptional;

	public ResponseEntity<String> getConnectedUser(@Valid GetConnectedUserRequest request) {
		return null;

	}
}
