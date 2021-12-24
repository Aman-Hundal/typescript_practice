## notes
- TS needs to be compiled into JS so browsers and other systems can read it 
- TS annotation tells data what type it is. TS will throw an error if the data entered is not similar to the annotation (see line 9 in .ts)
- TS error gives the file name and the line/column number which it occurs and descrption of error. 
- You can still run the JS file without any TS errors (ie. if you change hellos arg to 1 and not a string), but if you try to compile the TS file with incorrect data types (like use 1 instead of a string for the hello func) the ts will not compile to JS.
- Errors are very beneficial in large projects.