using Cirno5.Models.Articles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Services.Storage.Nosql
{
    public class NoSqlArticleInfoStorage : NoSqlItemStorage<ArticleInfo>
    {
        public NoSqlArticleInfoStorage()
        {
            this.ItemType = "ArticleInfo";
        }
    }
}
