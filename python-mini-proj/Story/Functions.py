import re
#****************************************************************************
#****************************************************************************
def SalaryValidator(salary):
    try:
        mysalary = float(salary);
        if(mysalary>=1000):
            return True
        else:
            return False
    except ValueError:
        print("You have entered an invalid salary value")
        return False
#*************************************************************************
#*************************************************************************
def VelocityValidator(velocity):
    try:
        vel = float(velocity);
        if(velocity>=0 and velocity <= 200):
            return True
        else:
            return False
    except ValueError:
        print("You have entered an invalid velocity value")
        return False
#*************************************************************************
#*************************************************************************
def NumericValidator(num):
    try:
        mynum = float(num);
        return True
    except ValueError:
        print("You have entered an invalid value")
        return False
#*************************************************************************
#*************************************************************************
def EmailValidator(email):
    regex = '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
    if(re.search(regex,email)):  
        return True  
    else:
        print("Invalid Email address .")  
        return False
#****************************************************************************
#****************************************************************************
def HealthRateValidator(healthRate):
    try:
        hr = float(healthRate);
        if(hr > 0 and hr <= 100):
            return True
        else:
            return False
    except ValueError:
        print("You have entered an invalid health rate value .")
        return False
#****************************************************************************
#****************************************************************************
def FuelRateValidator(rate):
    try:
        fr = float(rate);
        if(fr >= 0 and fr <= 100):
            return True
        else:
            return False
    except ValueError:
        print("You have entered an invalid health rate value .")
        return False
#****************************************************************************
#****************************************************************************