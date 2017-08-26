using Newtonsoft.Json;
using Cirno5.Models.Articles;

namespace Cirno5.Models.Response
{
    public class GetArticleResponse : BaseResponse
    {
        [JsonProperty(PropertyName = "article")]
        public Article Article { get; set; }
    }
}
