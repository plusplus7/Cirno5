using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cirno5.Models.Response
{
    public class BaseListResponse<T> : BaseResponse<T>
    {
        [JsonProperty(PropertyName = "continuationToken")]
        public string ContinuationToken { get; set; }
    }
}