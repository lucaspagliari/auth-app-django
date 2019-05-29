from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from user_auth.forms import RegistrationForm


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)

        if form.is_valid():
            form.save()
            redirect('profile')
    else:
        form = RegistrationForm()

    args = {'form': form}
    return render(request, 'registration/register.html', args)


def logout_view(request):
    logout(request)
    return render(request, 'registration/logout.html')


def index(request):
    return render(request, 'user_auth/index.html')


def profile(request):
    return render(request, 'user_auth/profile.html')