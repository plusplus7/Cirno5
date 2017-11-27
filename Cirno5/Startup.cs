﻿using System;
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
            if (Configuration["Environment"].Equals("Dev"))
            {
                connection = new NoSqlConnection(
                "Cirno5",
                "dev",
                "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==",
                "https://localhost:8081/");
                connection.CreateDatabaseIfNotExistsAsync().Wait();
                connection.CreateCollectionIfNotExistsAsync().Wait();
            }
            services.AddSingleton<IStorage<Article>>(new NoSqlArticleStorage
            {
                Connection = connection,
                DocumentClient = connection.GetClient(),
            });

            services.AddSingleton<IStorage<ArticleInfo>>(new NoSqlArticleInfoStorage
            {
                Connection = connection,
                DocumentClient = connection.GetClient(),
            });
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
    }
}
