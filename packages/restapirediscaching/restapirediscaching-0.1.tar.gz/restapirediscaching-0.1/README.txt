
=====
Redis caching using rest api
=====

This app will be able to cache all the products, making it easy and fast to retrieve data is subseqquent queries


Detailed documentation is in the "docs" directory.

Quick start
-----------

1. Add "django_redis_caching" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'django_redis_caching',
    ]

2. Include the django_redis_caching URLconf in your project urls.py like this::

    path('redis/', include('django_redis_caching.urls')),

3. Run ``python manage.py makemigrations``

4. Run  ``python manage.py migrate``

5. Start the development server and visit http://127.0.0.1:8000/admin/
  