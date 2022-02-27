/**
 * Student 1
 * Name: Sonadi Kannangara
 * ID: 100778336
 *
 * Student 2
 * Name: Devanshi Patel
 * ID: 100805085
 *
 * Date Completed: 11th February, 2022
 * Date Updated: 27th February, 2022
 */

// User Class
class User {
  // getters and setters
  get FirstName() {
    return this.m_firstName;
  }

  set FirstName(first_name) {
    this.m_firstName = first_name;
  }

  get LastName() {
    return this.m_lastName;
  }

  set LastName(last_name) {
    this.m_lastName = last_name;
  }

  get EmailAddress() {
    return this.m_emailAddress;
  }

  set EmailAddress(email_address) {
    this.m_emailAddress = email_address;
  }

  get Password() {
    return this.m_password;
  }

  set Password(password) {
    this.m_password = password;
  }

  // constructor
  constructor(firstName = "", lastName = "", emailAddress = "", password = "") {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.EmailAddress = emailAddress;
    this.Password = password;
  }

  // overridden toString() method

  toString() {
    return `First Name: ${this.FirstName} \nLast Name: ${this.LastName} \nEmail Address: ${this.EmailAddress}  \nPassword: ${this.Password}`;
  }
}

/**
 * Main function for app.js page
 */
