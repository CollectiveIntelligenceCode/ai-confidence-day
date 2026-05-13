# AI Confidence Day — Pre-Launch Verification Checklist

**Purpose:** This checklist ensures all critical items are verified before flipping the switch to production.
**Use by:** Deployment owner (assigned by management)
**Timing:** 24 hours before planned go-live

---

## Pre-Deployment (Phase 1-2 of DEPLOYMENT_GUIDE.md)

### External Services Configuration

- [ ] **Stripe Live Webhook Created**
  - URL: `https://ai-confidence-day.vercel.app/api/webhook`
  - Event: `checkout.session.completed`
  - Signing secret copied to notes (for Vercel)
  - Test event sent successfully

- [ ] **Stripe Live Secret Key**
  - Secret key begins with `sk_live_`
  - Copied to notes (for Vercel)
  - Verified in Stripe Dashboard

- [ ] **Resend Domain Verified**
  - Domain: `solvedtogether.co.uk`
  - DNS records added (CNAME/TXT)
  - ✅ Status shows "Verified" in Resend Dashboard
  - From address `contact@solvedtogether.co.uk` ready for production

- [ ] **HubSpot Token Scopes Validated**
  - Token format: `pat-na2-...`
  - Scopes verified in HubSpot > Settings > Integrations > Private apps:
    - [ ] `crm.objects.contacts.write` ✓
    - [ ] `crm.objects.deals.write` ✓
    - [ ] `crm.objects.notes.write` ✓
  - If scopes missing: regenerated token and noted new token
  - Token copied to notes (for Vercel)

### Environment Variables (Phase 2)

- [ ] **Vercel Secrets Updated (Production Environment)**
  - [ ] `STRIPE_SECRET_KEY` → `sk_live_...`
  - [ ] `STRIPE_WEBHOOK_SECRET` → `whsec_...`
  - [ ] `HUBSPOT_ACCESS_TOKEN` → `pat-na2-...` (if regenerated)
  - [ ] `RESEND_API_KEY` → verified still set
  - [ ] `BASE_URL` → `https://ai-confidence-day.vercel.app`

- [ ] **Environment Variables Verified**
  - `vercel env list --environment production` shows all 5 variables
  - No "Encrypted" variables showing as unset

### Code Update (Phase 3)

- [ ] **Checkout Amount Updated**
  - File: `/api/create-checkout.js` line 40
  - Old: `unit_amount: 100,` (£1.00)
  - New: `unit_amount: 89900,` (£899.00)
  - Comment updated to reflect production
  - Change committed and pushed to main

- [ ] **Deployment Triggered**
  - Git push to main branch completed
  - Vercel auto-deployment triggered
  - Recent deployment shows "Ready" status
  - `vercel ls --limit 1` confirms latest deployment is live

---

## Testing Phase (Phase 4)

### Stripe Webhook Test

- [ ] **Webhook Delivery Test**
  - Stripe Dashboard > Developers > Webhooks > [Your webhook] > Send test event
  - Selected: `checkout.session.completed`
  - Vercel logs show successful delivery
  - No errors in logs

### End-to-End Checkout Test

- [ ] **Application Accessible**
  - URL: `https://ai-confidence-day.vercel.app/apply/consultants`
  - Page loads without errors
  - Form fields render correctly

- [ ] **Form Submission**
  - Filled with test data
  - All required fields completed
  - Agree to terms checked
  - Submit button clicked

- [ ] **Stripe Checkout Page**
  - Appears with correct amount: **£899.00**
  - Description shows: "AI Confidence Day for Consultants"
  - Billing address fields visible

