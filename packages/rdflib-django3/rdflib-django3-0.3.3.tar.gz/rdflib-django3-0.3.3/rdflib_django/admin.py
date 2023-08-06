"""
Defines admin options for this RDFlib implementation.
"""
from django.contrib import admin
from . import models, forms, store


class NamedGraphAdmin(admin.ModelAdmin):
    """
    Admin module for named graphs.
    """

    list_display = ('identifier', )
    ordering = ('identifier', )
    search_fields = ('identifier', )


class NamespaceAdmin(admin.ModelAdmin):
    """
    Admin module for managing namespaces.
    """
    list_display = ('store', 'prefix', 'uri')
    ordering = ('-store', 'prefix')
    search_fields = ('prefix', 'uri')
    form = forms.NamespaceForm

    def get_actions(self, request):
        return []

    def has_delete_permission(self, request, obj=None):
        """
        Default namespaces cannot be deleted.
        """
        if obj is not None and obj.identifier == store.DEFAULT_STORE:
            return False

        return super(NamespaceAdmin, self).has_delete_permission(request, obj)


admin.site.register(models.NamedGraph, NamedGraphAdmin)
admin.site.register(models.NamespaceModel, NamespaceAdmin)

admin.site.register(models.URIStatement)
admin.site.register(models.LiteralStatement)
