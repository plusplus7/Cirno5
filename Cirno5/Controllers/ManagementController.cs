using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Cirno5.Filters;
using Cirno5.Models.Request;
using Cirno5.Models.Response;
using System.Net.Http;
using Cirno5.Models.Article;
using Cirno5.Services.Storage;

namespace Cirno5.Controllers
{
    [Route("api/[controller]")]
    [ErrorFilter]
    public class ManagementController : Controller
    {

        private IStorage<Article> ArticleStorage { get; set; }

        public ManagementController(IStorage<Article> articleStorage)
        {
            this.ArticleStorage = articleStorage;
        }

        // POST api/management/import
        [Route("import")]
        [HttpPost]
        public async Task<BaseResponse> PostAsync([FromBody] ImportArticleRequest request)
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage message = await client.GetAsync(request.ContentUrl);

            Article article = new Article
            {
                Id = Guid.NewGuid(),
                Link = request.Link,
                Content = await message.Content.ReadAsStringAsync(),
                ContentType = request.ContentType,
            };

            if ((await this.ArticleStorage.GetItemsAsync(d => d.Link == request.Link)).ToList().Count != 0)
            {
                return new ErrorResponse
                {
                    Code = 403,
                    Status = "EntityAlreadyExists",
                    Message = $"The link({request.Link}) of article has already existed.",
                };
            }
            await this.ArticleStorage.CreateAsync(article);
            return new ErrorResponse
            {
                Code = 200,
                Status = "OK",
                Message = "",
            };
        }

    }
}
