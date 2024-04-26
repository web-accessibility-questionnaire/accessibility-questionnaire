//defines function called calculateScore that calculates accessibility score.
function calculateScore() { 
    //gets the website link  entered by user and removes any extra spaces
    const websiteLink = document.getElementById('websiteLink').value.trim();
    //check if website link is empty
    if (websiteLink === '') {
        //if website link is empty then show alert.
        alert('Please enter a valid website link.');
        //exit function
        return;
    } 

    var totalPoints = 0; // variable to store total points.
    var totalQuestions = 0; // variable to store total number of questions
    var recommendationsArray = {}; // empty object to store recommendations in categories..

    // calculate score for brightness questions
    totalPoints += getPoints("Q1") + getPoints("Q2") + getPoints("Q3");
    totalQuestions += 3;

    // calculate score for tracking questions
    totalPoints += getPoints("Q4") + getPoints("Q5") + getPoints("Q6");
    totalQuestions += 3;

    // calculate score for perceiving questions
    totalPoints += getPoints("Q7") + getPoints("Q8") + getPoints("Q9");
    totalQuestions += 3;

    // calculate score for point of regard questions
    totalPoints += getPoints("Q10") + getPoints("Q11");
    totalQuestions += 2;

    // calculate score for user settings question
    totalPoints += getPoints("Q12");
    totalQuestions += 1;

    // calculate score for assistive technologies questions
    totalPoints += getPoints("Q13") + getPoints("Q14") + getPoints("Q15");
    totalQuestions += 3;

    // calculate final accessibility score
    var accessibilityScore = (totalPoints / totalQuestions) * 100;

    // categorise the accessibility score

    //variable to store the accessibility category.
    var accessibilityCategory;

    //check the value of accessibilityScore to determine the accessibility category.

    // if accessibilityScore is between 0 and 40 then set accessibility category to "poor accessibility."
    if (accessibilityScore >= 0 && accessibilityScore <= 40) {
        accessibilityCategory = "Poor accessibility";

    //if accessibilityScore is between 41 and 60 then set accessibility category to "fair accessibility."
    } else if (accessibilityScore > 40 && accessibilityScore <= 60) {
        accessibilityCategory = "Fair accessibility";

    //if accessibilityScore is between 60 and 80 then set accessibility category to "good accessibility."
    } else if (accessibilityScore > 60 && accessibilityScore <= 80) {
        accessibilityCategory = "Good accessibility";
    
    //if accessibilityScore is above 80 then set accessibility category to "excellent accessibility" 
    } else {
        accessibilityCategory = "Excellent accessibility";
    }

    // Display the final accessibility score
    var resultElement = document.getElementById("result");
    
    resultElement.innerHTML = "<div class='score-box'><h4>Accessibility Score:</h4> <p>" + accessibilityScore.toFixed(2) + "</p></div>";
    resultElement.innerHTML += "<div class='category-box'><p><strong>Accessibility Category:</strong> " + accessibilityCategory + "</p><br><br></div>";


    // Display recommendations for each question with a "no" answer
    // Recommendatins for category 1- Brightness & Colour
    
   // Recommendations for Q1- Users must be able to change the overall brightness of a display.
    displayRecommendations("Q1", "Users must be able to adjust the overall brightness of the display. In order to improve this aspect of the website in terms of web accessibility for the visually imapired, provide an option to adjust brightness settings in the user preferences. <br><br> For more information please visit section 3.1.1 Brightness Overall on <a href='https://www.w3.org/TR/low-vision-needs/#brightness-overall'> Accessibility Requirements for People with Low Vision.", "Brightness & Colour", recommendationsArray, "Question 1");

    // Recommendations for Q2- Users must be given preferences.
    displayRecommendations("Q2", "Ensure that your website supports users' ability to adjust the brightness of the display.<br> <br> Offer a range of customisable settings beyond just brightness adjustment. This could include options for contrast, color temperature, and automatic adjustment based on ambient light conditions or time of day. Providing these options will allow users to tailor the display settings to their specific visual needs and preferences.", "Brightness & Colour", recommendationsArray, "Question 2");

    // Recommendations for Q3- Users must have alternative options to colour such as a black background option in addition to a white background.
    displayRecommendations("Q3", "To improve website accessibility for users with low vision, offer adjustable display brightness settings, ensure adequate contrast between text and background and provide customisable colour options.<br><br> For more information please visit section 3.1.2 Text Contrast on <a href='https://www.w3.org/TR/low-vision-needs/#text-contrast'> Accessibility Requirements for People with Low Vision.", "Brightness & Colour", recommendationsArray, "Question 3");

     // Recommendations for category 2- Tracking

     // Recommendations for Q4- Rewrap for One Direction Scrolling
    displayRecommendations("Q4", "Ensure that blocks of text are formatted to rewrap in a manner that requires only one direction of scrolling, typically vertical scrolling for languages written from left to right or right to left. This prevents the need for horizontal scrolling, improving readability and user experience. <br><br>For more information please visit section 3.2.1 Rewrap for One Direction Scrolling on <a href='https://w3.org/TR/low-vision-needs/#rewrap-for-one-direction-scrolling'> Accessibility Requirements for People with Low Vision.", "Tracking", recommendationsArray, "Question 4");

    // Recommendations for Q5- Reflow to Single Column
    displayRecommendations("Q5", "Users must have the option to arrange blocks of text as a single continuous block rather than dividing them into multiple columns. <br><br> For more information please visit 3.2.2 Reflow to Single Column on <a href='https://www.w3.org/TR/low-vision-needs/#reflow-to-single-column'> Accessibility Requirements for People with Low Vision.", "Tracking", recommendationsArray, "Question 5");

    // Recommendations for Q6- Hyphenation
    displayRecommendations("Q6", "For some people it is very difficult to understand words that are hyphenated (for example check-in), and they need to turn off hyphenation. While this is primarily an issue for people with cognitive impairments, hyphenation becomes more of an issue when text size is increased, thus it is also related to low vision. Some people with very large text may prefer hyphenation on so that more characters fit on a line of text. <br> <br> Users must be given an option to turn hyphenation on or off based on their preferences.", "Tracking", recommendationsArray, "Question 6");


     // Recommendations for category 3- Perceiving 

    // Recommendations for Q7- Text Size
    displayRecommendations("Q7", "Website owners must ensure that Users can change the text size (font size) of all text, without zooming the entire interface so that users who require larger text can perceive letters.<br><br> For more information please visit 3.3.1 Text Size on <a href='https://www.w3.org/TR/low-vision-needs/#text-size'> Accessibility Requirements for People with Low Vision.", "Perceiving", recommendationsArray, "Question 7");

    // Recommendations for Q8- Font
    displayRecommendations("Q8", "Some fonts/typefaces are more readable than others. For example, some people cannot read fonts with sub-pixel rendering. <br><br> Users should be able to change the font face (also called font family or typeface) of all text, choosing from a wide range of fonts including serif and sans serif fonts.<br><br>For more information please visit 3.3.2 Font on <a href='https://www.w3.org/TR/low-vision-needs/#font'> Accessibility Requirements for People with Low Vision.", "Perceiving", recommendationsArray, "Question 8");

    // Recommendations for Q9-  Size of All Elements
    displayRecommendations("Q9", "Some people need to increase the size of all interface elements in order to perceive information. Provide an option to change the size of all interface elements to accommodate user perception needs.<br><br>For more information please visit 3.3.5 Size of All Elements on <a href='https://www.w3.org/TR/low-vision-needs/#size-of-all-elements'> Accessibility Requirements for People with Low Vision.", "Perceiving", recommendationsArray, "Question 9");

    
    // Recommendations for category 4- Point of Regard and Proximity

    // Recommendations for Q10- Maintain Point of Regard
    displayRecommendations("Q10", "Sometimes people will be viewing content and need to change the display to read it better, for example, make the text larger. If the place where they are reading (known as “point of regard”) changes much, they lose their place and especially with a small visible area and large text, it can be very difficult to find their place again. Ensure that the current reading position remains visible after making adjustments.<br><br>For more information please visit 3.6.1 Maintain Point of Regard on <a href='https://www.w3.org/TR/low-vision-needs/#maintain-point-of-regard'> Accessibility Requirements for People with Low Vision.", "Point of Regard and Proximity", recommendationsArray, "Question 10");

    // Recommendations for Q11- Proximity of Related Information
    displayRecommendations("Q11", "People with limited field of vision or who use large text have little in their field of view at one time. If related information is not close together, they can have trouble knowing about it, seeing it, and using it. Webiste owners must ensure related information such as labels and controls must be kept in close proximity.<br><br>For more information please visit 3.6.2 Proximity of Related Information on <a href='https://www.w3.org/TR/low-vision-needs/#proximity-of-related-information'> Accessibility Requirements for People with Low Vision.", "Point of Regard and Proximity", recommendationsArray, "Question 11");


    // Recommendations for category 5- Work with User Settings

    // Recommendations for Q12-  Seeing All Interface Elements
    displayRecommendations("Q12", "When people increase text size, increase leading, or change other text display aspects through text-only zoom or other text settings, content that is poorly designed can become unusable. Users must be able to see all interface elements that are intended for users to see, including when users have changed display settings such as text size.<br><br>For more information please visit 3.7.1 Seeing All Interface Elements on <a href='https://www.w3.org/TR/low-vision-needs/#seeing-all-interface-elements'> Accessibility Requirements for People with Low Vision.", "Work with User Settings", recommendationsArray, "Question 12");



    // Recommendations for category 5- Compatibility with Assistive Technologies

    // Recommendations for Q13-  Screen Reader
    displayRecommendations("Q13", "Sometimes, users with low vision rely on screen readers to navigate and understand content on websites. Screen readers are assistive technologies that audibly convey the text displayed on a webpage, allowing users to listen to the content rather than visually reading it. To ensure effective navigation for users relying on screen readers, website developers should consider providing descriptive text. Ensure that all images, buttons, links, and other interactive elements are accompanied by descriptive text, known as alternative text. This text should accurately convey the purpose or function of the element to users who are unable to see it. <br><br> Another recommendation is to Use semantic HTML markup to structure the content of the website. This helps screen readers interpret the layout and hierarchy of the page, making it easier for users to navigate through headings, paragraphs, lists, and other structural elements.<br><br>For more information please visit  <a href='https://www.w3.org/WAI/perspective-videos/speech/'> Accessibility Fundamentals: Text to Speech.", "Compatibility with Assistive Technologies", recommendationsArray, "Question 13");

    // Recommendations for Q14-  Keyboard Accessibility
    displayRecommendations("Q14", "Sometimes, users with low vision rely on keyboard controls to navigate websites effectively, especially if they encounter difficulties using a mouse. Ensuring keyboard accessibility is very important for these users to navigate through your website with ease. website developers must ensure all interactive elements such as links, buttons, and form fields, are clearly visible when they receive keyboard focus. Providing a distinct visual indication, such as a highlighted outline or change in color helps users with low vision track their navigation and understand where they are on the page.<br><br>For more information please visit  <a href='https://www.w3.org/WAI/perspective-videos/keyboard/'> Accessibility Fundamentals: Keyboard Compatibility.", "Compatibility with Assistive Technologies", recommendationsArray, "Question 14");

    // Recommendations for Q15-  Text-to-Speech
    displayRecommendations("Q15", "Sometimes, users with low vision require text-to-speech functionality to effectively access and understand the content of a website. In order to cater to the needs of these users and ensure the accessibility of your website website owners should incorporate text-to-speech functionality into the website to allow users with low vision to listen to the content instead of relying solely on visual text. Ensure that this feature covers all relevant textual content, including main content, headings, links, and other important elements to provide full accessibility.<br><br>For more information please visit  <a href='https://www.w3.org/WAI/perspective-videos/voice/'> Accessibility Fundamentals: Speech Recognition.", "Compatibility with Assistive Technologies", recommendationsArray, "Question 15");


    // Display all recommendations storeed in recommendationsArray
    displayAllRecommendations(recommendationsArray);
}

