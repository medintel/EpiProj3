# __Mr Roboger's Neighborhood__

#### __Webpage that takes input number, changes to series of phrases based on numbers.
#### __V.1 5/20/20

#### By **Jmieras**

## Description
__The index.html file accepts a userName and inputNumber. The scripts.js file is used to covert the number first to an array from 0 to the value of the number. The numbers in the array are converted by the following execution of orders:
1. "Won't you be my neighbor, [username]?" if the number is divisble evenly by 3; 
2. "Won't you be my neighbor?" if the number contains 3; 
3. "Boop" if the number contains 2; 
4. "Beep" if the number contains 1.

#### Setup/ Installation Reuirements: 
Updated web browser with ability to run HTML, CSS, JavaScript files. 

## Known Bugs
None; unknown awaiting discovery.

## Support and contact details
Please contact medinel on Github for questions, concerns, or ideas. 

## Technologies Used
Technologies used: HTML, CSS, JavaScript, jQuery.

### License 
Licensing: This software is licensed under the MIT license. 
Copyright (c) 2020 Jamie Mieras 


## Design Specifications
### Spec 1
* Take input number from user
* Return inputtedNumber into a range of numbers from [0,1,2... inputted number]
  * Input: "6"
  * Output: "0,1,2,3,4,5,6"

### Spec 2
* Numbers that contain 3: all digits replaced with "Won't you be my neighbor?"
  * Input: "14"
  * Output: "0,1,2,"Won't you be my neighbor?", 4,5,6,7,8,9,10,11,12,"Won't you be my neighbor?",14"

### Spec 3
* Numbers that contain 2: all digits replaced with "Boop!"
  * Input: "14"
  * Output: "0,1,"Boop!","Won't you be my neighbor?", 4,5,6,7,8,9,10,11,"Boop!","Won't you be my neighbor?",14"

### Spec 4
* Numbers that contain 1: all digits is replaced with "Beep!"
  * Input: "14"
  * Output: "0,"Beep!","Boop!","Won't you be my neighbor?", 4,5,6,7,8,9,"Beep!","Beep!","Boop!","Won't you be my neighbor?","Beep!""

### Spec 5
* User should be able to enter new number and see new results repeatedly 

### Spec 6 [add-ons]
* Add formatting, images, styles, custom animations
* Implement different behaviors/ effects/ images for different inputs
* Include an option to reverse output order
* Add a second form field that inputs a name. For numbers divisible by 3, add user name to output display: 
  * Input: "15"; "Dana"
  * Output: "0,"Beep!","Boop!","Won't you be my neighbor, Dana?", 4,5,"Won't you be my neighbor, Dana?",7,8,"Won't you be my neighbor, Dana?","Beep!","Boop!","Won't you be my neighbor, Dana?","Won't you be my neighbor?","Beep!""

