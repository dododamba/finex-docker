/**
 * 
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.User;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface EmployeDao {
	Employe showBySlug(String slug);

	Employe getOneByNom(String nom, String prenom);

	Collection<Employe> all();

	Optional<Employe> show(String slug);

	void update(Employe employe);

	void store(Employe employe);

	void delete(Employe employe);

	Collection<Employe> doNotHaveUserAccount();

	Optional<Employe> doNotHaveAccount(User user);
	Optional<Employe> getEmployeByUserAccount(User user);

}
