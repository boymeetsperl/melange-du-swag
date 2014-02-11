/* Some awesome Javascript written by Ian McGaunn */

// attach some fancy listeners to the hidden input form.
$(document).ready(function() {
    fileinput = $("input[type=file]");

    $("button#vid-in").click(function() {
        fileinput.click();
    });
});