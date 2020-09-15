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

namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class AdminsController : ApiController
    {
        private HomeLoanEntities2 db = new HomeLoanEntities2();
        public IQueryable<CustomerApplication> GetAdmins()
        {
            return db.CustomerApplications;

        }

        [Route("api/Admins/getloan")]
        [HttpGet]
        public IQueryable<TrackStatu> getloan()
        {
            return db.TrackStatus;

        }

        [Route("api/Admins/statuschange")]
        [HttpGet]
        public int statuschange(string aid, string status)
        {   
            if(status=="Accepted")
            {
                double p = db.CustomerApplications.Find(aid).LoanAmount;
               
                int n = db.CustomerApplications.Find(aid).Tenure;
                LoanAccount la = new LoanAccount();
                la.AppID = aid;
                la.Balance = p;
                la.PrincipleAmount= p;
                la.EMIStartDate = DateTime.Today;
                la.EMIEndDate = DateTime.Today.AddMonths(n);
                la.EMINextDate= DateTime.Today.AddMonths(1);
                la.EMI_Installment = p * 8.5 * (Math.Pow(9.5, n)) / ((Math.Pow(9.5, n)) - 1);
                la.TenureRemaining = n - 1;
                db.LoanAccounts.Add(la);
                try
                {
                    db.SaveChanges();
                }
                catch (Exception e)
                {

                    {
                        throw e;
                    }
                }
            }
            return db.proc_changeStatus(aid, status);
        }


        //// GET: api/Admins/5
        //[ResponseType(typeof(Admin))]
        [Route("api/Admins/PostAdmin")]
        //[HttpPost]
        public int PostAdmin([FromBody] Admin admin)
        {
            try
            {
                int myUser = db.Admins.Where(u => u.AdminID == admin.AdminID && u.Password == admin.Password).Count();
                if (myUser == 1)
                {
                    /// FormsAuthentication.SetAuthCookie(admin.AdminID, false);
                    return 1;
                }
                return 0;
            }
            catch (Exception)
            {
                return 0;
            }
        }

        [Route("api/Admins/PostEmail")]
        [HttpGet]
        public int PostEmail(string ADDID, string EMAILID)
        {
            try
            {
                int myUser = db.Admins.Where(u => u.AdminID == ADDID && u.EmailID == EMAILID).Count();
                if (myUser == 1)
                {
                    return 1;
                }
                return 0;
            }
            catch (Exception)
            {
                return 0;
            }
        }




        [Route("api/Admins/newpass")]
        [HttpGet]
        public int newpass(string aid, string pass)
        {
            return db.proc_changePass(aid, pass);
        }




        public int Logout()
        {
            //  FormsAuthentication.SignOut();
            return 1;
        }

        //    // GET: api/Admins
        //    public IQueryable<Admin> GetAdmins()
        //    {
        //        return db.Admins;
        //    }

        //    // GET: api/Admins/5
        //    [ResponseType(typeof(Admin))]
        //    public IHttpActionResult GetAdmin(string id)
        //    {
        //        Admin admin = db.Admins.Find(id);
        //        if (admin == null)
        //        {
        //            return NotFound();
        //        }

        //        return Ok(admin);
        //    }

        //    // PUT: api/Admins/5
        //    [ResponseType(typeof(void))]
        //    public IHttpActionResult PutAdmin(string id, Admin admin)
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            return BadRequest(ModelState);
        //        }

        //        if (id != admin.AdminID)
        //        {
        //            return BadRequest();
        //        }

        //        db.Entry(admin).State = EntityState.Modified;

        //        try
        //        {
        //            db.SaveChanges();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!AdminExists(id))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }

        //        return StatusCode(HttpStatusCode.NoContent);
        //    }

        //    // POST: api/Admins
        //    [ResponseType(typeof(Admin))]
        //    public IHttpActionResult PostAdmin(Admin admin)
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            return BadRequest(ModelState);
        //        }

        //        db.Admins.Add(admin);

        //        try
        //        {
        //            db.SaveChanges();
        //        }
        //        catch (DbUpdateException)
        //        {
        //            if (AdminExists(admin.AdminID))
        //            {
        //                return Conflict();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }

        //        return CreatedAtRoute("DefaultApi", new { id = admin.AdminID }, admin);
        //    }

        //    // DELETE: api/Admins/5
        //    [ResponseType(typeof(Admin))]
        //    public IHttpActionResult DeleteAdmin(string id)
        //    {
        //        Admin admin = db.Admins.Find(id);
        //        if (admin == null)
        //        {
        //            return NotFound();
        //        }

        //        db.Admins.Remove(admin);
        //        db.SaveChanges();

        //        return Ok(admin);
        //    }

        //    protected override void Dispose(bool disposing)
        //    {
        //        if (disposing)
        //        {
        //            db.Dispose();
        //        }
        //        base.Dispose(disposing);
        //    }

        //    private bool AdminExists(string id)
        //    {
        //        return db.Admins.Count(e => e.AdminID == id) > 0;
        //    }
    }
}