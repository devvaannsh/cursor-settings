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
        // Create dialog HTML
        const dialogHTML = `
            <div class="cursor-settings-dialog">
                <h3>Choose Cursor Style</h3>
                <div>
                    <label>
                        <input type="radio" name="cursorStyle" value="bar" checked>
                        Bar Cursor
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="cursorStyle" value="underline">
                        Underline Cursor
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="cursorStyle" value="block">
                        Block Cursor
                    </label>
                </div>
            </div>
        `;

        // Show the dialog
        Dialogs.showModalDialog(
            DefaultDialogs.DIALOG_ID_INFO,
            "Cursor Settings",
            dialogHTML,
        );
    }

    // First, register a command - a UI-less object associating an id to a handler
    const MY_COMMAND_ID = "cursor.settings"; // package-style naming to avoid collisions
    CommandManager.register("Cursor Settings", MY_COMMAND_ID, handleCursorSettings);

    // Add indicator to status bar
    StatusBar.addIndicator(
        MY_COMMAND_ID,
        $("<div>Cursor</div>").click(handleCursorSettings),
        true, // show the indicator
        "", // CSS class
        "Switch between cursor settings" // tooltip text
    );

    // Initialize extension once shell is finished initializing.
    AppInit.appReady(function () {
        console.log("'Cursor' extension loaded");
    });
});