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
            NoSqlItemStorage<Article> articleStorage = null;
            NoSqlItemStorage<ArticleInfo> articleInfoStorage = null;
            if (Configuration["Environment"].Equals("Dev"))
            {
                connection = new NoSqlConnection(
                "Cirno5",
                "dev",
                "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==",
                "https://localhost:8081/");
                connection.CreateDatabaseIfNotExistsAsync().Wait();
                connection.CreateCollectionIfNotExistsAsync().Wait();
                articleStorage = new NoSqlItemStorage<Article>
                {
                    Connection = connection,
                    DocumentClient = connection.GetClient(),
                };
                articleInfoStorage = new NoSqlItemStorage<ArticleInfo>
                {
                    Connection = connection,
                    DocumentClient = connection.GetClient(),
                };
                this.IntializeDatabase(articleStorage, articleInfoStorage).Wait();
            }

            services.AddSingleton<IStorage<Article>>(articleStorage);
            services.AddSingleton<IStorage<ArticleInfo>>(articleInfoStorage);

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

        private async Task IntializeDatabase(NoSqlItemStorage<Article> articleStorage, NoSqlItemStorage<ArticleInfo> articleInfoStorage)
        {
            for (var i = 0; i< 10; i ++)
            {
                await articleStorage.UpsertAsync(new Article
                {
                    Id = Guid.Parse($"00000000-0000-0000-0000-00000000000{i}"),
                    Link = $"Test{i}",
                    ContentType = "Markdown",
                    Content = $"{i} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                });
            }

            for (var i = 0; i< 10; i ++)
            {
                await articleInfoStorage.UpsertAsync(new ArticleInfo
                {
                    Id = Guid.Parse($"10000000-0000-0000-0000-00000000000{i}"),
                    Link = $"Test{i}",
                    ContentType = "Markdown",
                    CreatedDate = DateTime.Now.Subtract(TimeSpan.FromDays(1)),
                    Content = new ArticleInfoContent
                    {
                        Type = "Markdown",
                        Content = new Dictionary<string, string>
                        {
                            { "author", "+7" },
                            { "title", $"Test - {i}"},
                            { "content", $"{i} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                                         "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                         "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                                         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                                         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }
                        }
                    },
                    Tags = new List<string>
                    {
                        new Random().Next()%2 == 0 ? "Index" : "News",
                        new Random().Next()%2 == 0 ? "Entertainment" : "Politics",
                        new Random().Next()%2 == 0 ? "Games" : "Funny",
                    }
                });
            }
        }
    }
}