using Cirno5.Models.Response;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Filters
{
    public class ErrorFilter : ExceptionFilterAttribute
    {
        public const string ServerError = "ServerError";
        public const string BadRequest = "BadRequest";

        public override void OnException(ExceptionContext context)
        {
            if (context.Exception is NotImplementedException)
            {
                context.Result = new ErrorResponse
                {
                    Code = 501,
                    Message = "This method has not implemented yet",
                    Status = $"{ServerError}.NotImplemented",
                };
            }
            else if (context.Exception is KeyNotFoundException)
            {
                context.Result = new ErrorResponse
                {
                    Code = 404,
                    Message = context.Exception.Message,
                    Status = $"{BadRequest}.NoSuchEntity",
                };
            }
            else
            {
                context.Result = new ErrorResponse
                {
                    Code = 500,
                    Message = context.Exception.Message,
                    Status = $"{ServerError}.Failed",
                };
            }
        }
    }
}
