// function to validate Part 0 - Address
{/* <div style="background-color: #fac08e;">
                <h2>Part 0: Address of the dwelling</h2>
                <label for="aptNumber">Apartment Number</label>
                <input type="number" id="aptNumber" name="aptNumber" required>
                <label for="streetNumber">Street Number</label>
                <input type="number" id="streetNumber" name="streetNumber" required>
                <label for="streetName">Street Name</label>
                <input type="text" id="streetName" name="streetName" required>
                <label for="suburb">Suburb/city</label>
                <input type="text" id="suburb" name="suburb" required>
                <label for="suburb">State</label>
                <select id="state" name="state" required>
                    <option value="QLD">QLD</option>
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="TAS">TAS</option>
                    <option value="SA">SA</option>
                    <option value="WA">WA</option>
                    <option value="NT">NT</option>
                    <option value="ACT">ACT</option>
                </select>
                <label for="postcode">Postcode</label>
                <input type="number" id="postcode" name="postcode" required>
            </div> */}
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

// function to validate Part 1
function validatePart1() {
    let peopleCount = document.getElementById('peopleCount').value;
    if (peopleCount && peopleCount > 0) {
        // Hide Part 1 and Show Part 2
        document.getElementById('part1').style.display = 'none';
        document.getElementById('part2').style.display = 'block';
    } else {
        
        alert('Please enter a valid number of people.');
    }
}