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

namespace Cirno5.Controllers
{
    [EnableCors("DebugPolicy")]
    [ErrorFilter]
    public class ItemController : Controller
    {
        private IStorage<BaseModel> Storage { get; set; }

        public ItemController(IStorage<BaseModel> storage)
        {
            this.Storage = storage;
        }

        // GET api/item/{itemType}/{key}
        [Route("api/item/{itemType}/{key}")]
        [HttpGet()]
        public async Task<BaseResponse> GetAsync(string itemType, string key)
        {
            return new BaseResponse
            {
                Code = 200,
                Status = "OK",
                Data = await this.Storage.GetItemAsync(x => x.ItemType == itemType && x.Key == key),
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
