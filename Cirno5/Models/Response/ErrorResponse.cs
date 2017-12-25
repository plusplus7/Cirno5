using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Models.Response
{
    public class ErrorResponse : BaseResponse<string>
    {
        [JsonProperty(PropertyName = "message")]
        public string Message { get; set; }
    }
}
