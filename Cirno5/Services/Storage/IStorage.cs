﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Cirno5.Services.Storage
{
    public interface IStorage<T>
    {
        Task UpsertAsync(T item);
        Task<IEnumerable<T>> GetAllItemsAsync();
        Task<T> GetItemAsync(Expression<Func<T, bool>> predicate);
        Task<Tuple<IEnumerable<T>, string>> GetItemsAsync(Expression<Func<T, bool>> predicate, int maxCount = 1, string continuationToken = null);
    }
}