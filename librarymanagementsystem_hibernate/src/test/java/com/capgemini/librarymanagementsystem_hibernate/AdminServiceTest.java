package com.capgemini.librarymanagementsystem_hibernate;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.capgemini.librarymanagementsystem_hibernate.dto.BookDetails;
import com.capgemini.librarymanagementsystem_hibernate.dto.BookIssueDetails;
import com.capgemini.librarymanagementsystem_hibernate.dto.RequestDetails;
import com.capgemini.librarymanagementsystem_hibernate.dto.UserDetails;
import com.capgemini.librarymanagementsystem_hibernate.service.AdminService;
import com.capgemini.librarymanagementsystem_hibernate.service.AdminServiceImplementation;

public class AdminServiceTest {
private AdminService service = new AdminServiceImplementation();
	
@Test
public void testAddBookValid() {
	BookDetails bean = new BookDetails();
	bean.setBookId(100000);
	bean.setBookName("Java");
	bean.setBookAuthor("James");
	bean.setBookCategory("Programing");
	bean.setBookPublisher("Arihent");
	boolean check = service.addBook(bean);
	Assertions.assertTrue(check);
}
@Test
public void testAddBookInvalid() {
	BookDetails bean = new BookDetails();
	bean.setBookId(100000);
	bean.setBookName("Java");
	bean.setBookAuthor("James");
	bean.setBookCategory("Programing");
	bean.setBookPublisher("Arihent");
	boolean check = service.addBook(bean);
	Assertions.assertFalse(check);	
} 

@Test
public void testRemoveBookValid() {
	boolean check = service.removeBook(100000);
	Assertions.assertTrue(check);
}

@Test
public void testRemoveBookInvalid() {
	boolean check = service.removeBook(100001);
	Assertions.assertFalse(check);
}

@Test
public void testUpdateBookValid() {
	BookDetails book = new BookDetails();
	book.setBookId(100000);
	book.setBookName("Maths");
	boolean check = service.updateBook(book);
	Assertions.assertTrue(check);
}

@Test
public void testUpdateBookInvalid() {
	BookDetails book = new BookDetails();
	book.setBookId(100002);
	book.setBookName("Maths");
	boolean check = service.updateBook(book);
	Assertions.assertFalse(check);
}

@Test
public void testIssueBookValid() {
	boolean check = service.issueBook(100000, 111111);
	Assertions.assertTrue(check);
}

@Test
public void testIssueBookInvalid() {
	boolean check = service.issueBook(100002, 111111);
	Assertions.assertFalse(check);
}

@Test
public void testBookHistoryDetailsValid() {
	List<Integer> info = service.bookHistoryDetails(100002);
	Assertions.assertNotNull(info);
	Assertions.assertEquals(1, info.size());		
}

@Test
public void testBookHistoryDetailsInvalid() {
	List<Integer> info = service.bookHistoryDetails(100003);
	Assertions.assertNotNull(info);
	Assertions.assertNotEquals(0, info.size());		
}


@Test
public void testShowRequestsValid() {
	List<RequestDetails> info = service.showRequests();
	Assertions.assertNotNull(info);
	Assertions.assertEquals(1, info.size());		
}

@Test
public void testShowRequestsInvalid() {
	List<RequestDetails> info = service.showRequests();
	Assertions.assertNotNull(info);
	Assertions.assertNotEquals(2, info.size());		
}

@Test
public void testShowIssuedBooksValid() {
	List<BookIssueDetails> info = service.showIssuedBooks();
	Assertions.assertNotNull(info);
	Assertions.assertEquals(1, info.size());		
}

@Test
public void testShowIssuedBooksInvalid() {
	List<BookIssueDetails> info = service.showIssuedBooks();
	Assertions.assertNotNull(info);
	Assertions.assertNotEquals(2, info.size());		
}

@Test
public void testShowUsersValid() {
	List<UserDetails> info = service.showUsers();
	Assertions.assertNotNull(info);
	Assertions.assertEquals(4, info.size());		
}

@Test
public void testShowUsersInvalid() {
	List<UserDetails> info = service.showUsers();
	Assertions.assertNotNull(info);
	Assertions.assertNotEquals(2, info.size());		
}
}
