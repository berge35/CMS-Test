//Script for form validation as well as data sources

const ScienceDegrees = ['Science', 'Computer Science', 'Biology', 'Chemistry'];
const BusinessDegrees = ['Business Management', 'Business and Technology', 'Business Administration'];
const ArtsDegrees = ['Dance', 'History', 'Painting'];
const MathematicsDegrees = ['Physics', 'Engineering', 'Mathematics'];

//Allow user to select a degree once type is filled out
function unlockDegrees(index){
    var degreeDropDown = document.getElementById("degree");
    degreeDropDown.disabled = false;
    switch (index){
        case 1: {
            degreeDropDown.options = addList(ScienceDegrees);
            break;
        }
        case 2: {
            degreeDropDown.options = addList(BusinessDegrees);
            break;
        }
        case 3: {
            degreeDropDown.options = addList(ArtsDegrees);
            break;
        }
        case 4: {
            degreeDropDown.options = addList(MathematicsDegrees);
            break;
        }
        default: {
            console.log("Invalid Selection")
            break;
        }
    }
}

//Function to remove all elements from the select list
function resetList(){
    document.getElementById("degree").options.length = 0;
}

//Function to add new list of items to the options list
function addList(array){
    resetList();
    var select = document.getElementById("degree");
    select.add(
        new Option("Select degree type above", "", false)
    )
    array.forEach(element => {
        select.add(
            new Option(element, element, false)     //construct a new Option with the elemnts value as the option's value and text. Selected set to false.
        )
    });
}

//Address auto complete via Google Places API
function initAutoComplete(){
    var input = document.getElementById("address");
    var autocomplete = new google.maps.places.Autocomplete(input);
}
