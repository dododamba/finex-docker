
/**
 * 
 */
package com.technomegapartners.finex.request;

import com.technomegapartners.finex.model.CatarteristiqueTechnique;


/**
 * @author dominiquedamba
 *
 */


public class CaracteristiqueToProjectRequest {
   private CatarteristiqueTechnique[] caracteristiqueTechniques;
   private String projetSlug;

   public String getProjetSlug() {
    return projetSlug;
}

public void setProjetSlug(String projetSlug) {
    this.projetSlug = projetSlug;
}




   public CatarteristiqueTechnique[] getCaracteristiqueTechniques() {
    return caracteristiqueTechniques;
}

public void setCaracteristiqueTechniques(CatarteristiqueTechnique[] caracteristiqueTechniques) {
    this.caracteristiqueTechniques = caracteristiqueTechniques;
}



}