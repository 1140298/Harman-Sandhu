// function to validate Part 0 - Address
function validatePart0() {
    // get all address fields
    let aptNumber = document.getElementById('aptNumber').value.trim();
    let streetNumber = document.getElementById('streetNumber').value.trim();
    let streetName = document.getElementById('streetName').value.trim();
    let suburb = document.getElementById('suburb').value.trim();
    let state = document.getElementById('state').value.trim();
    let postcode = document.getElementById('postcode').value.trim();

    // check if all fields are filled
    if (aptNumber && streetNumber && streetName && suburb && state && postcode) {
        // check if postcode is valid
        if (postcode.length != 4) {
            alert('Please enter a valid postcode.');
        } else {
            // Hide Part 0 and Show Part 1
            document.getElementById('part0').style.display = 'none';
            document.getElementById('part1').style.display = 'block';
        }
    } else {
        alert('Please fill in all the address fields.');
    }
}

function addPeople() {
    let peopleCount = parseInt(document.getElementById('peopleCount').value);
    if (peopleCount && peopleCount > 0) {
        // Add fields dynamically for each person in #peopleDetails
        let peopleDetails = document.getElementById('peopleDetails');
        peopleDetails.innerHTML = '';


        for (let index = 0; index < peopleCount; index++) {
            let innerFormHTML = `
          <div class="singlePersonDetails">
            <h2>Person ${index + 1}</h2>
            <div class="form-group">
                <label for="givenName${index}">Given Name</label>
                <input type="text" id="givenName${index}" name="givenName${index}" placeholder="Enter Given Name">
            </div>
            <div class="form-group">
                <label for="familyName${index}">Family Name</label>
                <input type="text" id="familyName${index}" name="familyName${index}" placeholder="Enter Family Name">
            </div>
            <div class="form-group">
                <label>Gender</label>
                <div class="radioGroup">
                    <input type="radio" value="male" id="gender${index}Male" name="gender${index}">
                    <label for="gender${index}Male">Male</label>
                    <input type="radio" value="female" id="gender${index}Female" name="gender${index}">
                    <label for="gender${index}Female">Female</label>
                    <input type="radio" value="other" id="gender${index}Other" name="gender${index}">
                    <label for="gender${index}Other">Other</label>
                </div>
            </div>
            <div class="form-group">
                <label for="dob${index}">Date of Birth</label>
                <input type="date" id="dob${index}" name="dob${index}">
            </div>
            <div class="form-group">
                <label for="countryOfBirth${index}">Country of Birth</label>
                <select id="countryOfBirth${index}" name="countryOfBirth${index}">
                    <option value="australia">Australia</option>
                    <option value="newZealand">New Zealand</option>
                    <option value="fiji">Fiji</option>
                    <option value="solomonIslands">Solomon Islands</option>
                    <option value="papuaNewGuinea">Papua New Guinea</option>
                    <option value="philippines">Philippines</option>
                    <option value="others">Others</option>
                </select>
                <input type="text" id="countryOfBirth${index}Other" name="countryOfBirth${index}Other" placeholder="Enter Country of Birth">
            </div>
            <div class="form-group">
                <label for="yearOfArrival${index}">In what year did you arrive in Australia?</label>
                <input type="number" id="yearOfArrival${index}" name="yearOfArrival${index}" placeholder="Enter Year of Arrival" min="1900" max="2023">
            </div>
            <div class="form-group">
                <label for="australianCitizen${index}">Are you an Australian Citizen?</label>
                <div class="radioGroup">
                    <input type="radio" id="australianCitizen${index}Yes" name="australianCitizen${index}" value="yes">
                    <label for="australianCitizen${index}Yes">Yes</label>
                    <input type="radio" id="australianCitizen${index}No" name="australianCitizen${index}" value="no">
                    <label for="australianCitizen${index}No">No</label>
                </div>
            </div>
            <div class="form-group">
                <label for="languageOtherThanEnglish${index}">Do you speak a Language other than English?</label>
                <select id="languageOtherThanEnglish${index}" name="languageOtherThanEnglish${index}">
                    <option value="englishOnly">English Only</option>
                    <option value="mandarin">Mandarin</option>
                    <option value="italian">Italian</option>
                    <option value="arabic">Arabic</option>
                    <option value="cantonese">Cantonese</option>
                    <option value="greek">Greek</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" id="languageOtherThanEnglish${index}Other" name="languageOtherThanEnglish${index}Other" placeholder="Enter Language">
            </div>
            <div class="form-group">
                <label for="englishSpeaking${index}">How well do you speak English?</label>
                <select id="englishSpeaking${index}" name="englishSpeaking${index}">
                    <option value="veryWell">Very Well</option>
                    <option value="well">Well</option>
                    <option value="notWell">Not Well</option>
                    <option value="notAtAll">Not at All</option>
                </select>
            </div>
            <div class="form-group">
                <label for="highestYearOfSecondarySchool${index}">What is the highest year of secondary school the person has completed?</label>
                <select id="highestYearOfSecondarySchool${index}" name="highestYearOfSecondarySchool${index}">
                    <option value="year7">Year 7</option>
                    <option value="year8">Year 8</option>
                    <option value="year9">Year 9</option>
                    <option value="year10">Year 10</option>
                    <option value="year11">Year 11</option>
                    <option value="year12">Year 12</option>
                    <option value="didNotGoToHighSchool">Did not go to high school</option>
                </select>
            </div>
            <div class="form-group">
                <label for="highestQualification${index}">What is the highest qualification you have received?</label>
                <select id="highestQualification${index}" name="highestQualification${index}">
                    <option value="tradeCertificate">Trade Certificate</option>
                    <option value="certI">Cert. I</option>
                    <option value="certII">Cert. II</option>
                    <option value="certIII">Cert. III</option>
                    <option value="certIV">Cert. IV</option>
                    <option value="bachelorDegree">Bachelor Degree</option>
                    <option value="associateDiploma">Associate Diploma</option>
                    <option value="diploma">Diploma</option>
                    <option value="masters">Masters</option>
                    <option value="phd">PhD.</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" id="highestQualification${index}Other" name="highestQualification${index}Other" placeholder="Enter Qualification">
            </div>
            <div class="form-group">
                <label for="mainFieldOfStudy${index}">What is the main field of study of your Highest Qualification?</label>
                <input type="text" id="mainFieldOfStudy${index}" name="mainFieldOfStudy${index}" placeholder="Enter Field of Study">
            </div>
             
         </div>  
             `;            
             peopleDetails.innerHTML += innerFormHTML;
        }

    } else {
        alert('Please enter a valid number of people.');
    }
}

// function to validate Part 1
function validatePart1() {
    // todo: validate all fields
}