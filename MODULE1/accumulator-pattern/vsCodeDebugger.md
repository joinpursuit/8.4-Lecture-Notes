# VsCode Debugger


## Open your working directory in vscode

```bash
code .
```



## Create a launch.json file


  First - click the button on the left with the bug and triangle


  <img src ="assets/button.png" width="100"> 


  Click the link to create a new json file.


  <img src ="assets/createJSON.png" width="300"> 
  
  You will be promted to select a configuration. 
  Select `Node.js`

  <img src ="assets/selectNode.png" width="300"> 



After successfuly creating this file you should see a .vscode
directory with a lanuch.json file

<img src ="assets/newFiles.png" width="300"> 

## Run the debugger


  First select a breakpoint to stop at by clicking on a line in your code.


  <img src ="assets/breakPoint.png" width="300"> 


  Your code will stop on any break point you've selected and debug controlls will appear at the top of your window


  Additionally you will see a `debug console` on the bottom of your window.  

  <img src ="assets/debugControls.png" width="300"> 

This console will allow you to engage with your code paused on the state it is in during its execution.  

<img src ="assets/debugConsole.png" width="300"> 

You VSCode border color will change to `orange` while in a debuggin session.
That's how we use VSCode's built in debugger tools!



