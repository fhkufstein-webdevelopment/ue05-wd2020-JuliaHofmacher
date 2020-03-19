$(document).ready(function() {

    var userListBody = $('.userList tbody');
    var numberUser = 1;

    //@todo store and somehow update the current number of users

    let submit = $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        var eingabe = document.getElementById("username");
        var newUser = eingabe.value; // Wert der neuen Eingabe in newUser speichern

        //3. somehow add them to userListBody
        userListBody.push(newUser);

        numberUser++;
        console.log(numberUser);

        //4. update number of current users
        var length = userListBody.length;
        var table = document.getElementById('table');
        var newRow = table.insertRow(-1);
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);

        newCell1.innerHTML = length;
        newCell2.innerHTML = newUser;
        newCell3.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>";
        document.getElementById("form").reset();

        //5. clear entries from the form


        return false;
    });


    $(document).on('click','.deleteTrigger',function() {
        //@todo

        //1. remove current user from dom
        $(this).parents("tr").remove();

        //2. update number of current users
        numberUser-- ;
        console.log(numberUser);

        });

    });