//define funnction called getPoints- calculates points for specific questiion based on its name.
// it has a parameter called 'questionName which specifies the name of question.
function getPoints(questionName) {
    //retrieve value of the checked input element with specified name and store it in  variable 'value'. 
    var value = document.querySelector('input[name="' + questionName + '"]:checked').value;
    // return 1 if the value is 'yes' otherwise return 0.
    return value === "yes" ? 1 : 0;
}

// define function called displayRecommendation with parameters: questionNumber, recommendation, category, recommendationsArray and questionDescription
function displayRecommendations(questionNumber, recommendation, category, recommendationsArray, questionDescription) {
    // retrive the value of the input of the radio button corresponding to questionNumber
    var value = document.querySelector('input[name="' + questionNumber + '"]:checked').value;
    //check if value = no
    if (value === "no") {
        //check if there are no recommendations stored for the specified catgeory in the recommendationsArray
        if (!recommendationsArray[category]) {
            //if there are no recommendations for the category then initialise an empty array.
            recommendationsArray[category] = [];
        }
        // push new recommendation entry to recommendationArray under specified category
        recommendationsArray[category].push(`${questionDescription}: ${recommendation}`);
    }
}

//define function called displayAllRecommendations with parameter called recommendationsArray.
function displayAllRecommendations(recommendationsArray) {
    // Retrieve the element with ID "recommendations" and store it in recommendationElement
    var recommendationElement = document.getElementById("recommendations");

    // Clear any exisiting content within the recommendationElement
    recommendationElement.innerHTML = "";

    // Add the Recommendations heading to the recommendationElement
    recommendationElement.innerHTML += "<h4>Recommendations:</h4>";

    // Iterate over each category in recommendationsArray
    for (var category in recommendationsArray) {
        //retrive array of  reccomendations for current category from recommendations
        var categoryRecommendations = recommendationsArray[category];

        // If there are recommendations for this category
        if (categoryRecommendations.length > 0) {
            // Add the category heading to recommendationElement
            recommendationElement.innerHTML += `<div class="category-heading">${category}:</div>`;

            // Add the recommendation list as unordered list to recommendationElement
            recommendationElement.innerHTML += "<ul>";
            //iterate over each recommendation in the categoryRecommendations array
            categoryRecommendations.forEach(function (recommendation) {
                // add each recommendation as a list item with the class "recommendation-item" to the unordered list
                recommendationElement.innerHTML += `<li class="recommendation-item">${recommendation}</li>`;
            });

            // add a closing unordered list tag to the recommendationElement
            recommendationElement.innerHTML += "</ul>";
        }
    }

    //initlaise a boolean variable ismpty to true
    var isEmpty = true;
    // Iterate over each category in the recommendationsArray
    for (var category in recommendationsArray) {
        // if the length of recommendations in the curent category is greater than 0
        if (recommendationsArray[category].length > 0) {
            // set isEmpty to false and exit the loop
            isEmpty = false;
            break;
        }
    }
    // Check if isEmpty is true
    if (isEmpty) {
        // if true, display a mesage indicating no recommendations are present
        recommendationElement.innerHTML += "<p>No recommendations at this time. Your website is doing well in accessibility.</p>";
    }
    
}

