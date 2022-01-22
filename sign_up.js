function signUp() {
        your_name = document.getElementById("your_name").value;
        localStorage.setItem("your_name", your_name);

        age = document.getElementById("age").value;
        localStorage.setItem("age", age);

        nick_name = document.getElementById("nick_name").value;
        localStorage.setItem("nick_name", nick_name);

        whitehat_jr = document.getElementById("whitehat_jr").value;
        localStorage.setItem("whitehat_jr", whitehat_jr);

        window.location = "kwitter_room.html";
    }