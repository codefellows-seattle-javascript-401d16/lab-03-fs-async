![cf](https://i.imgur.com/7v5ASc8.png) lab-03-fs-readfile
======

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Configuration
* Include the following files

* README.md -DONE
* .gitignore -DONE
* .eslint-DONE
* .eslintrc-DONE
* .package.json-DONE
* Add a test and lint script to your package.json -DONE


## Description:
* create module `lib/print-files` with a function that takes an array of three filepaths and a callback -DONE
  * it should have a function signature (paths, callback) => undefined -DONE
  * expect the callback function signature to be (err, data) => undefined -DONE
  * read the three files in order -DONE
  * on success pass an array of the contents of the files the data param of the callback `callback(null, data)`  -DONE
  * on failure pass and error in to the callback `callback(err)`-DONE
* create an `index.js` that calls your function with three paths from process.argv -DONE
  and then logs the contents of the three files to the screen -DONE
  * (your console.log should be  in the index.js file not in your print-files function)-DONE

# Documentation
* Write a description of your code in your readme

## Bonus 2pts
* Write tests that guarantee that the files are logged in order.-DONE
* You will also need to look up and implement async testing, making sure that you are not getting "false positives" (tests that are passing but shouldn't be).-DONE
  * hint read mocha docs    
