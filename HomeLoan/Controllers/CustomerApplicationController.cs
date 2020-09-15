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
    public class CustomerApplicationsController : ApiController
    {
        private HomeLoanEntities2 db = new HomeLoanEntities2();

        // GET: api/CustomerApplications
        [HttpGet]
        public IQueryable<CustomerApplication> GetCustomerApplications()
        {
            return db.CustomerApplications;
        }


        // GET: api/CustomerApplications/5
        [ResponseType(typeof(CustomerApplication))]
        [HttpGet]
        public IHttpActionResult GetCustomerApplication([FromUri] string id)
        {
            CustomerApplication customerApplication = db.CustomerApplications.Find(id);
            if (customerApplication == null)
            {
                return NotFound();
            }



            return Ok(customerApplication);
        }

        // PUT: api/CustomerApplications/5
        [ResponseType(typeof(void))]
        [HttpPut]
        public IHttpActionResult PutCustomerApplication(string id, CustomerApplication customerApplication)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customerApplication.ApplicationID)
            {
                return BadRequest();
            }

            db.Entry(customerApplication).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerApplicationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CustomerApplications
        //3
        [ResponseType(typeof(CustomerApplication))]
        [HttpPost]
        public IHttpActionResult PostCustomerApplication(CustomerApplication customerApplication)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //Customer cust = db.Customers.Find(customerApplication.EmailID);
            customerApplication.ApplicationID = db.Customers.Find(customerApplication.EmailID).LastName.Substring(0, 3) + db.Customers.Find(customerApplication.EmailID).Contact.Substring(6, 4);
            //customerApplication.Customer.LastName.Substring(0, 3) + customerApplication.Customer.Contact.Substring(6, 4);
            customerApplication.AppointmentDateTentative = DateTime.Now.AddDays(7);
            db.CustomerApplications.Add(customerApplication);
            try
            {
                db.SaveChanges();
            }
            catch (Exception e)
            {
                if (CustomerApplicationExists(customerApplication.ApplicationID))
                {
                    return Conflict();
                }
                else
                {
                    throw e;
                }
            }
            TrackStatu ts = new TrackStatu();
            ts.ApplicationID = db.Customers.Find(customerApplication.EmailID).LastName.Substring(0, 3) + db.Customers.Find(customerApplication.EmailID).Contact.Substring(6, 4); 
            ts.Contact = db.Customers.Find(customerApplication.EmailID).Contact; 
            ts.AdminID = null;
            ts.AppointmentDate = DateTime.Today.AddDays(7);
            ts.LoanStatus = "sent for verification";
            ts.LoanApprovalDate = null;
            db.TrackStatus.Add(ts);
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = customerApplication.ApplicationID }, customerApplication);
        }


        
        //[HttpPost]
        //public IHttpActionResult PostApplicationStatus(CustomerApplication customerApplication)
        //{
        //    TrackStatu ts = new TrackStatu();
        //    ts.ApplicationID = customerApplication.ApplicationID;
        //    ts.Contact = cust.Contact;
        //    ts.AdminID = null;
        //    ts.AppointmentDate = DateTime.Today.AddDays(7);
        //    ts.LoanStatus = "sent for verification";
        //    ts.LoanApprovalDate = null;
        //    db.TrackStatus.Add(ts);
        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateException)
        //    {

        //        {
        //            throw;
        //        }
        //    }
        //    return CreatedAtRoute("DefaultApi", new { id = customerApplication.ApplicationID }, customerApplication);
        //}
        // DELETE: api/CustomerApplications/5
        //[ResponseType(typeof(CustomerApplication))]
        //public IHttpActionResult DeleteCustomerApplication(string id)
        //{
        //    CustomerApplication customerApplication = db.CustomerApplications.Find(id);
        //    if (customerApplication == null)
        //    {
        //        return NotFound();
        //    }

        //    db.CustomerApplications.Remove(customerApplication);
        //    db.SaveChanges();

        //    return Ok(customerApplication);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        private bool CustomerApplicationExists(string id)
        {
            return db.CustomerApplications.Count(e => e.ApplicationID == id) > 0;
        }
    }
}