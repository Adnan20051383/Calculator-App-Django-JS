from django.shortcuts import render


def show_calculator(request):
    return render(request, 'calculator-view.html')
