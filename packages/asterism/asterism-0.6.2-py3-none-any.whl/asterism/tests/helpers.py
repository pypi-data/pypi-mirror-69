import random
import string

import django


def random_string(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for x in range(size))


def configure_django():
    from django.conf import settings

    try:
        settings.configure(
            DEBUG_PROPAGATE_EXCEPTIONS=True,
            DATABASES={
                'default': {
                    'ENGINE': 'django.db.backends.sqlite3',
                    'NAME': ':memory:'
                }
            },
            SITE_ID=1,
            SECRET_KEY='not very secret in tests',
            USE_I18N=True,
            USE_L10N=True,
            STATIC_URL='/static/',
            ROOT_URLCONF='tests.urls',
            TEMPLATES=[
                {
                    'BACKEND': 'django.template.backends.django.DjangoTemplates',
                    'APP_DIRS': True,
                    'OPTIONS': {
                        "debug": True,  # We want template errors to raise
                    }
                },
            ],
            MIDDLEWARE=(
                'django.middleware.common.CommonMiddleware',
                'django.contrib.sessions.middleware.SessionMiddleware',
                'django.contrib.auth.middleware.AuthenticationMiddleware',
                'django.contrib.messages.middleware.MessageMiddleware',
            ),
            INSTALLED_APPS=(
                'django.contrib.admin',
                'django.contrib.auth',
                'django.contrib.contenttypes',
                'django.contrib.sessions',
                'django.contrib.sites',
                'django.contrib.staticfiles',
                'rest_framework',
                'rest_framework.authtoken',
                'asterism',
            ),
            PASSWORD_HASHERS=(
                'django.contrib.auth.hashers.MD5PasswordHasher',
            ),
        )

        django.setup()
    except RuntimeError:
        pass
