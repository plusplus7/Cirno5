using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Cirno5.Filters;
using Cirno5.Services.Storage;
using Cirno5.Models.Articles;
using Cirno5.Models.Response;
using Microsoft.AspNetCore.Cors;
using Cirno5.Models;
using Newtonsoft.Json.Linq;

namespace Cirno5.Controllers
{
    [EnableCors("DebugPolicy")]
    [ErrorFilter]
    public class ArticlesController : Controller
    {
        private IStorage<Article> ArticleStorage { get; set; }
        private IStorage<ArticleInfo> ArticleInfoStorage { get; set; }


        public ArticlesController(IStorage<Article> articleStorage, IStorage<ArticleInfo> articleInfoStorage)
        {
            this.ArticleStorage = articleStorage;
            this.ArticleInfoStorage = articleInfoStorage;
        }

        [Route("api/article/{link}")]
        [HttpGet()]
        public async Task<BaseResponse<Article>> GetArticleAsync(string link)
        {
            return new BaseResponse<Article>
            {
                Code = 200,
                Status = "OK",
                Data = await this.ArticleStorage.GetItemAsync(x => x.ItemType == BaseItemType.Article && x.Link == link)
            };
        }

        [Route("api/articleInfo/{tag}")]
        [HttpGet()]
        public async Task<BaseResponse<IEnumerable<ArticleInfo>>> GetArticleInfosAsync(string tag = "Index", [FromQuery] string token = null)
        {
            var response = await this.ArticleInfoStorage.GetItemsAsync(x => x.ItemType == BaseItemType.ArticleInfo && x.Tags.Contains<string>(tag), maxCount: 5, continuationToken: token);
            return new BaseListResponse<IEnumerable<ArticleInfo>>
            {
                Code = 200,
                Status = "OK",
                Data = response.Item1,
                ContinuationToken = response.Item2
                
            };
        }

        // POST api/article
        [HttpPost]
        public void Post([FromBody]string value)
        {
            throw new NotImplementedException();
        }

        // PUT api/article/{link}
        [HttpPut("{link}")]
        public void Put(int id, [FromBody]string value)
        {
            throw new NotImplementedException();
        }

        // DELETE api/articles/{link}
        [HttpDelete("{link}")]
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
