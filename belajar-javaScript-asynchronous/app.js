setTimeout(function () {

    document.body.style.backgroundColor = "blue";

    setTimeout(function () {

        document.body.style.backgroundColor = "purple";

        setTimeout(function () {

            document.body.style.backgroundColor = "brown";

            setTimeout(function () {

                document.body.style.backgroundColor = "pink";

            }, 4000)

        }, 3000);

    }, 2000);

}, 1000);



