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
    public class ItemController : Controller
    {
        private IStorage<Article> ArticleStorage { get; set; }
        private IStorage<ArticleInfo> ArticleInfoStorage { get; set; }


        public ItemController(IStorage<Article> articleStorage, IStorage<ArticleInfo> articleInfoStorage)
        {
            this.ArticleStorage = articleStorage;
            this.ArticleInfoStorage = articleInfoStorage;
        }

        // GET api/item/{itemType}/{key}
        [Route("api/item/{itemType}/{key}")]
        [HttpGet()]
        public async Task<BaseResponse> GetAsync(string itemType, string key)
        {
            JObject result = null;
            if (itemType == "Article")
            {
                result = JObject.FromObject(await this.ArticleStorage.GetItemAsync(x => x.ItemType == itemType && x.Key == key));
            }
            else if (itemType == "ArticleInfo")
            {
                result = JObject.FromObject(await this.ArticleInfoStorage.GetItemAsync(x => x.ItemType == itemType && x.Key == key));
            }
            else
            {
                throw new ArgumentException("Type not supported");
            }
            return new BaseResponse
            {
                Code = 200,
                Status = "OK",
                Data = result
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
