using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;

namespace Cirno5.Services.Storage.Nosql
{
    public class NoSqlConnection
    {
        private IDocumentClient Client { get; set; }
        public string DatabaseId { get; set; }
        public string CollectionId { get; set; }

        private string Key { get; set; }
        private string Endpoint { get; set; }

        public NoSqlConnection(string databaseId, string collectionId, string key, string endpoint)
        {
            this.DatabaseId = databaseId;
            this.CollectionId = collectionId;
            this.Key = key;
            this.Endpoint = endpoint;
            this.Client = new DocumentClient(
                new Uri(this.Endpoint),
                this.Key,
                new ConnectionPolicy
                {
                    EnableEndpointDiscovery = false
                });
        }

        public Uri GetDocumentUri(string id)
        {
            return UriFactory.CreateDocumentUri(this.DatabaseId, this.CollectionId, id);
        }

        public Uri GetCollectionUri()
        {
            return UriFactory.CreateDocumentCollectionUri(this.DatabaseId, this.CollectionId);
        }

        public Uri GetDatabseUri()
        {
            return UriFactory.CreateDatabaseUri(DatabaseId);
        }

        public IDocumentClient GetClient()
        {
            return this.Client;
        }

        public async Task CreateDatabaseIfNotExistsAsync()
        {
            try
            {
                await Client.ReadDatabaseAsync(this.GetDatabseUri());
            }
            catch (DocumentClientException e)
            {
                if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    await Client.CreateDatabaseAsync(new Database { Id = this.DatabaseId });
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task CreateCollectionIfNotExistsAsync()
        {
            try
            {
                await Client.ReadDocumentCollectionAsync(this.GetCollectionUri());
            }
            catch (DocumentClientException e)
            {
                if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    await Client.CreateDocumentCollectionAsync(
                        UriFactory.CreateDatabaseUri(this.DatabaseId),
                        new DocumentCollection { Id = this.CollectionId },
                        new RequestOptions { OfferThroughput = 1000 });
                }
                else
                {
                    throw;
                }
            }
        }
    }

}