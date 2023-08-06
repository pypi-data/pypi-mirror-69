"""
Management command for exporting RDF from the store.
"""
from django.core.management.base import BaseCommand
import sys
from rdflib.term import URIRef
from rdflib_django import utils


class Command(BaseCommand):
    """
    Command object for exporting RDF.
    """

    help = """Exports an RDF resource.

Examples:
    {0} rdf_export my_file.rdf
    {0} rdf_export --format n3 my_file.n3
    {0} rdf_export --context http://example.com/context
    """.format(sys.argv[0])

    def add_arguments(self, parser):
        parser.add_argument(
            '--context', '-c', dest='context',
            help='Only RDF data from the context with this identifier will be exported. If not specified, a new blank context is created.'  # noqa: E501
        )

        parser.add_argument(
            '--store', '-s', dest='store',
            help='RDF data will be exported from the store with this identifier. If not specified, the default store is used.'  # noqa: E501
        )

        parser.add_argument(
            '--format', '-f', dest='format', default='xml',
            help='Format of the RDF data. This option accepts all formats allowed by rdflib. Defaults to xml.'  # noqa: E501
        )

    def handle(self, *args, **options):
        store_id = options.get('store')
        context_id = options.get('context')
        target = args[0] if args else sys.stdout

        if context_id:
            graph = utils.get_named_graph(
                URIRef(context_id), store_id=store_id
            )
        else:
            graph = utils.get_conjunctive_graph(store_id)

        # noinspection PyUnresolvedReferences
        graph.serialize(target, format=options.get('format'))
