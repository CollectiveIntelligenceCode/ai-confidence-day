# AI Confidence Day — Go-Live Documentation Index

**Status:** ✅ PRODUCTION READY (awaiting management approval)
**Last Updated:** 2026-05-13
**Target Go-Live:** May 14, 2026

---

## Documentation Structure

This index guides you through all go-live documents in the correct reading/execution order.

### 1. For Management/Board (Decision Layer)

**Read this first to decide whether to proceed:**

- **[READY_FOR_MANAGEMENT_REVIEW.md](READY_FOR_MANAGEMENT_REVIEW.md)** (3 min read)
  - One-page executive summary
  - What's ready vs. what needs approval
  - Timeline and next steps
  - Risk assessment
  - **Decision point:** Approve or defer go-live

### 2. For Deployment Owner (Technical Lead)

**Read these to understand the full scope before starting:**

- **[STATUS_2026_05_12.md](STATUS_2026_05_12.md)** (5 min read)
  - Executive status report with metrics
  - Timeline recommendations
  - Risk assessment & mitigation
  - Success metrics and approval checklist
  - **Context:** Full picture of what's at stake

- **[GO_LIVE_CHECKLIST.md](GO_LIVE_CHECKLIST.md)** (10 min reference)
  - High-level technical requirements
  - Four critical requirements (Stripe, Resend, HubSpot, Vercel)
  - Current state of integrations
  - Testing overview
  - Rollback procedures
  - **Reference:** Keep handy during deployment

### 3. For Execution (Step-by-Step)

**Follow these in order during deployment:**

- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** (20 min reference + 4-6 hours execution)
  - Phase 1: External service configuration (Stripe, Resend, HubSpot)
  - Phase 2: Vercel environment variables
  - Phase 3: Code update & deployment
  - Phase 4: Complete testing procedures
  - Phase 5: Post-deployment monitoring
  - **Execution:** Detailed procedures for each phase

- **[PRE_LAUNCH_VERIFICATION.md](PRE_LAUNCH_VERIFICATION.md)** (30 min + testing)
  - Checklist format for easy verification
  - Check off each item as you complete it
  - Test all integrations end-to-end
  - Final go/no-go decision
  - Post-launch monitoring schedule
  - **Verification:** Safety gate before going live

---

## Quick Reference

### Timeline

| When | What | Owner |
|------|------|-------|
| **Now** | Review READY_FOR_MANAGEMENT_REVIEW.md | Board/Management |
| **Today (May 13)** | Approve production deployment | Board/Management |
| **Today (May 13)** | Read STATUS_2026_05_12.md + GO_LIVE_CHECKLIST.md | Deployment Owner |
| **Today (May 13)** | Execute DEPLOYMENT_GUIDE.md phases 1-3 | Deployment Owner |
| **Today (May 13)** | Execute PRE_LAUNCH_VERIFICATION.md testing | QA / Deployment Owner |
| **Tomorrow (May 14)** | Final verification & go/no-go decision | Deployment Owner |
| **Tomorrow (May 14)** | Monitor first 4 hours closely | Ops/Support |
| **May 14-20** | Daily monitoring | Ops/Support |
| **May 14-June 12** | Weekly reviews | Ops/Support |
| **June 19** | First event (Consultants) | Event Team |

### Files by Role

**Management/Board:**
- READY_FOR_MANAGEMENT_REVIEW.md

**Deployment Owner:**
- STATUS_2026_05_12.md
- GO_LIVE_CHECKLIST.md
- DEPLOYMENT_GUIDE.md
- PRE_LAUNCH_VERIFICATION.md

**QA/Testing:**
- DEPLOYMENT_GUIDE.md (Phase 4)
- PRE_LAUNCH_VERIFICATION.md (Testing section)

**Operations/Monitoring:**
- DEPLOYMENT_GUIDE.md (Phase 5)
- PRE_LAUNCH_VERIFICATION.md (Monitoring section)

---

## What Each Document Contains

### READY_FOR_MANAGEMENT_REVIEW.md
**Purpose:** Executive summary for decision-making
**Length:** 3.2 KB (1-2 page print)
**Key Sections:**
- Quick status: production ready
- What's ready vs. what needs approval
- Next steps for board
- Risk assessment & timeline
- File references for detailed reading

### STATUS_2026_05_12.md
**Purpose:** Detailed executive report with metrics
**Length:** 6.6 KB (2-3 page print)
**Key Sections:**
- Executive summary
- Current status & project metrics
- Technical requirements for go-live
- Risk assessment & mitigation
- Timeline recommendation
- Success metrics
- Approval sign-off

### GO_LIVE_CHECKLIST.md
**Purpose:** Technical requirements reference
**Length:** 6.4 KB (2-3 page print)
**Key Sections:**
- Current state assessment
- Pre-launch tasks (4 critical requirements)
- Stripe configuration
- Resend email verification
- HubSpot scopes validation
- Vercel environment variables
- Code changes required
- Testing checklist
- Rollback plan
- Post-launch monitoring

