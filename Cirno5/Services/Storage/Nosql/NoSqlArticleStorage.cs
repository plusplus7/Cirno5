using Cirno5.Models.Article;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Services.Storage.Nosql
{
    public class NoSqlArticleStorage : NoSqlItemStorage<Article>
    {
        public NoSqlArticleStorage()
        {
            this.ItemType = "Article";
        }
    }
}
