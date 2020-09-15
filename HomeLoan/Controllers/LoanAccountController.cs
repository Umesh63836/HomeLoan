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

namespace HomeLoan.Controllers
{
    public class LoanAccountsController : ApiController
    {
        private HomeLoanEntities2 db = new HomeLoanEntities2();

        // GET: api/LoanAccounts
        //public IQueryable<LoanAccount> GetLoanAccounts()
        //{
        //    return db.LoanAccounts;
        //}

        // GET: api/LoanAccounts/5
        //5
        [ResponseType(typeof(LoanAccount))]
        [HttpGet]
        public IHttpActionResult GetLoanAccount([FromUri] string Appid)
        {
            LoanAccount loanAccount = db.LoanAccounts.ToList().Find(x => x.AppID == Appid);

            if (loanAccount == null)
            {
                return NotFound();
            }

            return Ok(loanAccount);
        }



        //// PUT: api/LoanAccounts/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutLoanAccount(string id, LoanAccount loanAccount)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != loanAccount.AccountNumber)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(loanAccount).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!LoanAccountExists(id))
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

        // POST: api/LoanAccounts
        //7
        [ResponseType(typeof(LoanAccount))]
        [HttpPost]
        public IHttpActionResult PostLoanAccount([FromBody] string adminId, [FromUri] string appId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            TrackStatu trackStatus = db.TrackStatus.ToList().Find(x => x.ApplicationID == appId);
            trackStatus.LoanStatus = "Approved";
            trackStatus.LoanApprovalDate = DateTime.Today;
            db.Entry(trackStatus).State = EntityState.Modified;

            LoanAccount loanaccount = new LoanAccount();
            loanaccount.AppID = appId;
            loanaccount.AdminID = adminId;
            loanaccount.PrincipleAmount = loanaccount.CustomerApplication.LoanAmount;
            loanaccount.EMIStartDate = (DateTime)db.TrackStatus.ToList().Find(x => x.ApplicationID == appId).LoanApprovalDate;
            loanaccount.EMIEndDate = loanaccount.EMIStartDate.AddMonths(loanaccount.CustomerApplication.Tenure);
            loanaccount.EMINextDate = loanaccount.EMIStartDate.AddMonths(1);
            double p = loanaccount.CustomerApplication.LoanAmount;
            double r = 8.5 / 1200;
            int n = loanaccount.CustomerApplication.Tenure;

            loanaccount.EMI_Installment = p * r * (Math.Pow((r + 1), n)) / (Math.Pow((r + 1), (n - 1)));
            TimeSpan ts = DateTime.Now - loanaccount.EMIStartDate;
            loanaccount.TenureRemaining = ts.Days / 30;
            loanaccount.Balance = loanaccount.CustomerApplication.LoanAmount;
            db.LoanAccounts.Add(loanaccount);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                //if (LoanaccountExists(loanaccount.AccountNumber))
                //{
                //    return Conflict();
                //}
                //else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = loanaccount.AccountNumber }, loanaccount);
        }

        //// DELETE: api/LoanAccounts/5
        //[ResponseType(typeof(LoanAccount))]
        //public IHttpActionResult DeleteLoanAccount(string id)
        //{
        //    LoanAccount loanAccount = db.LoanAccounts.Find(id);
        //    if (loanAccount == null)
        //    {
        //        return NotFound();
        //    }

        //    db.LoanAccounts.Remove(loanAccount);
        //    db.SaveChanges();

        //    return Ok(loanAccount);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool LoanAccountExists(string id)
        //{
        //    return db.LoanAccounts.Count(e => e.AccountNumber == id) > 0;
        //}
    }
}