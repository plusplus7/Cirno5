﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Microsoft.Azure.Documents.Linq;
using System.Linq.Expressions;

namespace Cirno5.Services.Storage.Nosql
{

    public class NoSqlItemStorage<T> : IStorage<T>
    {

        protected string ItemType { get; set; }
        public IDocumentClient DocumentClient { get; set; }
        public NoSqlConnection Connection { get; set; }

        public async Task CreateAsync(T item)
        {
            var result = JObject.FromObject(item);
            result.Add("ItemType", this.ItemType);
            await DocumentClient.CreateDocumentAsync(
                Connection.GetCollectionUri(),
                result);
        }

        public async Task<IEnumerable<T>> GetAllItemsAsync()
        {
            IDocumentQuery<T> query = this.DocumentClient.CreateDocumentQuery<T>(
                this.Connection.GetCollectionUri(),
                new FeedOptions
                {
                    MaxItemCount = -1,
                }).AsDocumentQuery();

            List<T> results = new List<T>();
            while(query.HasMoreResults)
            {
                results.AddRange(await query.ExecuteNextAsync<T>());
            }

            return results;
        }

        public async Task<T> GetItemAsync(Expression<Func<T, bool>> predicate)
        {
            var results = await this.GetItemsAsync(predicate, 1, 0);
            if (results.ToList().Count != 1)
            {
                throw new KeyNotFoundException($"{nameof(T)}: No such entity");
            }
            return results.First();
        }

        public async Task<IEnumerable<T>> GetItemsAsync(Expression<Func<T, bool>> predicate, int maxCount = -1, int index = 0)
        {
            IDocumentQuery<T> query = this.DocumentClient.CreateDocumentQuery<T>(
                this.Connection.GetCollectionUri(),
                new FeedOptions
                {
                    MaxItemCount = maxCount,
                })
                .Where(predicate)
                .AsDocumentQuery();

            List<T> results = new List<T>();
            while (query.HasMoreResults && results.Count() < maxCount)
            {
                FeedResponse<T> result = await query.ExecuteNextAsync<T>();
                if (result.Any())
                {
                    if (result.Count < index)
                    {
                        index -= result.Count;
                    }
                    else
                    {
                        results.AddRange(result.Skip(index));
                        index = 0;
                    }
                }
            }
            if (results.Count() > maxCount)
            {
                results.RemoveRange(maxCount, results.Count() - maxCount);
            }

            return results;
        }
    }

}