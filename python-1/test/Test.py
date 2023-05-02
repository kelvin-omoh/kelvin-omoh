import random

_Africa = open("./Africa.txt", "r")
_Asia = open("./Asia.txt", "r")
_Europe = open("./Europe.txt", "r")
_North_America = open("./North America.txt", "r")
_South_America = open("./South America.txt", "r")

africa = _Africa.read().split()
asia = _Asia.read().split()
europe = _Europe.read().split()
north_america = _North_America.read().split()
south_america = _South_America.read().split()

All_continents = africa + asia + europe + north_america + south_america


random_country = random.choice(All_continents)

# print(random_country)

print("""\nWelcome, here is how this game is been played!!!\n
You would have to enter a continent that you think the 
presented country is located in

pick from the following options
    
    Asia
    Africa
    Europe
    North_America
    South_America

I guess you understand,  let give it a try.

""")
      

goods=0  
fails=0  

# scores 
def incre():
      global goods
      goods +=1
     

def dec():
    global fails
    fails=fails+1
   

def toContinue():
    global fails
    global goods
    answer=input(
        """\n\n\n\nDo You want to continue the game..............
                   IF (YES)!!!------------>>>>   ENTER y: 
                   IF (NO)!!!------------>>>>    ENTER N:  \n"""
    )
    if(answer.lower()=="y"):
        initalize()
    if(answer.lower()=='n'):
        print("THANK YOU .....YOU CAN TRY AGAIN LATER")
        print('  your total win 🤩🤩🎊🥳 is :  ',goods, '\n and your total fails 🙁🙁🙁 is :',fails)





def initalize():
  global random_country
  random_country = random.choice(All_continents)
  while True:
    
    user_guess = input(f"Enter which continent you think {random_country} is located ??? ").lower()
   
    if user_guess == "asia":
        if random_country in asia:
            print("You are correct")
            incre()
           
            toContinue()
            
            break
        else:
            print("You are wrong")
            dec()
            continue
    if user_guess == "africa":
        if random_country in africa:
            print("You are correct")
            incre()
            toContinue()
            break
        else:
            print("You are wrong")
            dec()
            continue
    if user_guess == "europe":
        if random_country in europe:
            print("You are correct")
            incre()
            toContinue()
            break
        else:
            print("You are wrong")
            dec()
            continue
    if user_guess == "north america":
        if random_country in north_america:
            print("You are correct")
            incre()
            toContinue()
            break
        else:
            print("You are wrong")
            dec()
            continue
    if user_guess == "south america":
        if random_country in south_america:
            print("You are correct")
            incre()
            toContinue()
            break
        else:
            print("You are wrong")
            dec()
            continue
    if user_guess == "quit" or user_guess == "exit":
        break
    else:
        print("You are wrong")
        dec()

initalize()
# To check the score of the game