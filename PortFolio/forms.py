from django import forms

class Contact(forms.Form):
    FirstName = forms.CharField(max_length=255,label='FirstName')
    LastName = forms.CharField(max_length=255,label='LastName')
    
    Subject = forms.CharField(max_length=255,label='Subject')
    Sender = forms.EmailField(max_length=255,label='Email-Address')
    Message = forms.CharField(widget=forms.Textarea,label='Message')
    
    def __init__(self,*args,**kwargs):
        super().__init__(*args,**kwargs)
        for field_name in self.fields:
            field = self.fields.get(field_name)
            self.fields[field_name].widget.attrs.update({'placeholder':field.label})