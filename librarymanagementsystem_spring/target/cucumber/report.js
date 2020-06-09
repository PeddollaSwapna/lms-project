$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adminlogin.feature");
formatter.feature({
  "line": 1,
  "name": "Admin Login",
  "description": "",
  "id": "admin-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Admin login with given details",
  "description": "",
  "id": "admin-login;admin-login-with-given-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Admin is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin enters \u003cemail\u003e,\u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin should be logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "admin-login;admin-login-with-given-details;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 10,
      "id": "admin-login;admin-login-with-given-details;;1"
    },
    {
      "cells": [
        "\"swapnar804@gmail.com\"",
        "\"Chinni@123\""
      ],
      "line": 11,
      "id": "admin-login;admin-login-with-given-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Admin login with given details",
  "description": "",
  "id": "admin-login;admin-login-with-given-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Admin is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin enters \"swapnar804@gmail.com\",\"Chinni@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_Login_page()"
});
formatter.result({
  "duration": 412320195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swapnar804@gmail.com",
      "offset": 14
    },
    {
      "val": "Chinni@123",
      "offset": 37
    }
  ],
  "location": "AdminSteps.admin_enters(String,String)"
});
formatter.result({
  "duration": 10002396,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.admin_should_be_logged_in()"
});
formatter.result({
  "duration": 12370068686,
  "status": "passed"
});
formatter.uri("adminoperations.feature");
formatter.feature({
  "line": 1,
  "name": "Admin can add,delete,update,issue books and able to view books",
  "description": "",
  "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Admin should be able to add books",
  "description": "",
  "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-add-books",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Admin is on adding book page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Admin enters \u003cbookName\u003e,\u003cauthorName\u003e,\u003cpublisherName\u003e,\u003cbookCategory\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Book \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-add-books;",
  "rows": [
    {
      "cells": [
        "bookName",
        "authorName",
        "publisherName",
        "bookCategory",
        "status"
      ],
      "line": 15,
      "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-add-books;;1"
    },
    {
      "cells": [
        "\"datastructure\"",
        "\"jagadeesh\"",
        "\"ps publications\"",
        "\"data\"",
        "\"Added Successfully\""
      ],
      "line": 16,
      "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-add-books;;2"
    },
    {
      "cells": [
        "\"mpmc\"",
        "\"radha\"",
        "\"peters\"",
        "\"ports\"",
        "\"Added Successfully\""
      ],
      "line": 17,
      "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-add-books;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Admin is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin enters \"swapnar804@gmail.com\",\"Chinni@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_Login_page()"
});
formatter.result({
  "duration": 94203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swapnar804@gmail.com",
      "offset": 14
    },
    {
      "val": "Chinni@123",
      "offset": 37
    }
  ],
  "location": "AdminSteps.admin_enters(String,String)"
});
formatter.result({
  "duration": 219124,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.admin_should_be_logged_in()"
});
formatter.result({
  "duration": 783643725,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Admin should be able to add books",
  "description": "",
  "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-add-books;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Admin is on adding book page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Admin enters \"datastructure\",\"jagadeesh\",\"ps publications\",\"data\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Book \"Added Successfully\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_adding_book_page()"
});
formatter.result({
  "duration": 109562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "datastructure",
      "offset": 14
    },
    {
      "val": "jagadeesh",
      "offset": 30
    },
    {
      "val": "ps publications",
      "offset": 42
    },
    {
      "val": "data",
      "offset": 60
    }
  ],
  "location": "AdminSteps.admin_enters(String,String,String,String)"
});
formatter.result({
  "duration": 396778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added Successfully",
      "offset": 6
    }
  ],
  "location": "AdminSteps.book(String)"
});
formatter.result({
  "duration": 1412735917,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Admin is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin enters \"swapnar804@gmail.com\",\"Chinni@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_Login_page()"
});
formatter.result({
  "duration": 132088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swapnar804@gmail.com",
      "offset": 14
    },
    {
      "val": "Chinni@123",
      "offset": 37
    }
  ],
  "location": "AdminSteps.admin_enters(String,String)"
});
formatter.result({
  "duration": 268785,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.admin_should_be_logged_in()"
});
formatter.result({
  "duration": 512875583,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Admin should be able to add books",
  "description": "",
  "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-add-books;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Admin is on adding book page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Admin enters \"mpmc\",\"radha\",\"peters\",\"ports\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Book \"Added Successfully\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_adding_book_page()"
});
formatter.result({
  "duration": 57340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mpmc",
      "offset": 14
    },
    {
      "val": "radha",
      "offset": 21
    },
    {
      "val": "peters",
      "offset": 29
    },
    {
      "val": "ports",
      "offset": 38
    }
  ],
  "location": "AdminSteps.admin_enters(String,String,String,String)"
});
formatter.result({
  "duration": 327662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added Successfully",
      "offset": 6
    }
  ],
  "location": "AdminSteps.book(String)"
});
formatter.result({
  "duration": 1695391023,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Admin is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin enters \"swapnar804@gmail.com\",\"Chinni@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_Login_page()"
});
formatter.result({
  "duration": 122362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swapnar804@gmail.com",
      "offset": 14
    },
    {
      "val": "Chinni@123",
      "offset": 37
    }
  ],
  "location": "AdminSteps.admin_enters(String,String)"
});
formatter.result({
  "duration": 189430,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.admin_should_be_logged_in()"
});
formatter.result({
  "duration": 416298217,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Admin should be able to remove books",
  "description": "",
  "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-remove-books",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Admin is on removing book page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Admin enters 13202",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Book deleted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_removing_book_page()"
});
formatter.result({
  "duration": 79355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13202",
      "offset": 13
    }
  ],
  "location": "AdminSteps.admin_enters(int)"
});
formatter.result({
  "duration": 2161546,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.book_deleted_successfully()"
});
formatter.result({
  "duration": 679555220,
  "error_message": "org.opentest4j.AssertionFailedError: expected: \u003ctrue\u003e but was: \u003cfalse\u003e\r\n\tat org.junit.jupiter.api.AssertionUtils.fail(AssertionUtils.java:55)\r\n\tat org.junit.jupiter.api.AssertTrue.assertTrue(AssertTrue.java:40)\r\n\tat org.junit.jupiter.api.AssertTrue.assertTrue(AssertTrue.java:35)\r\n\tat org.junit.jupiter.api.Assertions.assertTrue(Assertions.java:162)\r\n\tat com.capgemini.librarymanagementsystem_spring.stepdefinitions.AdminSteps.book_deleted_successfully(AdminSteps.java:109)\r\n\tat ✽.Then Book deleted successfully(adminoperations.feature:22)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Admin is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin enters \"swapnar804@gmail.com\",\"Chinni@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_Login_page()"
});
formatter.result({
  "duration": 114170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swapnar804@gmail.com",
      "offset": 14
    },
    {
      "val": "Chinni@123",
      "offset": 37
    }
  ],
  "location": "AdminSteps.admin_enters(String,String)"
});
formatter.result({
  "duration": 169463,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.admin_should_be_logged_in()"
});
formatter.result({
  "duration": 618270641,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Admin should be able to view books",
  "description": "",
  "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-view-books",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Admin is on  viewing books page based on names",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin enters \"history\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "show books based on name",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_viewing_books_page_based_on_names()"
});
formatter.result({
  "duration": 105978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "history",
      "offset": 14
    }
  ],
  "location": "AdminSteps.admin_enters(String)"
});
formatter.result({
  "duration": 284656,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.show_books_based_on_name()"
});
formatter.result({
  "duration": 432289149,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Admin is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin enters \"swapnar804@gmail.com\",\"Chinni@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_Login_page()"
});
formatter.result({
  "duration": 94715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swapnar804@gmail.com",
      "offset": 14
    },
    {
      "val": "Chinni@123",
      "offset": 37
    }
  ],
  "location": "AdminSteps.admin_enters(String,String)"
});
formatter.result({
  "duration": 204789,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.admin_should_be_logged_in()"
});
formatter.result({
  "duration": 432179076,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Admin should be able to view books",
  "description": "",
  "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-view-books",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Admin is on  viewing books page based on author Name",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Admin enters author name \"rajesh\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "show books based on  author name",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_viewing_books_page_based_on_author_Name()"
});
formatter.result({
  "duration": 80892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajesh",
      "offset": 26
    }
  ],
  "location": "AdminSteps.admin_enters_author_name(String)"
});
formatter.result({
  "duration": 140793,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.show_books_based_on_author_name()"
});
formatter.result({
  "duration": 549926481,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Admin is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin enters \"swapnar804@gmail.com\",\"Chinni@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_Login_page()"
});
formatter.result({
  "duration": 103418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swapnar804@gmail.com",
      "offset": 14
    },
    {
      "val": "Chinni@123",
      "offset": 37
    }
  ],
  "location": "AdminSteps.admin_enters(String,String)"
});
formatter.result({
  "duration": 198133,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.admin_should_be_logged_in()"
});
formatter.result({
  "duration": 402884040,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Admin should be able to view books based on id",
  "description": "",
  "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-view-books-based-on-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "Admin is on  viewing books page based on book id",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Admin enters book id 14002",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "show books based on  book id",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_viewing_books_page_based_on_book_id()"
});
formatter.result({
  "duration": 79867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14002",
      "offset": 21
    }
  ],
  "location": "AdminSteps.admin_enters_book_id(int)"
});
formatter.result({
  "duration": 234995,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.show_books_based_on_book_id()"
});
formatter.result({
  "duration": 327226873,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Admin is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin enters \"swapnar804@gmail.com\",\"Chinni@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_Login_page()"
});
formatter.result({
  "duration": 92155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swapnar804@gmail.com",
      "offset": 14
    },
    {
      "val": "Chinni@123",
      "offset": 37
    }
  ],
  "location": "AdminSteps.admin_enters(String,String)"
});
formatter.result({
  "duration": 384491,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.admin_should_be_logged_in()"
});
formatter.result({
  "duration": 416373478,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Admin should be able to issue books",
  "description": "",
  "id": "admin-can-add,delete,update,issue-books-and-able-to-view-books;admin-should-be-able-to-issue-books",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "Admin is on issuing book page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Admin enters 105002,14502",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Book issued successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.admin_is_on_issuing_book_page()"
});
formatter.result({
  "duration": 351725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "105002",
      "offset": 13
    },
    {
      "val": "14502",
      "offset": 20
    }
  ],
  "location": "AdminSteps.admin_enters(int,int)"
});
formatter.result({
  "duration": 476134,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.book_issued_successfully()"
});
formatter.result({
  "duration": 920525,
  "error_message": "org.opentest4j.AssertionFailedError: expected: \u003ctrue\u003e but was: \u003cfalse\u003e\r\n\tat org.junit.jupiter.api.AssertionUtils.fail(AssertionUtils.java:55)\r\n\tat org.junit.jupiter.api.AssertTrue.assertTrue(AssertTrue.java:40)\r\n\tat org.junit.jupiter.api.AssertTrue.assertTrue(AssertTrue.java:35)\r\n\tat org.junit.jupiter.api.Assertions.assertTrue(Assertions.java:162)\r\n\tat com.capgemini.librarymanagementsystem_spring.stepdefinitions.AdminSteps.book_issued_successfully(AdminSteps.java:171)\r\n\tat ✽.Then Book issued successfully(adminoperations.feature:42)\r\n",
  "status": "failed"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration",
  "description": "",
  "id": "user-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Registration with given details",
  "description": "",
  "id": "user-registration;user-registration-with-given-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \u003cfirstName\u003e,\u003clastName\u003e,\u003cemail\u003e,\u003cpassword\u003e,\u003cmobile\u003e,\u003crole\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-registration;user-registration-with-given-details;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password",
        "mobile",
        "role",
        "status"
      ],
      "line": 10,
      "id": "user-registration;user-registration-with-given-details;;1"
    },
    {
      "cells": [
        "\"sharath\"",
        "\"babu\"",
        "\"sharath@gmail.com\"",
        "\"Sharath@123\"",
        "9876543987",
        "\"admin\"",
        "\"registered successfully\""
      ],
      "line": 11,
      "id": "user-registration;user-registration-with-given-details;;2"
    },
    {
      "cells": [
        "\"jaanu\"",
        "\"reddy\"",
        "\"jaanu@gmail.com\"",
        "\"Jaanu@123\"",
        "9809809899",
        "\"user\"",
        "\"registered successfully\""
      ],
      "line": 12,
      "id": "user-registration;user-registration-with-given-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "User Registration with given details",
  "description": "",
  "id": "user-registration;user-registration-with-given-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"sharath\",\"babu\",\"sharath@gmail.com\",\"Sharath@123\",9876543987,\"admin\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be \"registered successfully\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.user_is_on_registration_page()"
});
formatter.result({
  "duration": 107002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sharath",
      "offset": 13
    },
    {
      "val": "babu",
      "offset": 23
    },
    {
      "val": "sharath@gmail.com",
      "offset": 30
    },
    {
      "val": "Sharath@123",
      "offset": 50
    },
    {
      "val": "9876543987",
      "offset": 63
    },
    {
      "val": "admin",
      "offset": 75
    }
  ],
  "location": "AdminSteps.user_enters(String,String,String,String,int,String)"
});
formatter.result({
  "duration": 477158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "registered successfully",
      "offset": 16
    }
  ],
  "location": "AdminSteps.user_should_be(String)"
});
formatter.result({
  "duration": 877844004,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User Registration with given details",
  "description": "",
  "id": "user-registration;user-registration-with-given-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"jaanu\",\"reddy\",\"jaanu@gmail.com\",\"Jaanu@123\",9809809899,\"user\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be \"registered successfully\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.user_is_on_registration_page()"
});
formatter.result({
  "duration": 83964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jaanu",
      "offset": 13
    },
    {
      "val": "reddy",
      "offset": 21
    },
    {
      "val": "jaanu@gmail.com",
      "offset": 29
    },
    {
      "val": "Jaanu@123",
      "offset": 47
    },
    {
      "val": "9809809899",
      "offset": 58
    },
    {
      "val": "user",
      "offset": 70
    }
  ],
  "location": "AdminSteps.user_enters(String,String,String,String,int,String)"
});
formatter.result({
  "duration": 479718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "registered successfully",
      "offset": 16
    }
  ],
  "location": "AdminSteps.user_should_be(String)"
});
formatter.result({
  "duration": 951867981,
  "status": "passed"
});
formatter.uri("userlogin.feature");
formatter.feature({
  "line": 1,
  "name": "User Login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User login with given details",
  "description": "",
  "id": "user-login;user-login-with-given-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \u003cemail\u003e,\u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-login;user-login-with-given-details;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 10,
      "id": "user-login;user-login-with-given-details;;1"
    },
    {
      "cells": [
        "\"sathish@gmail.com\"",
        "\"Sathish@123\""
      ],
      "line": 11,
      "id": "user-login;user-login-with-given-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "User login with given details",
  "description": "",
  "id": "user-login;user-login-with-given-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"sathish@gmail.com\",\"Sathish@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_Login_page()"
});
formatter.result({
  "duration": 397802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sathish@gmail.com",
      "offset": 13
    },
    {
      "val": "Sathish@123",
      "offset": 33
    }
  ],
  "location": "UserSteps.user_enters(String,String)"
});
formatter.result({
  "duration": 266738,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.user_should_be_logged_in()"
});
formatter.result({
  "duration": 345117733,
  "status": "passed"
});
formatter.uri("useroperations.feature");
formatter.feature({
  "line": 1,
  "name": "User can request,return and able to view books",
  "description": "",
  "id": "user-can-request,return-and-able-to-view-books",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"sathish@gmail.com\",\"Sathish@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_Login_page()"
});
formatter.result({
  "duration": 91643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sathish@gmail.com",
      "offset": 13
    },
    {
      "val": "Sathish@123",
      "offset": 33
    }
  ],
  "location": "UserSteps.user_enters(String,String)"
});
formatter.result({
  "duration": 187894,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.user_should_be_logged_in()"
});
formatter.result({
  "duration": 502256261,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should be able to request books",
  "description": "",
  "id": "user-can-request,return-and-able-to-view-books;user-should-be-able-to-request-books",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User is on request book page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "BookId  and UserId are given 105002,14502",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Book Requested Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_request_book_page()"
});
formatter.result({
  "duration": 2210182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "105002",
      "offset": 29
    },
    {
      "val": "14502",
      "offset": 36
    }
  ],
  "location": "UserSteps.bookid_and_UserId_are_given(int,int)"
});
formatter.result({
  "duration": 290801,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.book_Requested_Successfully()"
});
formatter.result({
  "duration": 784393764,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"sathish@gmail.com\",\"Sathish@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_Login_page()"
});
formatter.result({
  "duration": 76284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sathish@gmail.com",
      "offset": 13
    },
    {
      "val": "Sathish@123",
      "offset": 33
    }
  ],
  "location": "UserSteps.user_enters(String,String)"
});
formatter.result({
  "duration": 170487,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.user_should_be_logged_in()"
});
formatter.result({
  "duration": 288891949,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to return books",
  "description": "",
  "id": "user-can-request,return-and-able-to-view-books;user-should-be-able-to-return-books",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User is on returning book page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Book  and User are given 105002,14502",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Book Returned Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_returning_book_page()"
});
formatter.result({
  "duration": 112634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "105002",
      "offset": 25
    },
    {
      "val": "14502",
      "offset": 32
    }
  ],
  "location": "UserSteps.book_and_User_are_given(int,int)"
});
formatter.result({
  "duration": 502756,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.book_Returned_Successfully()"
});
formatter.result({
  "duration": 293102407,
  "error_message": "org.opentest4j.AssertionFailedError: expected: \u003ctrue\u003e but was: \u003cfalse\u003e\r\n\tat org.junit.jupiter.api.AssertionUtils.fail(AssertionUtils.java:55)\r\n\tat org.junit.jupiter.api.AssertTrue.assertTrue(AssertTrue.java:40)\r\n\tat org.junit.jupiter.api.AssertTrue.assertTrue(AssertTrue.java:35)\r\n\tat org.junit.jupiter.api.Assertions.assertTrue(Assertions.java:162)\r\n\tat com.capgemini.librarymanagementsystem_spring.stepdefinitions.UserSteps.book_Returned_Successfully(UserSteps.java:86)\r\n\tat ✽.Then Book Returned Successfully(useroperations.feature:17)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"sathish@gmail.com\",\"Sathish@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_Login_page()"
});
formatter.result({
  "duration": 97275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sathish@gmail.com",
      "offset": 13
    },
    {
      "val": "Sathish@123",
      "offset": 33
    }
  ],
  "location": "UserSteps.user_enters(String,String)"
});
formatter.result({
  "duration": 162807,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.user_should_be_logged_in()"
});
formatter.result({
  "duration": 337580482,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to view books based on names",
  "description": "",
  "id": "user-can-request,return-and-able-to-view-books;user-should-be-able-to-view-books-based-on-names",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User is on  viewing books page based on names",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters \"history\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "show books based on bookname",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_viewing_books_page_based_on_names()"
});
formatter.result({
  "duration": 78332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "history",
      "offset": 13
    }
  ],
  "location": "UserSteps.user_enters(String)"
});
formatter.result({
  "duration": 173047,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.show_books_based_on_bookname()"
});
formatter.result({
  "duration": 296396434,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"sathish@gmail.com\",\"Sathish@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_Login_page()"
});
formatter.result({
  "duration": 95739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sathish@gmail.com",
      "offset": 13
    },
    {
      "val": "Sathish@123",
      "offset": 33
    }
  ],
  "location": "UserSteps.user_enters(String,String)"
});
formatter.result({
  "duration": 177655,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.user_should_be_logged_in()"
});
formatter.result({
  "duration": 375961483,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to view books based on author name",
  "description": "",
  "id": "user-can-request,return-and-able-to-view-books;user-should-be-able-to-view-books-based-on-author-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User is on  viewing books page based on author Name",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User enters author name \"rajesh\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "show books based on  authorname",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_viewing_books_page_based_on_author_Name()"
});
formatter.result({
  "duration": 86523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajesh",
      "offset": 25
    }
  ],
  "location": "UserSteps.user_enters_author_name(String)"
});
formatter.result({
  "duration": 201205,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.show_books_based_on_authorname()"
});
formatter.result({
  "duration": 477383639,
  "status": "passed"
});
});