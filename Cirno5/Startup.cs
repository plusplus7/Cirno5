using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Cirno5.Services.Storage;
using Cirno5.Models.Articles;
using Cirno5.Services.Storage.Nosql;
using Microsoft.Azure.Documents;
using Cirno5.Models;
using Cirno5.Models.Response;

namespace Cirno5
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddCors(o => o.AddPolicy("DebugPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            NoSqlConnection connection = null;
            NoSqlItemStorage<BaseModel> storage = null;
            if (Configuration["Environment"].Equals("Dev"))
            {
                connection = new NoSqlConnection(
                "Cirno5",
                "dev",
                "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==",
                "https://localhost:8081/");
                connection.CreateDatabaseIfNotExistsAsync().Wait();
                connection.CreateCollectionIfNotExistsAsync().Wait();
                storage = new NoSqlItemStorage<BaseModel>
                {
                    Connection = connection,
                    DocumentClient = connection.GetClient(),
                };
                this.IntializeDatabase(storage).Wait();
            }

            services.AddSingleton<IStorage<BaseModel>>(storage);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();
        }

        private async Task IntializeDatabase(NoSqlItemStorage<BaseModel> storage)
        {
            await storage.CreateAsync(new IndexPageInfo
            {
                Id = Guid.Parse("0e7eb3f8-39aa-46ba-95ee-3c5f719d6f65"),
                Key = "0e7eb3f8-39aa-46ba-95ee-3c5f719d6f65",
                PersonalInfomation = "plusplus7's blog",
                AvatarUrl = "http://7xlt42.com1.z0.glb.clouddn.com/blog_avatar.png-fullpercent",
                Description = new List<string>
                {
                "Hi, 欢迎来到我的个人博客abasdfasdfasdfasdfasdf",
                "Life is tough",
                "Take it easy:)",

                },
                NavbarButtonTexts = new Dictionary<string, string>
                {

                    { "Home", "主页" },
                    { "Aboutme", "关于我" },
                    { "Blog", "博客" },
                    {  "Storage", "储物间" },
                }
            });
        }
    }
}