### DEPLOYMENT_GUIDE.md
**Purpose:** Step-by-step operational procedures
**Length:** 8.6 KB (3-4 page print)
**Key Sections:**
- Pre-deployment checklist (approvals)
- Phase 1: External service configuration
- Phase 2: Vercel environment setup
- Phase 3: Code update & deployment
- Phase 4: Testing procedures
- Phase 5: Post-deployment monitoring
- Troubleshooting guide
- Rollback procedures
- Support contacts

### PRE_LAUNCH_VERIFICATION.md
**Purpose:** Detailed verification checklist for deployment owner
**Length:** 9.5 KB (3-4 page print)
**Key Sections:**
- Pre-deployment checklist (boxes to check)
- External services configuration verification
- Environment variables verification
- Code update confirmation
- Testing phase (all integrations)
- Final safety checks
- Rollback readiness
- Monitoring setup
- Go/no-go decision framework
- Post-go-live monitoring schedule

---

## How to Use This Documentation

### Scenario 1: Board/Management Review

1. **Read:** READY_FOR_MANAGEMENT_REVIEW.md (5 minutes)
2. **Decide:** Approve or defer
3. **If approved:** Assign deployment owner and notify them

### Scenario 2: First-Time Deployment Owner

1. **Read:** STATUS_2026_05_12.md (5 min) — understand what's at stake
2. **Scan:** GO_LIVE_CHECKLIST.md (10 min) — technical overview
3. **Execute:** DEPLOYMENT_GUIDE.md (4-6 hours) — follow phases 1-5
4. **Verify:** PRE_LAUNCH_VERIFICATION.md (1-2 hours) — check every box
5. **Decide:** Go/no-go based on verification results

### Scenario 3: Rollback Needed

**If critical issues arise:**
1. Open PRE_LAUNCH_VERIFICATION.md → "Rollback Readiness" section
2. Follow the 10-minute rollback procedure
3. Revert to test mode (£1.00 transactions)
4. Contact support team & post-mortem later

### Scenario 4: Daily Monitoring (First Week)

1. Open PRE_LAUNCH_VERIFICATION.md → "Post-Go-Live" section
2. Check hourly items (first 4 hours)
3. Check daily items (first week)
4. Document any issues in #incidents channel

---

## Critical Paths

### Must Complete Before Go-Live
- [ ] Board/management approval
- [ ] Stripe live webhook created
- [ ] Resend domain verified
- [ ] HubSpot token scopes validated
- [ ] Vercel environment variables updated
- [ ] Code checkout amount updated to £899.00
- [ ] End-to-end test passed (all integrations working)
- [ ] Final verification checklist completed
- [ ] Go/no-go decision made

### Cannot Proceed Without
- Board approval (approval gate)
- Stripe webhook signing secret
- Resend verified domain
- HubSpot token with required scopes
- Real payment test (Stripe test cards don't work with live key)

---

## Support & Escalation

### If You're Stuck

**Deployment Phase 1-2 Issues:**
- Contact: Stripe support (stripe.com/support)
- Reference: GO_LIVE_CHECKLIST.md → Stripe Configuration section

**Phase 3 (Code/Vercel) Issues:**
- Contact: Vercel support or deployment owner
- Reference: DEPLOYMENT_GUIDE.md → Phase 3 section

**Phase 4 (Testing) Issues:**
- Follow troubleshooting in DEPLOYMENT_GUIDE.md
- Check Vercel logs for errors
- Verify webhook signatures in Stripe

**Phase 5 (Monitoring) Issues:**
- Check PRE_LAUNCH_VERIFICATION.md → Monitoring section
- Review dashboards (Stripe, Resend, HubSpot, Vercel)
- If critical: Follow rollback procedure

---

## Document Metadata

| Document | Status | Last Updated | Approval Gate | Next Review |
|----------|--------|-------------|---|---|
| GO_LIVE_DOCS_INDEX.md | 📄 Active | 2026-05-13 | N/A | N/A |
| READY_FOR_MANAGEMENT_REVIEW.md | 📄 Ready | 2026-05-12 | Board/Mgmt | May 14 |
| STATUS_2026_05_12.md | 📄 Ready | 2026-05-12 | Board/Mgmt | May 14 |
| GO_LIVE_CHECKLIST.md | 📄 Ready | 2026-05-12 | N/A | Post-launch |
| DEPLOYMENT_GUIDE.md | 📄 Ready | 2026-05-12 | N/A | Post-launch |
| PRE_LAUNCH_VERIFICATION.md | 📄 Ready | 2026-05-13 | Deployment Owner | May 14 |

---

## Success Criteria

✅ **Deployment is successful when:**
- All verification checkboxes completed
- End-to-end test passed (payment → email → HubSpot)
- Stripe webhook delivering successfully
- Email delivery rate > 95%
- No critical errors in Vercel logs
- First week monitoring shows stable metrics

---

## Archive & Handoff

**After go-live, keep this documentation for:**
- Team reference (how was it deployed?)
- Incident response (what do we do if X breaks?)
- Compliance/audit (what was the process?)
- Future deployments (playbook for next event)

**Archive location:** `solomon-vault/operations/ai-confidence-day-deployment/` (for historical reference)

---

**Ready to proceed? Start with READY_FOR_MANAGEMENT_REVIEW.md and follow the timeline above.**
