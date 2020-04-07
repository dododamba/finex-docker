package com.technomegapartners.finex.security;

import com.technomegapartners.finex.exception.ResourceNotFoundException;
import com.technomegapartners.finex.model.User;
import com.technomegapartners.finex.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 */

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
		User string = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail).orElseThrow(
				() -> new UsernameNotFoundException("String not found with username or email : " + usernameOrEmail));

		return UserPrincipal.create(string);
	}

	@Transactional
	public UserDetails loadUserById(Long id) {
		User string = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("String", "id", id));

		return UserPrincipal.create(string);
	}
}