- [ ] **Payment Processing**
  - Used real credit card (test card won't work with live key)
  - Transaction completed successfully
  - Redirected to: `/thank-you/consultants?session_id=...`

### Verification: Email Delivery

- [ ] **Welcome Email Received**
  - Sender: `contact@solvedtogether.co.uk`
  - Subject: `"You're in — AI Confidence Day, 19th June 2026"`
  - Received within 30 seconds of payment
  - NOT in spam folder
  - Email contains:
    - [ ] Event details (date, time, venue)
    - [ ] Calendar invite (.ics attachment)
    - [ ] Google Calendar link
    - [ ] Outlook link
    - [ ] Contact info for questions

### Verification: HubSpot Sync

- [ ] **Contact Created in HubSpot**
  - Search HubSpot > Contacts > [test email]
  - Contact record exists
  - Contains:
    - [ ] Full name (correctly parsed)
    - [ ] Email address
    - [ ] Company (if filled)
    - [ ] Job title (if filled)
    - [ ] Lifecycle stage: "customer"
    - [ ] Lead status: "NEW"
    - [ ] Custom property: `ai_confidence_team_size` (if filled)
    - [ ] Custom property: `ai_confidence_ai_usage` (if filled)

- [ ] **Deal Created in HubSpot**
  - Search HubSpot > Deals
  - Deal name: `AI Confidence Day — [test name]`
  - Deal contains:
    - [ ] Amount: £899.00
    - [ ] Stage: "Closed Won"
    - [ ] Associated with test contact
    - [ ] Date/time created: recent

- [ ] **Note Created in HubSpot**
  - Click on deal or contact
  - Find Notes section
  - Note exists with:
    - [ ] Title: "AI Confidence Day — Application Answer"
    - [ ] Contains: "What do you use AI for right now, in your day-to-day?"
    - [ ] Contains: [test response from form]

---

## Final Safety Checks (Phase 5 Prep)

### Data & Logs

- [ ] **Vercel Logs Review**
  - `vercel logs` or Vercel Dashboard
  - No errors in `/api/webhook`
  - No errors in `/api/create-checkout.js`
  - No rate limiting or quota issues

- [ ] **Stripe Dashboard Check**
  - Recent payment shows in Stripe Dashboard
  - Transaction amount: £899.00 GBP
  - Webhook events: `checkout.session.completed` delivered successfully

- [ ] **Resend Dashboard Check**
  - Email delivery status: "Delivered"
  - No bounces or failures
  - From: `contact@solvedtogether.co.uk` showing as verified sender

- [ ] **HubSpot Health Check**
  - No API errors in HubSpot activity log
  - Contact, deal, and note creation all logged
  - Integrations > Private apps shows no failure indicators

### Rollback Readiness

- [ ] **Rollback Plan Confirmed**
  - Can revert code change in: ~5 min
  - Can revert Stripe keys in Vercel: ~3 min
  - Total rollback time: <10 min if critical issue

- [ ] **Support Contact Identified**
  - Deployment owner contact: _______________
  - Escalation contact: _______________
  - HubSpot admin contact: _______________
  - Stripe support link bookmarked: https://support.stripe.com

---

## Monitoring Setup (Phase 5)

### Dashboards Ready

- [ ] **Vercel Logs Accessible**
  - Dashboard URL: https://vercel.com/collective-intelligence-543c5259/ai-confidence-day
  - Can access recent logs
  - Error monitoring active

- [ ] **Stripe Dashboard Accessible**
  - Can view recent payments
  - Webhook delivery status visible
  - Alert notifications working (if configured)

- [ ] **Resend Dashboard Accessible**
  - Can view email delivery status
  - Bounce/spam rate visible
  - Can access email logs

- [ ] **HubSpot Dashboard Accessible**
  - Can view new contacts
  - Can view new deals
  - Can search for recent records

---

## Go/No-Go Decision

### Final Sign-Off

**All checks complete?** [ ] YES [ ] NO

If any box is unchecked, do NOT proceed to production. Identify the missing item and complete it.

**Deployment Owner Name:** _______________________

**Deployment Owner Signature/Confirmation:** _______________________

**Date & Time of Go-Live:** _______________________

**Go-Live Status:**
- [ ] APPROVED - Ready to accept live traffic
- [ ] HOLD - Issues found, rollback not needed
- [ ] ABORT - Critical issue, rollback needed

**Notes/Issues Found:**
```
[Any issues or notes from testing]
```

---

## Post-Go-Live (First 24 Hours)

### Hourly Checks (First 4 Hours)

- [ ] No Stripe webhook failures
- [ ] Email delivery rate stable
- [ ] No HubSpot API errors
- [ ] Application response time normal
- [ ] No error spikes in Vercel logs

### Daily Checks (First Week)

- [ ] Payment success rate > 95%
- [ ] Email delivery rate > 95%
- [ ] HubSpot contact creation working
- [ ] No customer complaints about email
- [ ] Deals being created correctly

### Weekly Review

- [ ] All metrics stable
- [ ] No ongoing issues
- [ ] Customer feedback positive
- [ ] Can scale to production permanently

---

*Print this checklist, complete it step-by-step, and keep it for audit/reference.*
