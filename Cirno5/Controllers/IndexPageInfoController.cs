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

namespace Cirno5.Controllers
{
    [Route("api/[controller]")]
    [ErrorFilter]
    public class IndexPageInfoController: Controller
    {

        private IStorage<Article> ArticleStorage { get; set; }

        public IndexPageInfoController(IStorage<Article> articleStorage, IStorage<ArticleInfo> articleInfoStorage)
        {
            this.ArticleStorage = articleStorage;
        }

        // GET api/indexPageInfo
        [HttpGet]
        public async Task<GetIndexPageInfoResponse> GetAsync()
        {
            return new GetIndexPageInfoResponse
            {
                PersonalInfomation = "plusplus7's blog",
                AvatarUrl = "http://7xlt42.com1.z0.glb.clouddn.com/blog_avatar.png-fullpercent",
                Description = new List<string>
                {
                "Hi, 欢迎来到我的个人博客abasdfasdfasdfasdfasdf",
                "Life is tough",
                "Take it easy:)",

                },
                NavbarButtonTexts = new Dictionary<string, string>
                {

                    { "Home", "主页" },
                    { "Aboutme", "关于我" },
                    { "Blog", "博客" },
                    {  "Storage", "储物间" },
                }
            };
        }
    }
}
