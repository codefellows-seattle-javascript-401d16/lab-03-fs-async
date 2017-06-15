## **README**

#### **Description**

I created a module lib/print-files with a function that takes an array of three filepaths and a callback. On success, the function passes an array of the contents of the files. On failure pass an error into the callback callback. I also create an index.js that calls my function with three paths from process.argv and then logs the contents of the three files to the screen.
