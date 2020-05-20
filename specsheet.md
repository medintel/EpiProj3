### Mr Roboger's Neighborhood

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
* Include an potion to reverse output order
* Add a second form field that takes a name; for numbers divisible by 3, add user name to output
  * Input: "15"; "Dana"
  * Output: "0,1,"Boop!","Won't you be my neighbor, Dana?", 4,5,"Won't you be my neighbor, Dana?",7,8,9,10,11,"Won't you be my neighbor, Dana?","Won't you be my neighbor?",14"
  * Output: "0,"Beep!","Boop!","Won't you be my neighbor, Dana?", 4,5,"Won't you be my neighbor, Dana?,7,8,"Won't you be my neighbor, Dana?,"Beep!","Beep!","Won't you be my neighbor, Dana?,"Won't you be my neighbor?","Beep!""
