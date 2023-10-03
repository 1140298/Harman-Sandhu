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


