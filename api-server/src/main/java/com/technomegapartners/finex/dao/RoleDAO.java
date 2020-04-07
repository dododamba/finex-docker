/**
 * 
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import com.technomegapartners.finex.model.Role;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface RoleDAO {
	Optional<Role> showByNom(String nom);

	Role getOne(String nom);

	Collection<Role> all();

	Optional<Role> show(String slug);

	void update(Role role);

	void store(Role role);

	void delete(Role role);

}
