using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Models.Articles
{
    public class Article : BaseModel
    {
        public Article() : base(itemType: "Article") { }

        [JsonProperty(PropertyName = "link")]
        private string link;

        [JsonIgnore]
        public string Link
        {
            get
            {
                return this.link;
            }
            set
            {
                this.Key = value;
                this.link = value;
            }
        }

        [JsonProperty(PropertyName = "contentType")]
        public string ContentType { get; set; }

        [JsonProperty(PropertyName = "content")]
        public string Content { get; set; }
    }
}