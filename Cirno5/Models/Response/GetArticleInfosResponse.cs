using Cirno5.Models.Articles;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Models.Response
{
    public class GetArticleInfosResponse : BaseResponse
    {
        [JsonProperty(PropertyName = "articleInfos")]
        public IEnumerable<ArticleInfo> ArticleInfos { get; set; }

        [JsonProperty(PropertyName = "continuation")]
        public string Continuation { get; set; }
    }
}
