import  random
import webbrowser
from time import sleep
# *********************************************************************************************************************
websites = ['www.google.com' , 'www.yallakora.com' , 'www.udemy.com' , 'www.geeksforgeeks.org' , 'www.programiz.com']
website = random.choice(websites)
print("Selected website is : { " + website + " }")
sleep(1)
webbrowser.open(website)

