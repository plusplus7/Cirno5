﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Models.Articles
{
    public class ArticleInfo : BaseModel
    {
        public ArticleInfo() : base(itemType: "ArticleInfo") { }

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

        [JsonProperty(PropertyName = "createdDate")]
        public DateTime CreatedDate { get; set; }

        [JsonProperty(PropertyName = "content")]
        public ArticleInfoContent Content { get; set; }

        [JsonProperty(PropertyName = "tags")]
        public IList<string> Tags { get; set; }
    }
}
