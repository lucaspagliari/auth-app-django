from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from user_auth.forms import RegistrationForm



def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)

        if form.is_valid():
            form.save()
            redirect('profile')
    else:
        form = RegistrationForm()

    args = {'form' : form}
    return render(request, 'registration/register.html', args)


def index(request):
    return render(request, 'user_auth/index.html')

def profile(request):
    return render(request, 'user_auth/profile.html')
'''
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('profile')
    else:
        form = UserCreationForm()
    
    return render(request, 'registration/register.html', {'form': form})

def profile(request):
    return render(request, 'user_auth/profile.html')
'''

