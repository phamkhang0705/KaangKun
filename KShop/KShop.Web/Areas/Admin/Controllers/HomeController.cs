using KShop.Models;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace KShop.Web.Areas.Admin.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Products()
        {
            return View();
        }

        public ActionResult GetProducts()
        {
            List<Products> list = new List<Products>()
            {
                new Products()
                {
                    Alias = "1",
                    CategoryID = 1,
                    Content = "1",
                    CreatedBy = "a",
                    CreatedDate = DateTime.Now,
                    Description = "12321",
                    HomeFlag =true,
                    HotFlag = true,
                    ID = 1,
                    Image = "",
                    MetaDescription = ""
                }
            };
            return Json(list, JsonRequestBehavior.AllowGet);
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