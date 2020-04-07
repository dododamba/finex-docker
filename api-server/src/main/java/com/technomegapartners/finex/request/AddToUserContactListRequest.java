/**
 * 
 */
package com.technomegapartners.finex.request;

/**
 * @author dominiquedamba
 *
 */
public class AddToUserContactListRequest {

	private String ownerSlug;
	private String friendSlug;

	/**
	 * @return the ownerSlug
	 */
	public String getOwnerSlug() {
		return ownerSlug;
	}

	/**
	 * @param ownerSlug the ownerSlug to set
	 */
	public void setOwnerSlug(String ownerSlug) {
		this.ownerSlug = ownerSlug;
	}

	/**
	 * @return the friendSlug
	 */
	public String getFriendSlug() {
		return friendSlug;
	}

	/**
	 * @param friendSlug the friendSlug to set
	 */
	public void setFriendSlug(String friendSlug) {
		this.friendSlug = friendSlug;
	}

}
