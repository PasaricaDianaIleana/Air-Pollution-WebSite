using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using SaveWorldProject.Models;

namespace SaveWorldProject
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddScoped<ISaveWorld, ChartsData>();
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy",
                    c => c.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .AllowAnyMethod());
            });
           
         
           
            services.AddMvc();
            services.AddDbContext<ApiContext>(options =>
           options.UseSqlServer(Configuration.GetConnectionString("StringConnection")));

          
           
                    
           
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

           
            }
            app.UseCors("CorsPolicy");
            app.UseAuthentication();
            
            app.UseMvc(routes => routes.MapRoute(
                "default", "api/{controller}/{action}/{id?}"
                ));
        }
    }
}
