# AI Confidence Day — Production Go-Live Checklist

**Status:** Ready for deployment approval
**Updated:** 2026-05-12
**Events:**
- Consultants & Small Business Owners: 19th June 2026 (Smiths of Smithfield, London)
- CXOs & Board Members: 3rd July 2026 (Smiths of Smithfield, London)

---

## Current State

### What's Ready ✅
- Frontend application fully deployed to Vercel (all routes, components, flows)
- Checkout integration with Stripe (test mode, £1.00)
- Welcome email system via Resend (configured in webhook)
- HubSpot CRM sync (contact creation, notes, deals, email engagement logging)
- Calendar invite generation (.ics files, Google Calendar, Outlook links)
- Thank you pages with LinkedIn share buttons and social sharing
- Sustainability mockup deployed and accessible

### Test Credentials Active
- **Stripe**: Test mode active (sk_test_...)
- **Resend**: Development environment
- **HubSpot**: Connected via pat-na2-... token

---

## Pre-Launch Tasks (Required)

### 1. Stripe Configuration
**Action:** Switch from test mode (£1.00) to production (£899.00)
**Steps:**
1. Update Vercel environment variables:
   - `STRIPE_SECRET_KEY`: Change from `sk_test_...` to `sk_live_...`
   - `STRIPE_WEBHOOK_SECRET`: Change from test webhook secret to **live webhook secret**
2. Update `/api/create-checkout.js`:
   - Line 40: Change `unit_amount: 100` (£1.00) to `unit_amount: 89900` (£899.00)
3. Create a **new live webhook** in Stripe Dashboard:
   - Point to `https://ai-confidence-day.vercel.app/api/webhook`
   - Subscribe to: `checkout.session.completed`
   - Copy the signing secret to Vercel as `STRIPE_WEBHOOK_SECRET` (production environment)
4. Test end-to-end with a live card (Stripe's test mode cards will not work with live key)
5. Deploy to Vercel

**Reference:** `/api/create-checkout.js` (line 40), `/api/webhook.js` (line 3, 5, 478)

---

### 2. Resend Email Verification
**Action:** Verify the `contact@solvedtogether.co.uk` domain
**Current Setup:**
- Email from: `contact@solvedtogether.co.uk`
- Emails sent to applicants with event details, calendar invite (.ics), and calendar links
- API calls to Resend at line 281–298 of `/api/webhook.js`

**Steps:**
1. Log in to Resend.com dashboard
2. Navigate to **Domains**
3. Add domain: `solvedtogether.co.uk` (if not already added)
4. Verify ownership via **DNS records** (CNAME or TXT)
5. Once verified, the sender `contact@solvedtogether.co.uk` is production-ready
6. If not verified, emails may fail or be flagged as spam

**Reference:** `/api/webhook.js` (lines 268, 281–298)

---

### 3. HubSpot Scopes & Access
**Action:** Ensure HubSpot token has `deals.write` and `notes.write` scopes
**Current Setup:**
- Token: `pat-na2-...` (Private App token)
- Operations: Create contacts, log email engagement, create deals, create notes
- API calls at lines 325–466 of `/api/webhook.js`

**Steps:**
1. Log in to HubSpot (hub.hubapi.com)
2. Navigate to **Settings > Integrations > Private apps**
3. Select the app token used in `HUBSPOT_ACCESS_TOKEN`
4. Verify it has these **scopes**:
   - `crm.objects.contacts.write` ✓ (create/update contacts)
   - `crm.objects.deals.write` ✓ (create deals)
   - `crm.objects.notes.write` ✓ (create notes)
   - `crm.objects.emails.write` (optional, for engagement logging)
5. If scopes are missing, add them and **regenerate the token**
6. Update `HUBSPOT_ACCESS_TOKEN` in Vercel environment variables with the new token

**Reference:** `/api/webhook.js` (lines 4, 325–466)

---

### 4. Environment Variables in Vercel
**Action:** Ensure all three secrets are set for **Production** environment
**Current Variables:**
- `STRIPE_SECRET_KEY` (update with live key)
- `STRIPE_WEBHOOK_SECRET` (update with live webhook secret)
- `RESEND_API_KEY` (already set, verify it works with verified domain)
- `HUBSPOT_ACCESS_TOKEN` (already set, verify scopes)
- `BASE_URL` (already set to `https://ai-confidence-day.vercel.app`)

**How to Update:**
```bash
cd /home/solomon/workspace/repos/ai-confidence-day
vercel env add STRIPE_SECRET_KEY --environment production
vercel env add STRIPE_WEBHOOK_SECRET --environment production
vercel env add RESEND_API_KEY --environment production
vercel env add HUBSPOT_ACCESS_TOKEN --environment production
```

---

## Code Changes Required

### `/api/create-checkout.js` — Line 40
**Current:**
```javascript
unit_amount: 100, // £1.00 test — change to 89900 for production
```

**Change To:**
```javascript
unit_amount: 89900, // £899.00 production
```

### Deploy
After all environment variables are set in Vercel and the code change is made:
```bash
git add api/create-checkout.js
git commit -m "prod: update Stripe checkout to £899.00"
git push origin main
# Vercel auto-deploys on push
```

---

## Testing Checklist (Before Going Live)

- [ ] **Stripe Webhook**: Simulate `checkout.session.completed` event in Stripe Dashboard
  - Check that it receives the POST to `/api/webhook`
  - Verify deal creation in HubSpot
- [ ] **Welcome Email**: Submit a test checkout with a real email address
  - Should receive welcome email within seconds
  - Email should include calendar invite (.ics)
  - Verify sender is `contact@solvedtogether.co.uk` (not bounced/spam)
- [ ] **HubSpot Sync**: Check that contact was created with:
  - Email, full name, company, team size
  - `ai_confidence_team_size` and `ai_confidence_ai_usage` custom properties
  - Deal created with `closedwon` status, amount £899.00
  - Note with the applicant's AI usage answer
- [ ] **End-to-End Flow**:
  - Submit application form (Consultants variant)
  - See thank you page with LinkedIn share button
  - Receive welcome email
  - Verify contact in HubSpot

---

## Rollback Plan

If issues arise after going live:
1. **Revert to test mode** by updating `STRIPE_SECRET_KEY` back to test key
2. **Update checkout.js** back to `unit_amount: 100`
3. **Redeploy** to Vercel
4. Alternatively, disable checkout via feature flag (would require code change)

---

## Post-Launch Monitoring

- **Stripe Dashboard**: Monitor webhook delivery, failed payments
- **Resend Dashboard**: Check email delivery rates, bounces
- **HubSpot**: Verify deals are being created and synced correctly
- **Vercel Logs**: Monitor `/api/webhook` and `/api/create-checkout` for errors

---

## Contacts for Stakeholders

- **Event Coordination**: Rujuta & Chris (event hosts)
- **HubSpot Admin**: Check CRM for applications and deal status
- **Technical Support**: Check Vercel logs for deployment issues
