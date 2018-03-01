using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KShop.Web.Startup))]
namespace KShop.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
