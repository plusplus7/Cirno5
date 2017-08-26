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
    public class ArticleController : Controller
    {
        private IStorage<Article> ArticleStorage { get; set; }

        public ArticleController(IStorage<Article> articleStorage)
        {
            this.ArticleStorage = articleStorage;
        }

        // GET api/article/{link}
        [HttpGet("{link}")]
        public async Task<GetArticleResponse> GetAsync(string link)
        {
            return new GetArticleResponse
            {
                Code = 200,
                Status = "OK",
                Article = await this.ArticleStorage.GetItemAsync(x => x.Link == link),
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
