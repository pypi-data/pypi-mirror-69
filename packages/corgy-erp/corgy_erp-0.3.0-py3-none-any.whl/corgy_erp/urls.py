"""corgy_erp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.views import generic
from material.frontend import urls as frontend_urls
from django.contrib.sitemaps.views import sitemap
from django.contrib import sitemaps

class StaticViewSitemap(sitemaps.Sitemap):
    priority = 0.5
    changefreq = 'daily'

    def items(self):
        return ['calendar', 'workflow', 'license']

    def location(self, item):
        return reverse(item)

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('', include(frontend_urls)),
    url('avatar/', include('avatar.urls')),
    path('pages/', include('django.contrib.flatpages.urls')),
    url('^$', generic.RedirectView.as_view(url='./workflow/'), name="index"),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap')
]
