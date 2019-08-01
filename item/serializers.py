from rest_framework import serializers

from .models import Categories, Item, UserItem

class CateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['id', 'title']

class ItemSerializer(serializers.ModelSerializer):
    cate = CateSerializer(read_only=True)
    cate_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Item
        fields = ['id', 'cate', 'cate_id', 'title', 'description', 'created', 'price', 'image']


class UserItemSerializer(serializers.ModelSerializer):
    item = ItemSerializer()

    class Meta:
        model = UserItem
        fields = ['item', 'user', 'count']
