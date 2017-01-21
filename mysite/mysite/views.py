from django.http import *
from webscrape import *
from django.shortcuts import *

#AIzaSyBLRBQ7bSQR5fWCbMFNrfob-nEIDnr4I2E

def displaylist(request):
    cont = {"boldmessage":"Hello"}
    data = scrape()
    return render_to_response('./templates/main.html')
    #return HttpResponse("")