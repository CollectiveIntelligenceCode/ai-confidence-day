# AI Confidence Day — Deployment Guide

**Document Version:** 1.0
**Last Updated:** 2026-05-12
**Target:** Production deployment for live payment processing

This guide complements `GO_LIVE_CHECKLIST.md` with step-by-step deployment instructions.

---

## Pre-Deployment Checklist (Approvals)

Before proceeding with any technical changes, ensure:

- [ ] **Board/Management Approval**: Live payment processing approved (£899 per ticket)
- [ ] **Timeline Confirmed**: Deployment scheduled before 19th June 2026 (Consultants event)
- [ ] **Stakeholders Notified**: Rujuta, Chris, and support team aware of go-live date

---

## Phase 1: External Service Configuration (30–45 minutes)

### 1.1 Stripe Live Webhook Setup
**Owner:** Someone with Stripe dashboard access
**Time:** 10 minutes

1. Log in to Stripe Dashboard (stripe.com)
2. Navigate to **Developers → Webhooks**
3. Click **Add endpoint**
4. Configure:
   - **Endpoint URL:** `https://ai-confidence-day.vercel.app/api/webhook`
   - **Events:** Select `checkout.session.completed`
5. Copy the **Signing secret** (begins with `whsec_`)
6. Save for Step 2.1

### 1.2 Stripe Live Secret Key
**Owner:** Same as 1.1
**Time:** 5 minutes

1. In Stripe Dashboard, go to **Developers → API Keys**
2. Copy the **Secret key** (begins with `sk_live_`)
3. Save for Step 2.1

### 1.3 Resend Domain Verification
**Owner:** Someone with Resend dashboard + DNS access
**Time:** 15–30 minutes (includes DNS propagation)

1. Log in to Resend.com
2. Navigate to **Domains**
3. Click **Add Domain**
4. Enter: `solvedtogether.co.uk`
5. Resend provides DNS records (CNAME or TXT)
6. Add these records to your DNS provider (GoDaddy, etc.)
7. **Wait** for DNS propagation (usually 5–15 minutes)
8. Resend will show ✅ when verified

### 1.4 HubSpot Token Scope Check
**Owner:** HubSpot account admin
**Time:** 5 minutes

1. Log in to HubSpot (hub.hubapi.com)
2. Go to **Settings → Integrations → Private apps**
3. Find the app using token `pat-na2-...` (check Vercel env)
4. Verify these scopes are present:
   - ✅ `crm.objects.contacts.write`
   - ✅ `crm.objects.deals.write`
   - ✅ `crm.objects.notes.write`
   - ⚠️ `crm.objects.emails.write` (optional)
5. If scopes missing, add them and **regenerate the token**
6. Copy new token for Step 2.2

---

## Phase 2: Vercel Environment Configuration (10 minutes)

**Owner:** Someone with Vercel dashboard access to collective-intelligence-543c5259

### 2.1 Update Stripe Environment Variables

```bash
cd /home/solomon/workspace/repos/ai-confidence-day

# Set live Stripe Secret Key
vercel env add STRIPE_SECRET_KEY --environment production
# → Paste: sk_live_... (from Step 1.2)

# Set live Stripe Webhook Secret
vercel env add STRIPE_WEBHOOK_SECRET --environment production
# → Paste: whsec_... (from Step 1.1)
```

### 2.2 Update HubSpot Environment Variable (if token was regenerated)

```bash
vercel env add HUBSPOT_ACCESS_TOKEN --environment production
# → Paste: pat-na2-... (from Step 1.4, if new token generated)
```

### 2.3 Verify Resend Environment Variable
```bash
vercel env list --environment production | grep RESEND
# Should show: RESEND_API_KEY as Encrypted
```

---

## Phase 3: Code Update (5 minutes)

**File:** `/api/create-checkout.js`
**Owner:** Developer

1. Open `/api/create-checkout.js`
2. Find line 40: `unit_amount: 100,`
3. Change to: `unit_amount: 89900,`
4. Update comment to: `// £899.00 production`
5. Stage & commit:
   ```bash
   cd /home/solomon/workspace/repos/ai-confidence-day
   git add api/create-checkout.js
   git commit -m "prod: Update checkout amount to £899.00"
   # Vercel auto-deploys on git push to main
   git push origin main
   ```

**Deployment happens automatically** when pushed to `main` branch.

---

## Phase 4: Testing (30–60 minutes)

