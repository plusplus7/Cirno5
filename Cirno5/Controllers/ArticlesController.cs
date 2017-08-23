using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Cirno5.Filters;
using Cirno5.Services.Storage;
using Cirno5.Models.Article;

namespace Cirno5.Controllers
{

    [Route("api/[controller]")]
    [ErrorFilter]
    public class ArticlesController : Controller
    {
        private IStorage<Article> ArticleStorage { get; set; }

        public ArticlesController(IStorage<Article> articleStorage)
        {
            this.ArticleStorage = articleStorage;
        }

        // GET api/articles/{Link}
        [HttpGet("{link}")]
        public async Task<Article> GetAsync(string link)
        {
            return await this.ArticleStorage.GetItemAsync(x => x.Link == link);
        }

        // POST api/articles
        [HttpPost]
        public void Post([FromBody]string value)
        {
            throw new NotImplementedException();
        }

        // PUT api/articles/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
            throw new NotImplementedException();
        }

        // DELETE api/articles/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
