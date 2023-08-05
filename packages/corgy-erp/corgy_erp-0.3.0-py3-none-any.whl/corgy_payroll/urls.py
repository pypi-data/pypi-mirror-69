from django.conf.urls import url
from django.views import generic
from django.urls import include, path

from . import views


urlpatterns = [
    url('^$', generic.RedirectView.as_view(url='./payrollmodel/'), name="index"),
    url('^payrollmodel/', include(views.PayrollModelViewSet().urls)),
    path('', generic.TemplateView.as_view(template_name="corgy_payroll/index.html"), name="index"),
]