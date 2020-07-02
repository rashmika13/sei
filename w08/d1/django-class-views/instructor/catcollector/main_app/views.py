from django.shortcuts import render
from .models import Cat
# from django.views.generic import ListView
from django.views.generic import CreateView, UpdateView, DeleteView

# View functions

def home(request):
  return render(request, 'home.html')

def about(request):
  return render(request, 'about.html')

def cats_index(request):
  cats = Cat.objects.all()
  return render(request, 'cats/index.html', { 'cats': cats })

# class CatsList(ListView):
#   model = Cat

class CatCreate(CreateView):
  model = Cat
  fields = ['name', 'breed', 'description', 'age']
  # success_url = '/cats/'
  # fields = '__all__'

class CatUpdate(UpdateView):
  model = Cat
  fields = ['breed', 'description', 'age']

class CatDelete(DeleteView):
  model = Cat
  success_url = '/cats/'

def cats_detail(request, cat_id):
  cat = Cat.objects.get(id=cat_id)
  return render(request, 'cats/detail.html', { 'cat': cat })

# class CatDetail(DetailView):
#   model = Cat
#   template_name = 'cats/detail'