**Owner:** QA or developer
**Requirements:** Real email address, real credit card (Stripe test cards won't work with live key)

### 4.1 Stripe Webhook Test (5 minutes)

1. In Stripe Dashboard → **Developers → Webhooks**
2. Find the webhook you created in Step 1.1
3. Click **Send test event**
4. Select `checkout.session.completed`
5. Check Vercel logs: `vercel logs` or `vercel dashboard`
6. Look for successful webhook processing in logs

### 4.2 End-to-End Checkout Flow (20–30 minutes)

1. Navigate to: `https://ai-confidence-day.vercel.app/apply/consultants`
2. Fill out application form with:
   - **Email:** Your real email (you'll receive confirmation)
   - **Full Name:** Test person
   - **Other fields:** Fill as needed
3. Agree to terms & submit
4. **Stripe checkout page** should appear
5. Enter **real credit card** (use lowest-denomination card for live test)
   - Amount should show: **£899.00**
   - Description: "AI Confidence Day for Consultants"
6. Complete payment
7. Verify three things happen:

### 4.3 Verification Checklist

**A. Welcome Email**
- ✅ Received email from: `contact@solvedtogether.co.uk`
- ✅ Subject: "You're in — AI Confidence Day, 19th June 2026"
- ✅ Email includes: event details, .ics calendar file attachment
- ✅ Email includes: Google Calendar & Outlook calendar links
- ✅ NOT in spam folder

**B. HubSpot Contact Created**
1. Log in to HubSpot → **Contacts**
2. Search for the email you used in 4.2
3. Verify contact record includes:
   - ✅ Full name, email, company (if filled)
   - ✅ Custom property `ai_confidence_team_size` (if filled)
   - ✅ Custom property `ai_confidence_ai_usage` (if filled)
   - ✅ Lifecycle stage: "customer"
   - ✅ Lead status: "NEW"

**C. HubSpot Deal Created**
1. In HubSpot → **Deals**
2. Search for a deal with name like "AI Confidence Day — Test person"
3. Verify deal includes:
   - ✅ Amount: £899.00
   - ✅ Stage: "Closed Won"
   - ✅ Associated with the contact from **B**

**D. HubSpot Note Created**
1. Click on the deal/contact
2. Find a **Note** with text: "AI Confidence Day — Application Answer"
3. Includes the applicant's response about their AI usage

### 4.4 Troubleshooting Failed Tests

**Webhook not delivered?**
- Check Vercel logs for errors
- Verify webhook URL is correct: `https://ai-confidence-day.vercel.app/api/webhook`
- Re-test from Stripe Dashboard

**Email not received?**
- Check spam folder
- Verify Resend domain was verified (Step 1.3)
- Check Vercel logs for email sending errors

**HubSpot contact not created?**
- Verify `HUBSPOT_ACCESS_TOKEN` is set correctly
- Check HubSpot token has required scopes (Step 1.4)
- Check Vercel logs for HubSpot API errors

---

## Phase 5: Post-Deployment Monitoring (Ongoing)

### Daily Monitoring (First Week)

Check these dashboards each day:

1. **Vercel Deployments**
   - `vercel logs` — any errors?
   - Recent deployment status: all green?

2. **Stripe Dashboard**
   - Successful payments: count & amounts
   - Failed payments: any blocks/issues?
   - Webhook failures: any red alerts?

3. **Resend Dashboard**
   - Email delivery rate: should be near 100%
   - Bounce rate: should be 0%
   - Any emails in spam/quarantine?

4. **HubSpot**
   - New deals being created?
   - Contacts have correct custom properties?
   - Notes being created for each applicant?

### Alert Triggers

If you see any of these, investigate immediately:

- ❌ Stripe webhook failures
- ❌ Resend email bounce rates > 5%
- ❌ HubSpot API errors
- ❌ Zero applications received (despite traffic)

---

## Rollback Procedures

If critical issues emerge after deployment:

### Immediate Rollback (5 minutes)

1. **Revert code:**
   ```bash
   cd /home/solomon/workspace/repos/ai-confidence-day
   git revert HEAD  # Reverts the £899 change back to £1
   git push origin main
   ```

2. **Revert Stripe keys in Vercel:**
   ```bash
   vercel env remove STRIPE_SECRET_KEY --environment production
   vercel env remove STRIPE_WEBHOOK_SECRET --environment production
   # Previous test keys will be used automatically
   ```

3. **Vercel redeployment:** Auto-triggers when pushing to main

### Partial Rollback (if only email is broken)

- Disable Resend email in `/api/webhook.js` line 251–255 (add early return)
- Keep Stripe & HubSpot running
- Allows payments to process while email is fixed

---

## Support Contacts

- **Stripe Issues:** Stripe Support (https://support.stripe.com)
- **Resend Issues:** Resend Support (https://resend.com/support)
- **HubSpot Issues:** HubSpot Support
- **Vercel Issues:** Vercel Support or check Vercel logs

---

## Sign-Off

- [ ] All external services configured & verified (Steps 1.1–1.4)
- [ ] Vercel environment variables updated (Step 2)
- [ ] Code updated & deployed (Phase 3)
- [ ] End-to-end tests passed (Phase 4)
- [ ] Monitoring active (Phase 5)

**Deployment Date:** _______________
**Deployed By:** _______________
**Approved By:** _______________

