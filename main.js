// Extension that is used for cursor settings, like changing the style of the cursor, the width of the cursor block or cursor blinking style
define(function (require, exports, module) {
    "use strict";
    // Brackets modules
    const AppInit = brackets.getModule("utils/AppInit"),
        DefaultDialogs = brackets.getModule("widgets/DefaultDialogs"),
        Dialogs = brackets.getModule("widgets/Dialogs"),
        CommandManager = brackets.getModule("command/CommandManager"),
        Menus = brackets.getModule("command/Menus"),
        StatusBar = brackets.getModule("widgets/StatusBar");

    // Function to run when the menu item is clicked
    function handleCursorSettings() {
        // 
    }

    // First, register a command - a UI-less object associating an id to a handler
    const MY_COMMAND_ID = "cursor.settings";   // package-style naming to avoid collisions
    CommandManager.register("Cursor Settings", MY_COMMAND_ID, handleCursorSettings);

    StatusBar.addIndicator(
        MY_COMMAND_ID,
        $("<div>Cursor</div>").click(handleCursorSettings),
        true, // show the indicator
        "", // CSS class
        "Switch between cursor settings", // tooltip text
    );

    // Initialize extension once shell is finished initializing.
    AppInit.appReady(function () {
        console.log("'Cursor' extension loaded");
    });
});