const sentence = "hello there from lighthouse labs \n";

let countdown = 0; 
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, countdown)
  countdown = countdown + 50; 
};

//Have a countdown that increments up by 50ms every time the loop runs
//Have the function print a character, increment the loop (to the new char and the new timer)
//then print repeat.