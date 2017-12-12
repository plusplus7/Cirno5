using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Models
{
    public class BaseModel
    {
        public BaseModel(string itemType)
        {
            this.ItemType = itemType;
            this.Id = Guid.NewGuid();
        }

        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }

        [JsonProperty(PropertyName = "key")]
        public string Key { get; set; }

        [JsonProperty(PropertyName = "itemType")]
        public string ItemType { get; set; }
    }
}