import  Functions
import json
import datetime
#*****************************************************************************************
#*****************************************************************************************
class Person :
    moods = ('happy','tired','lazy')
    def __init__(self , name , money , mood , healthRate):
        self.name = name
        self.money = money
        self.mood = self.moods[mood]
        self.healthRate = healthRate
    def Sleep(self,hours):
        if hours == 7 :
            print(self.name + " is happy .")
        elif hours < 7 and hours > 0 :
            print(self.name + " is tired .")
        else :
            print(self.name + " is lazy .")
    def Eat(self , meals):
        if meals == 1 :
            print(self.name + " has 50% percent of health .")
        elif meals == 2 :
            print(self.name + " has 75% percent of health .")
        elif meals == 3 :
            print(self.name + " has 100% percent of health .")
        else :
            print(self.name + " has undefined health .")
    def Buy(self,items):
        self.money -= items*10;
        print("Remaining amount of money is " + str(self.money))
#*****************************************************************************************
#*****************************************************************************************
class Car : 
    def __init__(self , name , fuelRate , velocity):
        self.name = name
        self.fuelRate = fuelRate
        self.velocity = velocity
    def Run(self,velocity,distance):
        if self.fuelRate >= distance :
           remaining = 0
        else :
            remaining = abs(self.fuelRate-distance)
        self.velocity = velocity;
        Car.Stop(self,remaining)
    def Stop(self,distance):
        if distance == 0 : 
            print("You have arrived to work.");
        elif distance > 0 :
            print("Not enough fuel to arrive work , Remaining distance is " + str(distance) + " km .") 
        self.velocity = 0
#*****************************************************************************************
#*****************************************************************************************
class Office :
    moods = ('happy','tired','lazy')
    id = 0;
    employeedData = {}
    def __init__(self):
        pass
    def GetAllEmployees(self):
        for key in self.employeedData:
            print(self.employeedData[key])
            print("\n")
    #**************************************************************************************************************
    def GetEmployee(self,empid):
        with open('Data.json', 'r') as file:
            data = json.load(file)
        print("Employee with ID : " + str(empid) + " is : \n") 
        print(data[str(empid)])
    #*****************************************************************************************************************
    @classmethod
    def Hire(cls,employee):
        employee.id = cls.id
        myDict = dict({'ID':employee.id,'Name':employee.name,'Money':employee.money,'Health':employee.healthRate,'Car':employee.car,'Email':employee.email,'Fuel':employee.fuelRate,'Velocity':employee.velocity,'Salary':employee.salary,'Distance':employee.distanceToWork})
        cls.employeedData.update({employee.id : myDict})
        cls.id += 1
        Office.SaveData(cls)
    def Fire(self,id):
        del self.employeedData[id]
        Office.UpdateData(self,id)
        #**************************************************************************************************
    def CalculateLateness(self,employee, arrivalTime , velocity,distance):
        timeElapsed = distance/velocity
        timeDiff = datetime.datetime.strptime("9:0","%H:%M")-datetime.datetime.strptime(arrivalTime, "%H:%M")
        if(timeDiff.days == 0):
            Office.Reward(employee) 
            print("You have been arrived early and rewarded , u need only about " + str(timeElapsed) + " hours to arrive.")
        else:
            Office.Deduct(employee)
            print("You are late , Deduction action is taken with -50 , u need only about " + str(timeElapsed) + " hours to arrive.")
        #********************************************************************************
    @classmethod
    def Reward(cls,employee):
        with open('Data.json', 'r') as file:
             data = json.load(file)
        data[str(employee.id)]["Salary"] += 50
        with open('Data.json', 'w') as file:
             data = json.dump(data,file)
        #********************************************************************************
    @classmethod
    def Deduct(cls,employee):
        with open('Data.json', 'r') as file:
             data = json.load(file)
        data[str(employee.id)]["Salary"] -= 100
        with open('Data.json', 'w') as file:
             data = json.dump(data,file)
        #********************************************************************************
    def SaveData(self):
        with open('Data.json', 'w') as file:
             json.dump(self.employeedData,file)
        #********************************************************************************
    def UpdateData(self,empid):
        with open('Data.json', 'r') as file:
             data = json.load(file)
        del data[str(empid)]
        with open('Data.json', 'w') as file:
             data = json.dump(data,file)
