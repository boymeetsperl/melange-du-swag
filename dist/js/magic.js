/* Some awesome Javascript written by Ian McGaunn */

/* call the addRectangle function once the document has loaded */
$(document).ready(function() {
    fileinput = $("input[type=file]");

    $("button#vid-in").click(function() {
        fileinput.click();
    });
});