from cloudinary.models import CloudinaryField
from django.db import models
from djongo import models
from bson.objectid import ObjectId
import cloudinary
from cloudinary.forms import CloudinaryJsFileField


# Create your models here.

# user table


class Users(models.Model):
    user_id = models.ObjectIdField()
    # user_id = ObjectId()
    user_name = models.TextField()
    user_email = models.TextField()
    user_password = models.TextField()
    user_phon = models.TextField()
    user_img = models.TextField()
    user_bio = models.TextField()
    objects = models.DjongoManager()

# admin table


class Admin(models.Model):
    # admin_id = models.ObjectIdField()
    admin_id = models.ObjectIdField()
    admin_name = models.TextField()
    admin_email = models.TextField()
    admin_password = models.TextField()
    objects = models.DjongoManager()


# services table


class Service(models.Model):
    # service_id = models.ObjectIdField()
    service_id = models.ObjectIdField()
    service_name = models.TextField()
    service_img = models.TextField()
    service_price = models.TextField()
    objects = models.DjongoManager()


# tips table


class Tip(models.Model):
    # _id = ObjectId()
    _id = models.ObjectIdField()
    tip_title = models.CharField(max_length=40)
    tip_text = models.TextField()
    # tip_img = CloudinaryField('image', default=None)
    tip_img = CloudinaryJsFileField()
    user_id = models.TextField()
    objects = models.DjongoManager()

    # objects = models.DjongoManager()


class Fav(models.Model):
    fav_id = models.ObjectIdField()
    user_id = models.IntegerField()
    tip_id = models.IntegerField()
    objects = models.DjongoManager()


class TipCommints(models.Model):
    commint_id = models.ObjectIdField()
    tip_id = models.IntegerField()
    user_id = models.IntegerField()
    commint_text = models.TextField()
    objects = models.DjongoManager()


# class Photo(models.Model):
#     image = CloudinaryField('image')
