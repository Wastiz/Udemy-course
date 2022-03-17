from dataclasses import dataclass
from typing import List
from replit import db

@dataclass
class Account:
  name: str
  password: int
  def connectAccount(self):
    print('Account' , self.name)
@staticmethod
def create():
  name = str(input('Name:'))
  password = int(input('Password:'))
  account = Account(name, password)
  key = name.lower()
  db[key] = account.__dict__
  print('Account created', db[key].value)
  def read():
    key= str(input('Name:')).lower()
  if key in db.keys():
    account = Account(
name = db[key].value['name'],
password = db[key].value['password']
)
account.connectAccount()
return account
else:
  print('not found')
def update():
key = str(input('To update:')).lower()
if key in db.keys():
account = Account(
name = db[key].value['name'],
password = int(input('Change password:'))
)
db[key] = account.__dict__
print('update', db[key].value)
else:
print('not found')
def delete():
key = str(input('To delete:')).lower()
if key in db.keys():
del db[key]
print('Account deleted')
else:
print('not found')
Account.create()
Account.read()
Account.update()
Account.delete()