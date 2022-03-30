from django.urls import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.core.mail import send_mail
from . forms import Contact

# Create your views here.


       # index page
def index(request):
       if request.method =="POST":
              forms = Contact(request.POST)
              if forms.is_valid():
                     FirstName = forms.cleaned_data['FirstName']
                     LastName = forms.cleaned_data['LastName']
                     Subject = forms.cleaned_data['Subject']
                     Sender = forms.cleaned_data['Sender']
                     Message = forms.cleaned_data['Message']
                     recepient = [Sender]
                     msg = f'{FirstName} {LastName}\n'
                     msg += Message
                     send_mail(Subject,msg,Sender,recepient)
                     return HttpResponseRedirect(reverse('PortFolio:index'))
       else:
              forms = Contact(request.POST)
       return render(request,'PortFolio/index.html',{'forms':forms})