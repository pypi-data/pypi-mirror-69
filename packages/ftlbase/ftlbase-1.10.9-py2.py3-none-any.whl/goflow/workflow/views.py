#!/usr/local/bin/python
# -*- coding: utf-8 -*-
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.shortcuts import render

from goflow.runtime.models import WorkItem
from .models import Process, Activity, Transition


# def index(request, template='workflow/index.html', extra_context={}):
#     """workflow dashboard handler.
#
#     template context contains following objects:
#     - user
#     - processes
#     - roles
#
#     other applications (ie runtime or apptools) should fill extra_context.
#     """
#     me = request.user
#     roles = Group.objects.all()
#     processes = Process.objects.all()
#     # optional package (ugly design)
#     try:
#         from goflow.apptools.models import DefaultAppModel
#         obinstances = DefaultAppModel.objects.all()
#     except Exception:
#         obinstances = None
#
#     context = {'processes': processes, 'roles': roles}
#     context.update(extra_context)
#     return render(request, template, context,
#                               context_instance=RequestContext(request))


# def debug_switch_user(request, username, password, redirect=None):
#     """
#     fast user switch for test purpose.
#
#     parameters:
#
#     username
#         username
#     password
#         password
#     redirect
#         redirection url
#
#     *FOR TEST ONLY*
#
#     see template tag switch_users.
#     """
#     logout(request)
#     # return HttpResponseRedirect(redirect)
#     if not redirect:
#         redirect = request.META['HTTP_REFERER']
#     user = authenticate(username=username, password=password)
#     if user is not None:
#         if user.is_active:
#             login(request, user)
#             return HttpResponseRedirect(redirect)
#         else:
#             return HttpResponse('user is not active')
#     else:
#         return HttpResponse('authentication failed')


# def userlist(request, template):
#     """
#     not used
#     """
#     return HttpResponse('user page.')


def process_dot(request, id, template='goflow/process.dot'):
    """graphviz generator (**Work In Progress**).
    (**Work In Progress**)

    id process id
    template graphviz template

    context provides: process, roles, activities
    """
    process = Process.objects.get(id=int(id))
    context = {
        'process': process,
        'roles': ({'name': 'role1', 'color': 'red'},),
        'activities': Activity.objects.filter(process=process),
        'transitions': Transition.objects.filter(process=process),
    }
    return render(request, template, context)


def cron(request=None):
    """
    (**Work In Progress**)
    """
    # TODO: move to instances ?
    for t in Transition.objects.filter(condition__icontains='workitem.timeout'):
        workitems = WorkItem.objects.filter(
            activity=t.input).exclude(status=WorkItem.STATUS_CONCLUDED)
        for wi in workitems:
            wi.forward(request, timeout_forwarding=True)

    if request:
        messages.success(request, message="cron has run.")
        if 'HTTP_REFERER' in request.META:
            url = request.META['HTTP_REFERER']
        else:
            url = '/#/'
        return HttpResponseRedirect(url)
