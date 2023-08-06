
=====
Session Based Authentication
=====

This app is used for session based user authentication, register a new user and forgot password apis

Detailed documentation is in the "docs" directory.

Quick start
-----------

1. Add "session_based_authentication" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'session_based_authentication',
        'rest_auth'
    ]

2. Include the session_based_authentication URLconf in your project urls.py like this::

    path('session/', include('session_based_authentication.urls')),

3. Run ``python manage.py makemigrations``

4. Run  ``python manage.py migrate``

5. Start the development server and visit http://127.0.0.1:8000/admin/
  