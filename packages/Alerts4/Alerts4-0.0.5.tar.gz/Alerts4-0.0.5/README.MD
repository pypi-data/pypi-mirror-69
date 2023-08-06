# FORWARD4-ALERTs

A CLI app used to stimulate a forum for fake job alerts and allow users either post a fake job or search with keywords


### How to install 

Verify that you have the following prerequisites in place before installing the sample:

- Install Python from https://www.python.org/. The program can be run on any operating system that supports Python 3.x, including recent versions of Windows, Linux, and Mac OS. In some cases, you may need to use a different command to launch Python. 
Depedencies include Twilio, Pyfiglet, termcolor
You can follow either step to install the program on your computer:

1.  Clone the repo with this command:

`git clone https://github.com/startng/forward4_alerts.git`   

- Create and activate a virtual environment (optional). 

- In the root folder of your cloned repo, install the dependencies for the sample as listed in the requirements.txt file with this command: pip install -r requirements.txt.

2.  Run   
`pip install Alerts4`   
This would install the program on your system


### How to use
If you installed using the clone method, then do this
1. Go into the root directory of the repo

2. Then run the following command on the terminal    
    `python -m forwardAlert4`

3. Follow the instruction prompt

Else if you installed using the pip command
1. Open a terminal and run    
    `forwardAlert4`

2. Follow the instruction prompt

## NOTE 
To use the application as desired, you need to setup your gmail account to allow for email notifications
- First go to https://myaccount.google.com 
- Set **"Allow less secure apps"** to True or On whichever the case maybe

You need to also get a twilio account for the sms notifications
- First create an account at https://twilio.com
- Create a project and obtain a twilio auth token and SID
- Obtain your twilio number
    Please do note that with a free account, twilio only allows you to send messages to verified number
    So to be able to receive the sms, go to your twilio dashboard and register the phone number you plan on using to get the sms.
After getting these variables, upon using the application, you'd be prompted to input these variables.

**These variables can only be input once so do as much with accuracy as to ensure no error**
