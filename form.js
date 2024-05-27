(function () {
  // Function to create and return a form element
  function createForm(courses) {
    var form = document.createElement("form");

    // Create input fields
    var nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";

    var emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";

    var passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password:";
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.name = "password";

    // Create dropdown for courses
    var courseLabel = document.createElement("label");
    courseLabel.textContent = "Courses:";
    var courseSelect = document.createElement("select");
    courseSelect.name = "course";

    // Add options to the dropdown based on provided courses
    courses.forEach(function (course) {
      var option = document.createElement("option");
      option.value = course;
      option.textContent = course;
      courseSelect.appendChild(option);
    });

    // Append elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(courseLabel);
    form.appendChild(courseSelect);
    form.appendChild(document.createElement("br"));

    return form;
  }

  // Function to render the form on the webpage
  function renderForm(options) {
    var path = options.path;
    var courses = options.courses || [];

    var targetElement = document.querySelector(path);

    if (targetElement) {
      var form = createForm(courses);
      targetElement.appendChild(form);
    } else {
      console.error("Target element not found for path: " + path);
    }
  }

  // Parse data attribute of the script tag
  var scripts = document.getElementsByTagName("script");
  var currentScript = scripts[scripts.length - 1];
  var dataAttribute = currentScript.getAttribute("data");

  // If data attribute exists, parse it and render the form
  if (dataAttribute) {
    var options = JSON.parse(dataAttribute);
    renderForm(options);
  } else {
    console.error("No data attribute found in the script tag.");
  }
})();
