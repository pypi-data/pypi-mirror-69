# Python functions for ABB IRB-140 
Class and functions for communicating with RobotWare through Robot Web Services (Rest API)

### function examples;

**set\_rapid\_variable:**  
POST request to update variables in RAPID  
Requires name of variable and value  
returns http response

**get\_rapid\_variable:**  
GET request to get value from variable in RAPID  
Requires name of variable  
returns the value of the specified variable

## example of use
    
    from rwsuis import RWS

	# A session gets created:
 
	robot = RWS.RWS("base_url")

	# Excecute wanted commands:
	
	robot.set_rapid_variable("variablename", 1)

For further information be sure to check out: https://abb-robot-machine-vision.readthedocs.io/