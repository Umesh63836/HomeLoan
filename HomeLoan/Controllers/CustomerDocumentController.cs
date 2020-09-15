
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using HomeLoan.Models;
using System.Web.Http.Cors;
using System.Web;
using System.IO;

namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CustomerDocumentController : ApiController
    {

        private HomeLoanEntities2 db = new HomeLoanEntities2();

        
        [Route("api/CustomerDocuments/UploadImage")]
        [HttpPost]
        public HttpResponseMessage UploadImage(string aid,string pass)
        {
            string Image = null;


            string filename = null;

            var httpRequest = HttpContext.Current.Request;

            if (httpRequest.Files.GetKey(0).ToString() == "btnPan")
            {
                Image = "btnPan";

            }
            else if (httpRequest.Files.GetKey(0).ToString() == "btnVoter")
            {
                Image = "btnVoter";
            }
            else if (httpRequest.Files.GetKey(0).ToString() == "btnSalSlip")
            {
                Image = "btnSalSlip";
            }
            else if (httpRequest.Files.GetKey(0).ToString() == "btnLoa")
            {
                Image = "btnLoa";
            }
            else if (httpRequest.Files.GetKey(0).ToString() == "btnNoc")
            {
                Image = "btnNoc";
            }

            else if (httpRequest.Files.GetKey(0).ToString() == "btnAgrSale")
            {
                Image = "btnAgrSale";
            }




            //filename = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
            //filename = filename + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);

            var postedFile = httpRequest.Files[Image];

            filename = new String(Path.GetFileName(postedFile.FileName).Take(10).ToArray());

            var filepath = HttpContext.Current.Server.MapPath("~/Image/" + filename); //sets file path to Image folder in VS Project
            postedFile.SaveAs(filepath);
            //CustomerDocument file = new CustomerDocument();

            if (httpRequest.Files.GetKey(0).ToString() == "btnPan")
            {

                //file.PanCard = filename;

                //db.CustomerDocuments.Add(file);
                //db.SaveChanges();

                CustomerDocument cd = new CustomerDocument();
                //file.PanCard = filename;
                cd.ApplicationID = aid;
                cd.PanCard = filename;
                db.CustomerDocuments.Add(cd);
                db.SaveChanges();

            }
            else if (httpRequest.Files.GetKey(0).ToString() == "btnVoter")
            {
                //file.VoterID = filename;

                //db.CustomerDocuments.Add(file);
                //db.SaveChanges();

                CustomerDocument cd=db.CustomerDocuments.ToList().Find(x => x.ApplicationID == aid);
                cd.VoterID = filename;
                db.SaveChanges();
            }
            else if (httpRequest.Files.GetKey(0).ToString() == "btnSalSlip")
            {
                CustomerDocument cd = db.CustomerDocuments.ToList().Find(x => x.ApplicationID == aid);
                cd.SalarySlip = filename;
                db.SaveChanges();
            }
            else if (httpRequest.Files.GetKey(0).ToString() == "btnLoa")
            {
                CustomerDocument cd = db.CustomerDocuments.ToList().Find(x => x.ApplicationID == aid);
                cd.LOA = filename;
                db.SaveChanges();

            }
            else if (httpRequest.Files.GetKey(0).ToString() == "btnNoc")
            {
                CustomerDocument cd = db.CustomerDocuments.ToList().Find(x => x.ApplicationID == aid);
                cd.BuilderNOC = filename;
                db.SaveChanges();
            }

            else if (httpRequest.Files.GetKey(0).ToString() == "btnAgrSale")
            {
                CustomerDocument cd = db.CustomerDocuments.ToList().Find(x => x.ApplicationID == aid);
                cd.SaleAgreement = filename;
                db.SaveChanges();
            }






            return Request.CreateResponse(HttpStatusCode.Created);



        }

    }
}