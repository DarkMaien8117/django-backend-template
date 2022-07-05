# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from myproject.utils import get_db_handle, get_collection_handle
from rest_framework.parsers import JSONParser
# from myapp.serializers import AccountSerializer

#Connect with Mongo
mydb = get_db_handle('reactpython')
mycol = get_collection_handle(mydb , 'Account')

def parseData(request):
    return JSONParser().parse(request)

@csrf_exempt  
def login(request):
  text = "login-django response : "
  return JsonResponse(text   , safe = False)

@csrf_exempt
def signup(request):  
  # mycol.find({...})
  # mycol.insert({...})
  # mycol.insert_one({...})
  # mycol.insert_many([{...},{...}])
  # mycol.update({...})

  account_data = parseData(request)
  
  element = {
    'Username': account_data['Username'],
    'Password': account_data['Password']
  }

  mycol.insert_one(element)
  count = mycol.count()
  return JsonResponse(count , safe = False)

  # account_data = parseData(request)
  # account_serializer = AccountSerializer(data = account_data)
  # if account_serializer.is_valid():
  #   account_serializer.save()
  #   return JsonResponse("Signup Successfully!")
  # return JsonResponse("Signup Error!")



