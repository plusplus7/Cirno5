using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Cirno5.Filters;
using Cirno5.Services.Storage;
using Cirno5.Models.Articles;
using Cirno5.Models.Response;

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
        public async Task<GetArticleInfosResponse> GetAsync(string tag = "", int maxCount = -1, int index = 0)
        {
            var results = await this.ArticleInfoStorage.GetItemsAsync(x => (String.IsNullOrEmpty(tag) || x.Tags.Contains(tag)), maxCount, index);
            return new GetArticleInfosResponse
            {
                Code = 200,
                Status = "OK",
                ArticleInfos = results
            };
        }
    }
}
