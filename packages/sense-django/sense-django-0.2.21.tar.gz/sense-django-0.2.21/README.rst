============
sense-django
============

sense-django is a simple Django app. It contains three middlewares used in django project.  

Quick start
-----------

1. Add "sense_django" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'sense_django',
    ]

2. Add "sense_django.middleware.UserTokenCheck" to your MIDDLEWARE settings like this::

    MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    ...
    'sense_django.middleware.UserTokenCheck',
    'sense_django.middleware.PermissionCheck',
    'sense_django.middleware.RequestLogMiddleware'
    ]


In project, if error we have not catch，front page will show error detail and error path, no json result,so sense_django
contains a decorator to catch this error json detail

Quick start
-----------

1.Import and Add decorator in interface like this::

    from sense_django import *
    @catch_view_exception
    def test1(request):
        ...

2.In the production environment，set debug=0，in the test, set debug=1::

    settings.ini
    [settings]
    debug=0/1


3、在settings.ini加上::

    [mysql_auth]
    host = rm-2ze2w07n3n7r4l3zmao.mysql.rds.aliyuncs.com
    pass = sdai@2018A1
    port = 3306
    user = root
    

4、在项目的settings.py的db配置出加上::

    'auth': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'authentication',
        'HOST': config('mysql_auth', 'host'),
        'PORT': config('mysql_auth', 'port'),
        'USER': config('mysql_auth', 'user'),
        'PASSWORD': config('mysql_auth', 'pass'),
    },
    
5、在 DATABASE_ROUTERS 对应的 ModelRouter 加上 ::

     elif model._meta.app_label == 'auth':
            return 'auth'

6、前端使用时根据 http://sensedeal.wiki:4001/?#/permissiongroup 的模块确定system参数调用auth项目的鉴权。

7、如果settings.ini里的debug为1，则可以通过user_id参数通过中间件，然后通过request.user 获取user对象，生产环境则需要前端通过token参数传递用户信息。

