package com.ys.game;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Game {

	private @Id @GeneratedValue Long id;
	private String firstName;
	private String lastName;
	private String description;

	private Game() {}

	public Game(String firstName, String lastName, String description) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.description = description;
	}
}