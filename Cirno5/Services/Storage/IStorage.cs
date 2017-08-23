using Cirno5.Models.Article;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Cirno5.Services.Storage
{
    public interface IStorage<T>
    {
        Task CreateAsync(T item);
        Task<IEnumerable<T>> GetAllItemsAsync();
        Task<T> GetItemAsync(Expression<Func<T, bool>> predicate);
        Task<IEnumerable<T>> GetItemsAsync(Expression<Func<T, bool>> predicate, int maxCount, int index);
    }
}