from django.db import models
from django.utils.text import slugify

# Create your models here.
# blog, category -> name, image, desctiption, slug , tag, comment 
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    img = models.FileField(upload_to='category/', null=True, blank=True)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
    

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = slugify(name)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Tag, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

class Blog(models.Model):
    title = models.CharField(max_length=100, unique=True)
    img = models.FileField(upload_to='blog/', null=True, blank=True)
    slug = models.SlugField(max_length=255, unique=True)
    is_slider = models.BooleanField(default=False)
    is_Featured = models.BooleanField(default=False)
    sort_description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    tag = models.ManyToManyField(Tag)
    description = models.TextField()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Blog, self).save(*args, **kwargs)

    def __str__(self):
        return self.title + self.slug

class Comment(models.Model):
    ratings = (
        (1,1),
        (2,2),
        (3,3),
        (4,4),
        (5,5),
    )
    user = models.CharField(max_length=100)
    email = models.EmailField()
    comment = models.TextField()
    rating = models.CharField(max_length=100, choices=ratings, default=3)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user + self.comment