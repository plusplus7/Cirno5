using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Cirno5.Filters;
using Cirno5.Services.Storage;
using Cirno5.Models.Article;
using Cirno5.Models.Articles;

namespace Cirno5.Controllers
{

    [Route("api/[controller]")]
    [ErrorFilter]
    public class ArticleInfosController : Controller
    {
        private IStorage<ArticleInfo> ArticleInfoStorage { get; set; }

        public ArticleInfosController(IStorage<ArticleInfo> articleInfoStorage)
        {
            this.ArticleInfoStorage = articleInfoStorage;
        }

        // GET api/articleInfos
        public async Task<IEnumerable<ArticleInfo>> GetAsync(string tag = "", int maxCount = -1)
        {
            return await this.ArticleInfoStorage.GetItemsAsync(x => (String.IsNullOrEmpty(tag) || x.Tags.Contains(tag)), maxCount);
        }
    }
}
