using Cirno5.Models.Articles;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Models.Response
{
    public class GetIndexPageInfoResponse : BaseResponse
    {
        [JsonProperty(PropertyName = "personalInfomation")]
        public string PersonalInfomation { get; set; }

        [JsonProperty(PropertyName = "avatarUrl")]
        public string AvatarUrl { get; set; }

        [JsonProperty(PropertyName = "description")]
        public IEnumerable<string> Description { get; set; }

        [JsonProperty(PropertyName = "navbarButtonTexts")]
        public IDictionary<string, string> NavbarButtonTexts { get; set; }
    }
}
