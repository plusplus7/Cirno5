using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Models.Articles
{
    public class ArticleInfoContent 
    {
        [JsonProperty(PropertyName = "type")]
        public string Type { get; set;  }

        [JsonProperty(PropertyName = "content")]
        public IDictionary<string, string> Content { get; set; }
    }
}
