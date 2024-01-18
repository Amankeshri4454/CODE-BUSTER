const questions = [
    {
        question: "In HTML, what is the purpose of the <abbr> tag?",
        options: [
            "To define an abbreviation or acronym",
            "To create a hyperlink",
            "To apply bold text",
            "To insert a line break",
        ]
    },
    {
        numb: 2,
        question: "What is the purpose of the HTML <nav> tag",
        options: [
            "To define a navigation link",
            "To create a navigation menu",
            " To represent the main content of the document",
            "To embed external content",


        ]

    },

    {
        numb: 3,
        question: "Which of the following is the correct way to comment out multiple lines in HTML",
        options: [
            "<!-- This is a comment -->",
            "// This is a comment //",
            "/* This is a comment */",
            " # This is a comment #",

        ]

    },


    {
        numb: 4,
        question: "In HTML, what is the purpose of the <img> tag",
        options: [
            "Embedding audio files",
            "Creating hyperlinks",
            " Displaying images",
            " Defining tables",

        ]

    },
    {
        numb: 5,
        question: "Which HTML element is used to define navigation links in a webpage",
        options: [
            "<nav>",
            "<ul>",
            "<link>",
            "<navlink>",

        ]

    },
    {
        numb: 6,
        question: "Which tag is used to define an ordered list in HTML.",
        options: [
            "<ul>",
            "<li>",
            "<ol>",
            "<dl>",

        ]

    },
    {
        numb: 7,
        question: "Which attribute is used to open an HTML link in a new tab or window",
        options: [
            "target",
            " new",
            " href",
            " open",


        ]

    },
    {
        numb: 8,
        question: "How can you hide an element on the screen but still make it accessible for screen readers using CSS?",
        options: [
            "visibility: hidden",
            "display: none",
            " opacity: 0",
            " position: absolute; left: -9999px",
            
        ]

    },
    {
        numb: 9,
        question: "What does the CSS property display: flex; do?",
        options: [
            "Adjusts the font size of an element",
            " Enables a flex container and the items inside it become flexible boxes",
            " Changes the text alignment within an element",
            "Sets the background color of an element",
            
        ]

    },
    {
        numb: 10,
        question: "How can you center an element both horizontally and vertically using Flexbox in CSS",
        options: [
            "flexbox: center center",
            "justify-content: center; align-items: center",
            "center: flexbox",
            "center: horizontal vertical",
             
            
        ]

    },
    {
        numb: 11,
        question: " What is the purpose of the CSS property flex-grow?",
        options: [
            " Sets the font size of a flex container",
            "Defines the number of columns in a flex container",
            "Specifies the ability for a flex item to grow if necessary",
            "Controls the spacing between flex items",
             
            
        ]

    },
    {
        numb: 12,
        question: ` "How can you apply a hover effect to an element using CSS transitions? "`,
        options: [
            "element:hover { transition: background-color 0.3s; }",
            "element { transition: hover background-color 0.3s; }",
            " element { hover-transition: background-color 0.3s; }",
            " element { hover: background-color 0.3s; } ",
             
            

        ]

    },
    {
        numb: 13,
        question: "How can you create a fixed background image that doesn't scroll with the content in CSS?",
        options: [
            "background-attachment: scroll",
            "background-scroll: fixed ",
            " background: fixed url('image.jpg');",
            "background-attachment: fixed",

        ]

    },
    {
        numb: 14,
        question: "How can you create a CSS animation that repeats indefinitely?",
        options: [
           " animation: rotate 2s infinite ",
           "animation-repeat: infinite",
           "animation-iteration-count: infinite",
           "animation: repeat 2s",
 

        ]

    },
    {
        numb: 15,
        question: "What does the this keyword refer to in JavaScript",
        options: [
            "Global object",
            "Current function's scope",
            " Current object",
            "Previous function's scope",

        ]

    },
    {
        numb: 16,
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        options: [
            "push()`",
            "append()",
            " addToEnd()",
            " insertEnd()",
            

        ]

    },
    {
        numb: 17,
        question: "What is the purpose of the localStorage object in JavaScript",
        options: [
            "To store data that persists across sessions",
            "To store temporary data during a session",
            "To store data on the server",
            "To store data in a secure manner",
            

        ]

    },
    {
        numb: 18,
        question: "What does the === operator check for in JavaScript?Which of the following JavaScript cannot do?",
        options: [
            "Value equality without type conversion",
            " Value equality with type conversion",
            "Reference equality",
            "Object equality",
            

        ]

    },
    {
        numb: 19,
        question: " How can you prevent the default behavior of an HTML form submission using JavaScript?",
        options: [
            "stopPropagation()`",
            "preventDefault()",
            "stopSubmission()",
            " haltDefault()",
            
        ]

    },
    {
        numb: 20,
        question: "What is the purpose of the setTimeout function in JavaScript?",
        options: [
            "Pauses the execution of the code",
           "Delays the execution of a function",
           "Sets a timer for recurring events",
           "Measures the time taken by a function",

        ]

    },
    {
        numb: 21,
        question: "Which of the following is not a valid way to declare a JavaScript variable?",
        options: [
            "let",
            " var",
            " const ",
            " variable",


        ]

    },

    {
        numb: 22,
        question: "What is Bootstrap?",
        options: [
            "A programming language",
             "A front-end framework",
            " database management system",
            "An operating system"
            ,

        ]

    },

    {
        numb: 23,
        question: "What is the purpose of the Bootstrap grid system",
        options: [
            "To style text",
            "To create responsive layouts",
            "To manage server-side data",
            "To handle backend logic",

        ]

    },

    {
        numb: 24,
        question: "In Bootstrap, which class is used to create a responsive, fixed-width container?",
        options: [
            "container-fluid",
            "container-fixed",
            "container-responsive",
            "container-fixed-width",

            
        ]

    },

    {
        numb: 25,
        question: "What is the purpose of the Bootstrap class img-responsive?",
        options: [
            "makes text responsive",
            "It makes images responsive",
            "It creates responsive tables",
            "It resizes buttons dynamically",            

        ]

    },

    {
        numb: 26,
        question: " What is the role of the Bootstrap JavaScript file?",
        options: [
            "It provides server-side scripting",
            "It enhances the functionality of HTML elements",
            "It manages backend databases",
            "It controls the styling of web pages",
            

        ]

    },

    {
        numb: 27,
        question: "How can you customize the Bootstrap grid breakpoints?",
        options: [
            "By modifying the CSS file directly",
            "By using the breakpoint-custom class",
            "By adjusting settings in the JavaScript file",
            "By adding inline styles to the HTML elements",

        ]

    },
    {
        numb: 28,
        question: " Which utility class in Bootstrap is used to hide an element visually but keep it available for screen readers?",
        options: [
            "hidden",
            "invisible",
            "sr-only",
            "screen-reader",

        ]

    },
    {
        numb: 29,
        question: "FDDI is",
        options: [
            "Bus based network",
            "Mesh network",
            "Star network",
            "Ring network",

        ]

    },
    {
        numb: 30,
        question: "In Bootstrap, how can you add a tooltip to an element?",
        options: [
            "Using the <tooltip> tag",
            "Adding the .tooltip class",
            "Utilizing the data-tooltip attribute",
            "Including the <span class> element",


        ]

    },

]

