package com.capgemini.librarymanagementsystem_hibernate.service;

import java.util.List;

import com.capgemini.librarymanagementsystem_hibernate.dao.AdminUserDAO;
import com.capgemini.librarymanagementsystem_hibernate.dto.BookDetails;
import com.capgemini.librarymanagementsystem_hibernate.dto.UserDetails;
import com.capgemini.librarymanagementsystem_hibernate.factory.LibraryFactory;

public class AdminUserServiceImplementation implements AdminUserService{
	private AdminUserDAO dao = LibraryFactory.getAdminUserDao();

	@Override
	public boolean register(UserDetails user) {
		return dao.register(user);
	}

	@Override
	public UserDetails login(String email, String password) {
		return dao.login(email, password);
	}

	@Override
	public List<BookDetails> searchBookById(int bookId) {
		return dao.searchBookById(bookId);
	}

	@Override
	public List<BookDetails> searchBookByTitle(String bookName) {
		return dao.searchBookByTitle(bookName);
	}

	@Override
	public List<BookDetails> searchBookByAuthor(String bookAuthor) {
		return dao.searchBookByAuthor(bookAuthor);
	}

	@Override
	public List<BookDetails> getBooksInfo() {
		return dao.getBooksInfo();
	}

	@Override
	public boolean updatePassword(int id, String password, String newPassword, String role) {
		return dao.updatePassword(id, password, newPassword, role);
	}
	
}
