## notes
- The Type System
 - types are critical for TS
 - refer to TS handbook
 - Basic Types
  - types that are inclded by  default in TS
  - in TS we define a type with a colon
  - why CANT I USE CONST AND LET? IT CONVERTS TO VAR which i hate
  - TS has the ability to add as many types as you would like using the modular class and interface system.
  - however there are built in basic types that you can use
    - Number 
    - String
    - Boolean (allows you to lock a property between true or false)
    - array
    - Enum
    - Any
    - void
  - See types.ts for examples of the above types
  - interfaces
   - another way TS checks our code for errors as its compiled to js
   - an interface is a def for an object that tells TS what that object is going to be
   - see interfaces.ts
  - Classes in TS
   - more powerful and similar to interfaces in TS
   - classes make up the blueprint of objects (like in JS). They are constructed have various instances (which are called objects)
   - see classes.ts
   - classes can implement interfaces
  - inheritance in TS
   - inheritance is a way for objects or classes to gain access to the properties of classes that are possesed by other objects
   extends is the key word (similar to JS)