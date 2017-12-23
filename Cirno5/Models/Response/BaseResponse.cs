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
    public class BaseResponse : IActionResult
    {
        [JsonProperty(PropertyName = "code")]
        public int Code { get; set; }

        [JsonProperty(PropertyName = "status")]
        public string Status { get; set; }

        [JsonProperty(PropertyName = "data")]
        public JObject Data { get; set; }

        public async Task ExecuteResultAsync(ActionContext context)
        {
            context.HttpContext.Response.StatusCode = this.Code;
            using (var sw = new HttpResponseStreamWriter(context.HttpContext.Response.Body, Encoding.UTF8))
            {
                await sw.WriteLineAsync(JsonConvert.SerializeObject(this));
            }
        }
    }
}