// Add an event listner to the form to call calculateScore() when submitted
document.getElementById("questionForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Calculate the accessibility score and display recomendations
    calculateScore();

    // Set the value of the hidden input field with ID "accessibilityScore" to the accessibility score. round to 2 decimal places
    document.getElementById("accessibilityScore").value = accessibilityScore.toFixed(2);
    /// convert the recomendationsArray object into a JSON string
    const myJSON = JSON.stringify(recommendationsArray);
    // set the value of the HTML element with ID "recommendations" to the JSON string
    document.getElementById("recommendations").value = myJSON; // https://www.w3schools.com/js/js_json_stringify.asp

    // Submit the form
    this.submit();
});

// Add an event listener to the checkbox to enable/disable the "Send Results" button
document.getElementById("consentCheckbox").addEventListener("change", function() {
    // retrieve the sendResultsButton element by its ID
    var sendResultsButton = document.getElementById("sendResultsButton");
    // disable sendResultsButton if the consentCheckbox is unchecked, otherwise enable it..
    sendResultsButton.disabled = !this.checked;
});


// Add an event listener to the sendResultsButton to detect clicks
document.getElementById("sendResultsButton").addEventListener("click", function() {
    // retrieve the consentCheckbox element by its ID
    var consentCheckbox = document.getElementById("consentCheckbox");
    // check if the consentCheckbox is not checked
    if (!consentCheckbox.checked) {
        // display an alert message prompting the user to consent to participate in the research..
        alert("Please consent to participate in the research.");
        return; // Exit the function if the checkbox is not checked
    }

    //output form data to the console for debugging purposes
    console.log("Form data:", {
        //get value of accessibility score from the 'result' element and store it in the object
        accessibilityScore: document.getElementById("result").value,
        //get value of recommendations from the 'recommendations' element and store it in the object
        recommendations: document.getElementById("recommendations").value
    });

    // Submit the form
    document.getElementById("questionForm").submit();
});