(function () {
  /**
   * Change the Products link in the Navbar to Projects
   */
  //get an entry point(s) reference
  let Links = document.getElementsByClassName("nav-link");
  // Add / Insert the new element
  Links[1].innerHTML =
    "<i class ='fa-solid fa-table-cells-large'> </i> Projects";

  /**
   * Add another link to Navbar between About Us link and Contact Us link.
   */
  // create an element(s) to insert
  let HRList = document.createElement("li");
  let HRLink = document.createElement("a");
  let HRIcon = document.createElement("i");

  // configure the new element
  HRLink.setAttribute("class", "nav-link");
  HRIcon.setAttribute("class", "fa-solid fa-address-card");
  let HRNode = document.createTextNode(" Human Resources");
  HRLink.setAttribute("href", "#");

  // Add / Insert the new element
  HRLink.appendChild(HRIcon);
  HRLink.appendChild(HRNode);
  HRList.appendChild(HRLink);
  //get an entry point(s) reference
  let list = document.getElementById("myList");
  list.insertBefore(HRList, list.childNodes[11]);

  /**
   * Function to display the content in home page.
   */
  function DisplayHomePage() {
    //get an entry point(s) reference
    let MainContent = document.getElementsByTagName("main")[0];

    // create an element(s) to insert
    let MainHeading1 = document.createElement("h1");
    let MainHeading2 = document.createElement("h3");
    let MainHeading3 = document.createElement("h3");

    // configure the new element
    MainHeading1.setAttribute("id", "HPHeading");
    MainHeading1.textContent = "Welcome";

    MainHeading2.setAttribute("id", "HPHeading1");
    MainHeading2.setAttribute("class", "mt-5");
    MainHeading2.textContent = "WEBD 6201";

    MainHeading3.setAttribute("id", "HPHeading2");
    MainHeading3.setAttribute("class", "mt-5");
    MainHeading3.textContent = "Lab 01";

    // Add / Insert the new element
    MainContent.appendChild(MainHeading1);
    MainContent.appendChild(MainHeading2);
    MainContent.appendChild(MainHeading3);
  }

  /**
   * Function to display the content in products page. The projects we did will be displayed in this page.
   */
  function DisplayProductsPage() {
    //get an entry point(s) reference
    let MainContent = document.getElementsByTagName("main")[0];

    // create an element(s) to insert
    let MainHeading1 = document.createElement("h1");
    let MainHeading2 = document.createElement("h3");
    let MainHeading3 = document.createElement("h3");
    let MainHeading4 = document.createElement("h3");
    let MainParagraph1 = document.createElement("p");
    let MainParagraph2 = document.createElement("p");
    let MainParagraph3 = document.createElement("p");
    let MainImage1 = document.createElement("img");
    let MainImage2 = document.createElement("img");
    let MainImage3 = document.createElement("img");

    // configure the new element
    MainHeading1.setAttribute("id", "PPHeading1");
    MainHeading1.setAttribute("class", "mt-3");
    MainHeading1.textContent = "Our Products";
    MainHeading2.setAttribute("id", "PPHeading2");
    MainHeading2.setAttribute("class", "mt-3");
    MainHeading2.textContent = "Book Store website";
    MainHeading3.setAttribute("id", "PPHeading2");
    MainHeading3.textContent = "Company website";
    MainHeading4.setAttribute("id", "PPHeading2");
    MainHeading4.textContent = "Animal care website";

    MainParagraph1.setAttribute("id", "PPPara1");
    MainParagraph1.textContent =
      "A website for a college book store. This website display the products with the image, name, description, available options and price of the products.";
    MainParagraph2.setAttribute("id", "PPPara1");
    MainParagraph2.textContent =
      "A website for a company which allows users and agents of the company to sign in and register clients and their class.";
    MainParagraph3.setAttribute("id", "PPPara1");
    MainParagraph3.textContent =
      "This website is based on an animal care company. It allows the users to register as a new patient by including details about the pet and owner. Finally show the registered patients at the bottom of the web page.";

    MainImage1.setAttribute("src", "images/bgImg6.jpg");
    MainImage1.setAttribute("id", "PPImage1");
    MainImage2.setAttribute("src", "images/bgImg4.jpg");
    MainImage2.setAttribute("id", "PPImage1");
    MainImage3.setAttribute("src", "images/bgImg5.jpg");
    MainImage3.setAttribute("id", "PPImage1");

    // Add / Insert the new element
    MainContent.appendChild(MainHeading1);
    MainContent.appendChild(MainHeading2);
    MainContent.appendChild(MainParagraph1);
    MainContent.appendChild(MainImage1);
    MainContent.appendChild(MainHeading3);
    MainContent.appendChild(MainParagraph2);
    MainContent.appendChild(MainImage2);
    MainContent.appendChild(MainHeading4);
    MainContent.appendChild(MainParagraph3);
    MainContent.appendChild(MainImage3);
  }

  /**
   * The DisplayServicesPage() function loads the Services pages which consists of text and Images.
   * It gives description about what different types of services we are providing.
   */
  function DisplayServicesPage() {
    // Step1: Get an entry point
    let MainContent = document.getElementsByTagName("main")[0];
    let DocumentBody = document.body;

    // Step2: Create elemnts for Heading, Paragraph and Image
    let MainHeading1 = document.createElement("h1");
    let MainHeading2 = document.createElement("h3");
    let MainHeading3 = document.createElement("h3");
    let MainHeading4 = document.createElement("h3");
    let MainParagraph1 = document.createElement("p");
    let MainParagraph2 = document.createElement("p");
    let MainParagraph3 = document.createElement("p");
    let MainImage1 = document.createElement("img");
    let MainImage2 = document.createElement("img");
    let MainImage3 = document.createElement("img");

    // Step3: Configure elements for heading
    MainHeading1.setAttribute("id", "PPHeading1");
    MainHeading1.setAttribute("class", "mt-3");
    MainHeading1.textContent = "Our Services";
    MainHeading2.setAttribute("id", "MainHeading2");
    MainHeading2.setAttribute("class", "mt-4");
    MainHeading2.textContent = "Web & Front-end Development";
    MainHeading3.setAttribute("id", "MainHeading3");
    MainHeading3.setAttribute("class", "mt-5");
    MainHeading3.textContent = ".Net Development";
    MainHeading4.setAttribute("id", "MainHeading4");
    MainHeading4.setAttribute("class", "mt-5");
    MainHeading4.textContent = "Database";

    // Step4: Configure elements for Paragraph
    MainParagraph1.setAttribute("id", "MainParagraph1");
    MainParagraph1.textContent =
      "To create a website which is creative as well as attractive or to upgrade already existing website, ";
    MainParagraph1.textContent +=
      "we are providing the service which makes it possible by using different tools.";
    MainParagraph2.setAttribute("id", "MainParagraph2");
    MainParagraph2.textContent =
      ".Net Development is a open-source framework, used to develop form based as well as web-based applications.";
    MainParagraph3.setAttribute("id", "MainParagraph3");
    MainParagraph3.textContent =
      "Database Development helps to assign data in a good way and organized.";

    // Step5: Configure elements for Image
    MainImage1.setAttribute("src", "images/webImg.png");
    MainImage1.setAttribute("id", "MainImage1");
    MainImage2.setAttribute("src", "images/net.png");
    MainImage2.setAttribute("id", "MainImage2");
    MainImage3.setAttribute("src", "images/database.png");
    MainImage3.setAttribute("id", "MainImage3");

    // Step6: Insert all the elements to MainContent using appendChild
    MainContent.appendChild(MainHeading1);
    MainContent.appendChild(MainHeading2);
    MainContent.appendChild(MainParagraph1);
    MainContent.appendChild(MainImage1);
    MainContent.appendChild(MainHeading3);
    MainContent.appendChild(MainParagraph2);
    MainContent.appendChild(MainImage2);
    MainContent.appendChild(MainHeading4);
    MainContent.appendChild(MainParagraph3);
    MainContent.appendChild(MainImage3);
  }

  /**
   * This DisplayAboutPage() function loads the About Us page.
   * It gives information about the us, which includes our name, qualification, image and resume link.
   */
  function DisplayAboutPage() {
    // Step1: Get an entry point
    let MainContent = document.getElementsByTagName("main")[0];
    let DocumentBody = document.body;

    // Step2: Create elemnts for Heading, Paragraph and Image
    let MainHeading5 = document.createElement("h1");
    let MainHeading6 = document.createElement("h3");
    let MainHeading7 = document.createElement("h3");
    let MainParagraph4 = document.createElement("p");
    let MainParagraph5 = document.createElement("p");
    let MainImage4 = document.createElement("img");
    let MainImage5 = document.createElement("img");
    let MainLink1 = document.createElement("a");
    let MainLink2 = document.createElement("a");

    // Step3: Configure elements for heading
    MainHeading5.setAttribute("id", "PPHeading1");
    MainHeading5.setAttribute("class", "mt-3");
    MainHeading5.textContent = "About Us";
    MainHeading6.setAttribute("id", "MainHeading2");
    MainHeading6.setAttribute("class", "mt-4");
    MainHeading6.textContent = "Sonadi Kannangara";
    MainHeading7.setAttribute("id", "MainHeading3");
    MainHeading7.setAttribute("class", "mt-5");
    MainHeading7.textContent = "Devanshi Patel";

    // Step4: Configure elements for Paragraph
    MainParagraph4.setAttribute("id", "MainParagraph1");
    MainParagraph4.textContent = "2nd Year Student";
    MainParagraph4.textContent += "  Computer Programming and Analysis";
    MainParagraph5.setAttribute("id", "MainParagraph2");
    MainParagraph5.textContent = "2nd Year Student";
    MainParagraph5.textContent += "  Computer Programming and Analysis";

    // Step5: Configure elements for Image
    MainImage4.setAttribute("src", "images/sonadi.png");
    MainImage4.setAttribute("id", "MainImage4");
    MainImage5.setAttribute("src", "images/devanshi.png");
    MainImage5.setAttribute("id", "MainImage5");

    // Step6: Configure elements for Link
    MainLink1.setAttribute("href", "./Resume/SonadiResume.docx");
    MainLink1.setAttribute("id", "MainLink1");
    MainLink1.textContent = "Sonadi's Resume";
    MainLink2.setAttribute("href", "./Resume/DevanshiResume.docx");
    MainLink2.setAttribute("id", "MainLink2");
    MainLink2.textContent = "Devanshi's Resume";

    // Step6: Insert all the elements to MainContent using appendChild
    MainContent.appendChild(MainHeading5);
    MainContent.appendChild(MainHeading7);
    MainContent.appendChild(MainLink2);
    MainContent.appendChild(MainParagraph5);
    MainContent.appendChild(MainImage5);
    MainContent.appendChild(MainHeading6);
    MainContent.appendChild(MainLink1);
    MainContent.appendChild(MainParagraph4);
    MainContent.appendChild(MainImage4);
  }

  /**
   * The DisplayContactPage() function is used to get all the contact information from the customer.
   */
  function DisplayContactPage() {
    // Create element
    let submit = document.getElementById("submitButton");
    submit.addEventListener("click", function () {
      var fullNameInput = document.getElementById("fullName").value;
      var contactInput = document.getElementById("contactNumber").value;
      var emailInput = document.getElementById("emailAddress").value;
      console.log("Full Name: " + fullNameInput);
      console.log("Contact Number: " + contactInput);
      console.log("Email Address: " + emailInput);
    });
  }

  /**
   * The DisplayLoginPage() function is used to display the username on the Navbar when the login button is clicked.
   */
  function DisplayLoginPage() {
    $(document).ready(function () {
      // When the login button is clicked,
      $("#loginButton").click(function () {
        // Create variables to get the values
        let usernameValue = $("#userName").val();
        let passwordValue = $("#password").val();

        // Check if the input value is empty or not
        if (usernameValue.length == "" || passwordValue.length == "") {
          return false;
        }

        // If the input value are not empty,
        else {
          /**
           * Add another link to Navbar between Contact Us link and Log in link.
           */
          // create an element(s) to insert
          let HRList1 = document.createElement("li");
          let HRLink1 = document.createElement("a");
          let HRIcon1 = document.createElement("i");

          // configure the new element
          HRLink1.setAttribute("class", "nav-link");
          HRIcon1.setAttribute("class", "fa-solid fa-user ");
          let HRNode1 = document.createTextNode($("#userName").val());
          HRLink1.setAttribute("href", "#");

          // Add / Insert the new element
          HRLink1.appendChild(HRIcon1);
          HRLink1.appendChild(HRNode1);
          HRList1.appendChild(HRLink1);
          //get an entry point(s) reference
          let list = document.getElementById("myList");
          list.insertBefore(HRList1, list.childNodes[13]);

          return false;
        }
      });
    });
  }

  /**
   * The DisplayRegisterPage() function used to validate the first name, last name, email address, password and
   * to check the values of confirm password and the register button. It also shows the inputs in the console.
   */

  function DisplayRegisterPage() {
    $(document).ready(function () {
      // Validate FirstName
      $("#ErrorMessage").hide();
      let firstNameError = true;
      $("#FirstName").keyup(function () {
        validateFirstname();
      });

      function validateFirstname() {
        // Create variable to get the input value
        let firstnameValue = $("#FirstName").val();

        // Check if the input is empty or not
        if (firstnameValue.length == "") {
          // Show the error message
          $("#ErrorMessage").show();
          firstNameError = false;
          return false;
        }

        // Check the minimum length is 2 or not
        else if (firstnameValue.length < 2) {
          // Show the error message
          $("#ErrorMessage").show();
          $("#ErrorMessage").html("Length of firstname must be greater than 2");
          firstNameError = false;
          return false;
        }

        // Hide the error message
        else {
          $("#ErrorMessage").hide();
        }
      }

      // Validate LastName
      $("#ErrorMessage").hide();
      let lastNameError = true;
      $("#LastName").keyup(function () {
        validateLastName();
      });

      function validateLastName() {
        // Create variable to get the input value
        let lastNameValue = $("#LastName").val();

        // Check if the input value is empty or not
        if (lastNameValue.length == "") {
          // Show the error message
          $("#ErrorMessage").show();
          lastNameError = false;
          return false;
        }

        // Check the length of the input value
        else if (lastNameValue.length < 2) {
          // Show the error message
          $("#ErrorMessage").show();
          $("#ErrorMessage").html("Length of lastname must be greater than 2");
          lastNameError = false;
          return false;
        } else {
          // Hide the error message
          $("#ErrorMessage").hide();
        }
      }

      // Validate Email
      $("#ErrorMessage").hide();
      let emailError = true;
      $("#emailAddress").keyup(function () {
        validateEmail();
      });
      function validateEmail() {
        // Create variable to get input value
        let emailValue = $("#emailAddress").val();

        // Check the Regex for email
        let regex =
          /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

        // Check the input value is empty or not
        if (emailValue.length == "") {
          // Show the error message
          $("#ErrorMessage").show();
          emailError = false;
          return false;
        }

        // Check the regex
        else if (!regex.test(emailValue)) {
          // Show rhe error message
          $("#ErrorMessage").show();
          $("#ErrorMessage").html("Email Address is Invalid.");

          emailError = false;
          return false;
        } else if (regex.test(emailValue)) {
          $("#ErrorMessage").hide();
        }
      }

      //Validate Password
      $("#ErrorMessage").hide();
      let passwordError = true;
      $("#password").keyup(function () {
        validatePassword();
      });
      function validatePassword() {
        // Create variable to get input value
        let passwordValue = $("#password").val();

        // Check the length of the password
        if (passwordValue.length == "") {
          // Show the error message
          $("#ErrorMessage").show();
          passwordError = false;
          return false;
        }

        // Check the length is atleast 6
        if (passwordValue.length < 6) {
          // Show the error message
          $("#ErrorMessage").show();
          $("#ErrorMessage").html(
            "Length of your password must be atleast 6 characters."
          );
          passwordError = false;
          return false;
        } else {
          // Hide the error message
          $("#ErrorMessage").hide();
        }
      }

      // Validate Confirm Password
      $("#ErrorMessage").hide();
      let confirmPasswordError = true;
      $("#confirmPassword").keyup(function () {
        validateConfirmPassword();
      });
      function validateConfirmPassword() {
        // Create variable to get input value
        let confirmPasswordValue = $("#confirmPassword").val();
        let passwordValue = $("#password").val();

        // Check if the confirm password is same as password or not
        if (passwordValue != confirmPasswordValue) {
          // If not, show an error message
          $("#ErrorMessage").show();
          $("#ErrorMessage").html("Password and Confirm Password didn't Match");
          confirmPasswordError = false;
          return false;
        } else {
          // hide the error message
          $("#ErrorMessage").hide();
        }
      }

      // Submit button
      $("#logibButton").click(function () {
        validateFirstname();
        validateLastName();
        validatePassword();
        validateConfirmPassword();
        validateEmail();

        // Check for the errors
        if (
          firstNameError == true &&
          lastNameError == true &&
          passwordError == true &&
          confirmPasswordError == true &&
          emailError == true
        ) {
          return true;
        } else {
          // Create a new instance of the User Class
          let user = new User(
            $("#FirstName").val(),
            $("#LastName").val(),
            $("#emailAddress").val(),
            $("#password").val()
          );
          // Display it in the console
          console.log(user.toString());

          // Default Form Behaviour
          document.getElementById("FirstName").value.remove();
          document.getElementById("LastName").value.remove();
          document.getElementById("emailAddress").value.remove();
          document.getElementById("password").value.remove();
          return false;
        }
      });
    });
  }

  // named function option
  function Start() {
    // Using the title of the document call the above created functions
    switch (document.title) {
      case "Home":
        DisplayHomePage();
        break;
      case "Products":
        DisplayProductsPage();
        break;
      case "Services":
        DisplayServicesPage();
        break;
      case "About Us":
        DisplayAboutPage();
        break;
      case "Contact Us":
        DisplayContactPage();
        break;
      case "Login":
        DisplayLoginPage();
        break;
      case "Register Page":
        DisplayRegisterPage();
        break;
    }
  }

  window.addEventListener("load", Start);
})();
