//insert firebase here


$("#add-train").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#input-train-name").val().trim();
    var trainDest = $("#input-destination").val().trim();
    var trainFreq = $("input-frequency").val().trim();
    var nextArrival = $("input-next-arrival").val().trim();
    var minsAway = $("input-mins-away").val().trim();

    var newTrain = {
        name: trainName,
        destination: trainDest,
        frequency: trainFreq,
        nextArrival: nextArrival,
        minsAway: minsAway
    };

    //push information to firebase here

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.nextArrival);
    console.log(newTrain.minsAway);

    alert("Choo Choo!");

    localStorage.clear();

    localStorage.setItem("name", trainName, "destination", trainDest, "frequency", trainFreq, "next arrival", nextArrival, "minutes away", minsAway);

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDest),
        $("<td>").text(trainFreq),
        $("<td>").text(nextArrival),
        $("<td>").text(minsAway),
    );

    $("#train-table > tbody").append(newRow);
});


//firebase event adding to train database

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
})