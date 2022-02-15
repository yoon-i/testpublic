from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

from .forms import UserForm

# Create your views here.
def signup(request) :

    if request.method == 'POST' :
        form = UserForm(request.POST)
        if form.is_valid() :
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request,user)
            return redirect('main:index')


    else :
        form = UserForm() # auth form과 user 모델을 복사해서 만든 사용자계정 클래스 #userform객체를 사용해서 렌더링할수있도록 정보를 form이라는 변수를 만들어 저장
    return render(request, 'accounts/signup.html', {'form':form})


