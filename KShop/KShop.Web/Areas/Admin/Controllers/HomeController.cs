using KShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace KShop.Web.Areas.Admin.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Products()
        {
            KaangKunShopEntities _dbEntities = new KaangKunShopEntities();
            List<Products> lists = _dbEntities.Products.ToList();
            lists.Add(new Products()
            {
                Alias = "1",
                CategoryID = 1,
                Content = "1",
                CreatedBy = "Admin",
                CreatedDate = DateTime.Now,
                Description = "1"
            });
            return View(lists);
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}