class Student:
   
    def __init__(self,name, age, course = "Science"):
        self.name = name
        self.age = age
        self.course = course
        self.__school = "Ghana"
    

    def __str__(self):
        info = f"My name is {self.name} and my age is {self.age}, I study {self.course} in {self.__school}"
        return info


student1 = Student("Michael",20)
print(student1)
student2 = Student("Fred", 30 , "Finance")
print(student2)

