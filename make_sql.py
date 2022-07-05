#  .\mysqldump -h localhost -u admin_loan -p admin_loan > mydatabase.sql
import os
currentPath = os.getcwd()
print(currentPath)
password = "PewVegas123@2022"

os.chdir("C:\\xampp\\mysql\\bin")
os.system('cmd /c ".\mysqldump -h localhost -u admin_loan -p{} admin_loan > {}\mydatabase.sql"'.format(password, currentPath))

print('Success!')
print('File create in: "{}"'.format(currentPath))