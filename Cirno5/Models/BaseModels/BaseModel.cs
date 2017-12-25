using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Models
{
    public class BaseModel
    {
        public BaseModel(BaseItemType itemType)
        {
            this.ItemType = itemType;
            this.Id = Guid.NewGuid();
        }

        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }

        [JsonProperty(PropertyName = "itemType")]
        public BaseItemType ItemType { get; set; }
    }
}