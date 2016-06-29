this.manifest = {
    "name": "My Extension",
    "icon": "icon.png",
    "settings": [
        {
          "tab": "Settings",
          "group": "Behavior",
          "name": "isAuto",
          "type": "radioButtons",
          "label": "Extension should add text:",
          "options": [
            {value: true, text: "Automatically"},
            {value: false, text: "After clicking the extension's Jesus icon"}
          ],
          default: true
        },
        {
            "tab": "Settings",
            "group": "Comment Text",
            "name": "myDescription",
            "type": "description",
            "text": "Enter the text you'd like to use to prefill your Asana comments."
        },
        {
            "tab": "Settings",
            "group": "Comment Text",
            "name": "prefillText",
            "type": "textarea",
            "label": "",
            "text": "Write a comment..."
        },
        {
            "tab": "Settings",
            "group": "Comment Text",
            "name": "myDescription",
            "type": "description",
            "text": "Note: *<b>bold</b>* <em>_italic_</em> -<u>underline</u>-"
        }
    ],
    "alignment": []
};