#*****************************************************************************************
#*****************************************************************************************
class Employee(Person,Car) :
    def __init__(self , name , money , mood , healthRate , carName , fuelRate , velocity , id , email , salary , distanceToWork):
        if Functions.SalaryValidator(salary) == False:
            print("Salary value is not valid , it must be numberic and 1000 $ and more")
            exit
        if Functions.FuelRateValidator(fuelRate) == False:
            print("fuel rate value is not valid , it must be numberic and between 0 and 100")
            exit
        if Functions.VelocityValidator(velocity) == False:
            print("velocity value is not valid , it must be numberic and between 0 and 200")
            exit
        if Functions.NumericValidator(distanceToWork) == False or Functions.NumericValidator(mood) == False:
            print("distance and mood values are not valid , it must be numberic")
            exit
        if Functions.EmailValidator(email) == False:
            print("Email is not in correct format.")
            exit
        #*****************************************************************************************************
        self.id = id
        self.car = carName
        self.email = email
        self.salary = salary
        self.distanceToWork = distanceToWork
        self.velocity = velocity
        Car.__init__(self,carName,fuelRate,velocity)   
        Person.__init__(self,name,money,mood,healthRate)
        #***************************************************************************************************** 
    def Work(self,hours):
        if hours == 8 :
            print("He is happy .")
        elif hours < 8 and hours > 0 :
            print("He is lazy .")
        elif hours > 8 :
            print("He is tired .")
        else:
            print("His work mood is undefined .")
        #****************************************************************************************************
    def Drive(self,distance):
        super().Run(self.velocity,self.distanceToWork)
        #****************************************************************************************************
    def Refuel(self,employee):
        with open('Data.json', 'r') as file:
             data = json.load(file)
        data[str(employee.id)]["Fuel"] = 100
        with open('Data.json', 'w') as file:
             data = json.dump(data,file)
        print("Your Fuel rate now is 100%")
        #*****************************************************************************************************
    def SendMail(self,to,subject,message,receiverName):
        file = open("Database.txt" , "a")
        file.write("From : ")
        file.write(self.email)
        file.write("\n")
        file.write("To : ")
        file.write(to)
        file.write("\n")
        file.write("Subject : ")
        file.write(subject)
        file.write("\n")
        file.write("********************************************")
        file.write("\n")
        file.write("Hi " + receiverName +" ,")
        file.write("\n")
        file.write(message)
        file.write("\n")
        file.write("********************************************************************")
        file.write("********************************************************************")
        file.write("\n")
        file.close()
#*****************************************************************************************
#*****************************************************************************************
man1 = Employee("Ahmed" , 2000 , 0 , 80 , "mzda" , 15 , 70 , 1 , "ahmed1994@gmail.com" , 8000 , 20)
man2 = Employee("Mohamed" , 2400 , 1 , 85 , "bmw" , 20 , 75 , 1 , "ahmed1995@yahoo.com" , 7200 , 20)
man3 = Employee("Asaad" , 2800 , 2 , 90 , "hunda" , 14 , 80 , 1 , "ahmed1996@domin.com" , 5000 , 20)
man4 = Employee("Ragy" , 3500 , 0 , 75 , "lancer" , 15 , 70 , 1 , "ahmed1997@gmail.com" , 8000 , 20)
man5 = Employee("Amira" , 5000 , 2 , 85 , "mercedes" , 22 , 75 , 1 , "adham1998@gmail.com" , 4300 , 20)
#*******************************************************************************************************
man1.Drive(20)
man2.Drive(20)
man3.Drive(20)
man4.Drive(20)
man5.Drive(20) 
man2.Refuel(man2) # man 2 fuel rate will be 100 in json file
#*******************************************************************************************************
office = Office()
office.Hire(man1)
office.Hire(man2)
office.Hire(man3)
office.Hire(man4)
office.Hire(man5)
office.Fire(0)
#*******************************************************************************************************
office.GetAllEmployees() # it will print all current employees , all are saved in json file programatically
#*******************************************************************************************************
office.CalculateLateness(man2,"11:30",72,20)   # check by using different times around 9:00
# check functions.py as it contains all validators in case of input by user
office.GetEmployee(1) # pass any id of given id's (id is a class member that will be auto incremented for each employee)
