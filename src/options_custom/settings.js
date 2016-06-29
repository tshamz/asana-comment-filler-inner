window.addEvent("domready", function () {

    new FancySettings.initWithManifest(function (settings) {
        settings.manifest.saveButton.addEvent("action", function () {
            alert("You clicked me!");
        });
    });

});
