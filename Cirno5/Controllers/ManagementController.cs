using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Cirno5.Filters;
using Cirno5.Models.Request;
using Cirno5.Models.Response;
using System.Net.Http;
using Cirno5.Services.Storage;
using Cirno5.Models.Articles;
using Cirno5.Models;

namespace Cirno5.Controllers
{
    [Route("api/[controller]")]
    [ErrorFilter]
    public class ManagementController : Controller
    {

        private const int defaultOutlineLength = 77;
        private IStorage<Article> ArticleStorage { get; set; }
        private IStorage<ArticleInfo> ArticleInfoStorage { get; set; }

        public ManagementController(IStorage<Article> articleStorage, IStorage<ArticleInfo> articleInfoStorage)
        {
            this.ArticleStorage = articleStorage;
            this.ArticleInfoStorage = articleInfoStorage;
        }

        // POST api/management/import
        [Route("import")]
        [HttpPost]
        public async Task<BaseResponse<string>> PostAsync([FromBody] ImportArticleRequest request)
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage message = await client.GetAsync(request.ContentUrl);

            string articleContent = await message.Content.ReadAsStringAsync();
            Article article = new Article
            {
                Link = request.Link,
                Content = articleContent,
                ContentType = request.ContentType,
            };

            ArticleInfo articleInfo = new ArticleInfo
            {
                Link = request.Link,
                ContentType = request.ContentType,
                CreatedDate = request.CreatedDate,
                Content = new ArticleInfoContent
                {
                    Type = "A",
                    Content = new Dictionary<string, string>()
                    {
                        { "author", "plusplus7" },
                        { "title", request.ArticleTitle },
                        { "outline", articleContent.Substring(0, articleContent.Length > ManagementController.defaultOutlineLength ? articleContent.Length : ManagementController.defaultOutlineLength) }
                    },
                },
                Tags = request.Tags,
            };

            if ((await this.ArticleInfoStorage.GetItemsAsync(d => d.Link == request.Link)).Item1.ToList().Count != 0)
            {
                return new ErrorResponse
                {
                    Code = 403,
                    Status = "EntityAlreadyExists",
                    Message = $"The link({request.Link}) of article has already existed.",
                };
            }

            if ((await this.ArticleStorage.GetItemsAsync(d => d.Link == request.Link)).Item1.ToList().Count != 0)
            {

                return new ErrorResponse
                {
                    Code = 403,
                    Status = "EntityAlreadyExists",
                    Message = $"The link({request.Link}) of article has already existed.",
                };
            }

            await this.ArticleStorage.UpsertAsync(article);
            await this.ArticleInfoStorage.UpsertAsync(articleInfo);
            return new BaseResponse<string>
            {
                Code = 200,
                Status = "OK",
                Data = "",
            };
        }

    }
}
