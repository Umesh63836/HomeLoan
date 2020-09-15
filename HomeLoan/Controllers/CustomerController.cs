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

namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers:"*",methods:"*")]
    public class CustomersController : ApiController
    {
        
        private HomeLoanEntities2 db = new HomeLoanEntities2();


        // GET: api/Customers
        public IQueryable<Customer> GetCustomers()
        {
            return db.Customers;
        }


        [Route("api/Customers/GetAppById")]
        [HttpGet]
        public CustomerApplication GetAppById(string id)
        {


            CustomerApplication customer = db.CustomerApplications.Find(id);
            return customer;
        }


        [Route("api/Customers/ViewLoanById")]
        [HttpGet]
        public List<proc_viewStatus_Result> ViewLoanById(string id, string contact)

        {
            List<proc_viewStatus_Result> l = new List<proc_viewStatus_Result>();
            foreach (var item in db.proc_viewStatus(id, contact))
            {
                l.Add(item);
            }
            return l;

        }






        [Route("api/Customers/ViewAccountById")]
        [HttpGet]
        public LoanAccount ViewAccountById(string appId,string acc)
        {
            LoanAccount account = null;
           
            
                account = db.LoanAccounts.ToList().Find(x => x.AppID == appId);

            
            return account;

        }

        // GET: api/Customers/5
        [ResponseType(typeof(Customer))]
        public IHttpActionResult GetCustomer(string id)
        {
            Customer customer = db.Customers.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }

        [Route("api/Customers/PostCustomer")]
        [HttpGet]
        public int PostCustomer(string mail, string pass)
        {
            try
            {
                int myUser = db.Customers.Where(u => u.EmailID == mail && u.Password == pass).Count();
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

        [Route("api/Customers/PostContact")]
        [HttpGet]
        public int PostContact(string email, string contact)
        {
            try
            {
                int myUser = db.Customers.Where(u => u.EmailID == email && u.Contact == contact).Count();
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




        [Route("api/Customers/newpassC")]
        [HttpGet]
        public int newpassC(string aid, string pass)
        {
            return db.proc_changeCustomerPass(aid, pass);
        }





        //[HttpGet]
        //public int OnLogin([FromBody] string eid)
        //{
        //    int index = db.CustomerApplications.ToList().FindAll((y => y.EmailID == eid)).Count;
        //    if (index==1)
        //    {
        //        return 1;
        //    }
        //    return 0;
        //}
        // GET: api/Customers
        //public IQueryable<Customer> GetCustomers()
        //{
        //    return db.Customers;
        //}

        // GET: api/Customers/5
        //[ResponseType(typeof(Customer))]
        //[HttpGet]
        //public IHttpActionResult GetCustomer([FromBody]string id)
        //{
        //    Customer customer = db.Customers.Find(id);
        //    if (customer == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(customer);
        //}
        //[HttpGet]
        ////2
        //public IHttpActionResult GetCustomerByID([FromBody] string eid)
        //{
        //    Customer customer = db.Customers.Find(eid);
        //    if (customer == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(customer);
        //}

        //// PUT: api/Customers/5
        //[ResponseType(typeof(void))]
        //[HttpPut]
        //public IHttpActionResult PutCustomer([FromBody] string id, [FromBody] Customer customer)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != customer.EmailID)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(customer).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CustomerExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        // POST: api/Customers 
        //1
        [ResponseType(typeof(Customer))]
        [HttpPost]
        public IHttpActionResult PostCustomer([FromBody] Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Customers.Add(customer);

            try
            {
                db.SaveChanges();
            }
            catch (Exception e)
            {
                if (CustomerExists(customer.EmailID))
                {
                    return Conflict();
                }
                else
                {
                    throw e;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = customer.EmailID }, customer);
        }

        // DELETE: api/Customers/5
        //[ResponseType(typeof(Customer))]
        //public IHttpActionResult DeleteCustomer(string id)
        //{
        //    Customer customer = db.Customers.Find(id);
        //    if (customer == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Customers.Remove(customer);
        //    db.SaveChanges();

        //    return Ok(customer);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        private bool CustomerExists(string id)
        {
            return db.Customers.Count(e => e.EmailID == id) > 0;
        }
    }
}







