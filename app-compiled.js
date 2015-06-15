"use strict";

SC.initialize({
    client_id: "19d63840c9dcfcd6801ed142b3aaf3ca",
    redirect_uri: "https://github.com/Wavez/Soundcloud-Stats/blob/master/callback.html"
});

// initiate auth popup
SC.connect(function () {
    SC.get("/me", function (me) {
        alert("Hello, " + me.username);
    });
});

//# sourceMappingURL=app-compiled.js.map