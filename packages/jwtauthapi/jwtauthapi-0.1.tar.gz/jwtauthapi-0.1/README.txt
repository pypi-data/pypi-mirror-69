
=====
JWT Based Authentication
=====

This app is used for JWT based user authentication

Detailed documentation is in the "docs" directory.

Quick start
-----------

1. Add "jwt_based_authentication" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'jwt_based_authentication',
    ]

2. Then, In settings.py add rest_framework_simplejwt.authentication.JWTAuthentication to the list of authentication class.
	REST_FRAMEWORK = {
	  'DEFAULT_AUTHENTICATION_CLASSES': (
	    'rest_framework_simplejwt.authentication.JWTAuthentication',
	  ),
	}

3. Include the jwt_based_authentication URLconf in your project urls.py like this::

    path('jwt/', include('jwt_based_authentication.urls')),

4. Run ``python manage.py makemigrations``

5. Run  ``python manage.py migrate``

6. Start the development server and visit http://127.0.0.1:8000/admin/
  