# Newsletter CTA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a responsive, newsletter-only final CTA after the FAQ in the local redesigned homepage prototype.

**Architecture:** Keep the prototype's existing single-file React architecture. Add one isolated `NewsletterCTA` component, scoped CSS, and append it after `FAQ`. The component uses the current site's `POST /api/newsletter` contract with the default MailerLite group when hosted by Next.js, while the static port-50336 design preview simulates the response without storing or transmitting an address.

**Tech Stack:** HTML, CSS, React 18 UMD, Playwright browser verification

---

## File structure

- Modify `.superpowers/brainstorm/83126-1788606365/grain-shader-v12-upcoming-events.html`: add newsletter CTA styles, responsive rules, the React component, and its placement in `App`.
- Reference `docs/superpowers/specs/2026-09-06-newsletter-cta-design.md`: approved requirements and interaction contract.

The prototype file is intentionally ignored by Git and remains a local design artifact. Do not force-add it; implementation evidence comes from browser verification.

### Task 1: Add the newsletter CTA component and styling

**Files:**
- Modify: `.superpowers/brainstorm/83126-1788606365/grain-shader-v12-upcoming-events.html:173-280`
- Modify: `.superpowers/brainstorm/83126-1788606365/grain-shader-v12-upcoming-events.html:552-600`

- [ ] **Step 1: Record the pre-implementation browser assertions**

If port 50336 is not already serving the prototype, run:

```bash
python3 -m http.server 50336 --bind 127.0.0.1 --directory .superpowers/brainstorm/83126-1788606365
```

Then open `http://localhost:50336/grain-shader-v12-upcoming-events.html?v=newsletter1#newsletter` and confirm `document.querySelector('#newsletter')` is `null`. This is the expected failing state.

- [ ] **Step 2: Add scoped CTA styles**

Add these scoped styles before the first responsive media query:

```css
.newsletter-section { position:relative; overflow:hidden; padding:112px 24px 120px; background:#f3f0e7; color:#111; }
.newsletter-inner { position:relative; z-index:1; width:min(980px,100%); margin:0 auto; text-align:center; }
.newsletter-accent { position:absolute; inset:0; pointer-events:none; background:radial-gradient(circle at 8% 92%,rgba(178,18,29,.13),transparent 27%),radial-gradient(circle at 92% 12%,rgba(255,207,50,.2),transparent 28%),radial-gradient(circle at 50% 115%,rgba(17,17,17,.07),transparent 34%); }
.newsletter-heading { max-width:820px; margin:0 auto; font-size:clamp(48px,6vw,80px); font-weight:540; line-height:.98; letter-spacing:-.055em; text-wrap:balance; }
.newsletter-copy { max-width:590px; margin:24px auto 0; color:rgba(17,17,17,.62); font-size:17px; line-height:1.6; }
.newsletter-form { display:grid; grid-template-columns:minmax(0,1fr) auto; width:min(680px,100%); margin:38px auto 0; padding:6px; border:1px solid rgba(17,17,17,.18); border-radius:14px; background:rgba(255,255,255,.72); box-shadow:0 18px 50px rgba(17,17,17,.08); }
.newsletter-label { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; clip-path:inset(50%); }
.newsletter-input { width:100%; min-height:56px; padding:0 18px; border:0; outline:0; background:transparent; color:#111; font:500 16px/1.2 Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
.newsletter-input::placeholder { color:rgba(17,17,17,.42); }
.newsletter-input:focus-visible { border-radius:9px; box-shadow:inset 0 0 0 2px #111; }
.newsletter-input[aria-invalid="true"] { box-shadow:inset 0 0 0 2px #b2121d; }
.newsletter-submit { min-width:142px; min-height:56px; padding:0 22px; border:0; border-radius:10px; background:#111; color:#f6efe3; cursor:pointer; font:750 14px/1 Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; transition:transform .2s cubic-bezier(.2,.75,.2,1),background-color .2s ease; }
.newsletter-submit:hover:not(:disabled) { background:#b2121d; transform:translateY(-2px); }
.newsletter-submit:focus-visible { outline:3px solid #b2121d; outline-offset:3px; }
.newsletter-submit:disabled { cursor:wait; opacity:.7; }
.newsletter-status { min-height:22px; margin:12px auto 0; color:#a81018; font-size:13px; line-height:1.5; }
.newsletter-reassurance { margin:2px 0 0; color:rgba(17,17,17,.42); font-size:12px; }
.newsletter-success { display:grid; width:min(680px,100%); min-height:92px; margin:38px auto 0; place-items:center; padding:22px; border:1px solid rgba(17,17,17,.16); border-radius:14px; background:rgba(255,255,255,.72); box-shadow:0 18px 50px rgba(17,17,17,.08); }
.newsletter-success strong { display:block; font-size:20px; letter-spacing:-.025em; }
.newsletter-success span { display:block; margin-top:7px; color:rgba(17,17,17,.58); font-size:14px; }
```

Add to the existing `max-width:620px` media query:

```css
.newsletter-section { padding:84px 16px 92px; }
.newsletter-heading { font-size:46px; }
.newsletter-copy { max-width:330px; margin-top:20px; font-size:15px; }
.newsletter-form { grid-template-columns:1fr; gap:6px; margin-top:30px; }
.newsletter-submit { width:100%; }
.newsletter-success { margin-top:30px; }
```

Add `.newsletter-submit { transition:none; }` to the existing `prefers-reduced-motion:reduce` query.

- [ ] **Step 3: Add the isolated React component**

Create `NewsletterCTA` immediately after `FAQ` with:

```js
function NewsletterCTA(){
  const [email,setEmail]=useState("");
  const [status,setStatus]=useState("idle");
  const [message,setMessage]=useState("");
  const inputRef=React.useRef(null);
  const timerRef=React.useRef(null);
  const isValid=value=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  useEffect(()=>()=>{ if(timerRef.current) window.clearTimeout(timerRef.current); },[]);

  const submit=async event=>{
    event.preventDefault();
    const value=email.trim();
    if(!isValid(value)){
      setStatus("error");
      setMessage("Enter a valid email address.");
      window.requestAnimationFrame(()=>inputRef.current?.focus());
      return;
    }
    setStatus("loading");
    setMessage("Adding you to the newsletter…");
    const isStaticPreview=window.location.port==="50336";
    try{
      if(isStaticPreview){
        await new Promise(resolve=>{timerRef.current=window.setTimeout(resolve,600);});
      }else{
        const response=await fetch("/api/newsletter",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({email:value,group:"default"})
        });
        if(response.status!==201){
          const payload=await response.json().catch(()=>({}));
          throw new Error(payload.message||"Subscription failed");
        }
      }
      setEmail("");
      setStatus("success");
      setMessage("Thank you for subscribing! Please check your email to confirm your subscription.");
    }catch(error){
      setStatus("error");
      setMessage(error.message==="Invalid email"?"Enter a valid email address.":"We couldn’t complete your subscription. Please try again or use a different email address.");
      window.requestAnimationFrame(()=>inputRef.current?.focus());
    }
  };

  return e("section",{className:"newsletter-section",id:"newsletter","data-theme":"light"},
    e("div",{className:"newsletter-accent","aria-hidden":"true"}),
    e("div",{className:"newsletter-inner"},
      e("h2",{className:"newsletter-heading"},"Stay close to what’s happening."),
      e("p",{className:"newsletter-copy"},"Get upcoming events, opportunities, and community updates from Superteam Germany."),
      status==="success"
        ? e("div",{className:"newsletter-success",role:"status","aria-live":"polite"},
            e("div",null,e("strong",null,"You’re almost there."),e("span",null,message))
          )
        : e(React.Fragment,null,
            e("form",{className:"newsletter-form",onSubmit:submit,noValidate:true},
              e("label",{className:"newsletter-label",htmlFor:"newsletter-email"},"Email address"),
              e("input",{className:"newsletter-input",id:"newsletter-email",ref:inputRef,type:"email",inputMode:"email",autoComplete:"email",required:true,placeholder:"Enter your email",value:email,"aria-invalid":status==="error"?"true":undefined,"aria-describedby":"newsletter-status newsletter-reassurance",disabled:status==="loading",onChange:event=>{setEmail(event.target.value);if(status==="error"){setStatus("idle");setMessage("");}}}),
              e("button",{className:"newsletter-submit",type:"submit",disabled:status==="loading"},status==="loading"?"Subscribing…":"Subscribe")
            ),
            e("div",{className:"newsletter-status",id:"newsletter-status",role:"status","aria-live":"polite"},message),
            e("p",{className:"newsletter-reassurance",id:"newsletter-reassurance"},"No spam. Unsubscribe anytime.")
          )
    )
  );
}
```

The form explicitly sets `noValidate:true` so the required custom inline error and focus behavior is not intercepted by the browser's native validation bubble. `aria-invalid` is present only for the error state; the input is connected to status and reassurance text with `aria-describedby`; both controls are disabled while loading; and typing clears a stale error. The production path matches `src/components/newsletter-form.tsx` and `src/app/api/newsletter/route.ts`: same-origin POST, JSON payload, default group, and `201` success. The port-50336 branch is preview-only.

- [ ] **Step 4: Insert the component**

Append `e(NewsletterCTA)` immediately after `e(FAQ)` in `App` so the section becomes the homepage's final CTA and the future footer can follow it.

- [ ] **Step 5: Run static checks**

Run:

```bash
rg -n "function NewsletterCTA|id:\"newsletter\"|e\(NewsletterCTA\)" .superpowers/brainstorm/83126-1788606365/grain-shader-v12-upcoming-events.html
```

Expected: all three component, section, and mount markers are present.

### Task 2: Verify the completed experience

**Files:**
- Verify: `.superpowers/brainstorm/83126-1788606365/grain-shader-v12-upcoming-events.html`

- [ ] **Step 1: Verify desktop layout and transition**

At 1440x900, load `?v=newsletter1#newsletter`. Confirm the black FAQ ends before an off-white newsletter section, the headline and copy are centered, and the form is one horizontal row. Capture a viewport screenshot for visual inspection.

- [ ] **Step 2: Verify validation and focus behavior**

Submit an empty value and then `invalid-email`. Confirm the inline error is visible, the input has `aria-invalid="true"`, and focus returns to the email input.

- [ ] **Step 3: Verify loading and success behavior**

Submit `builder@example.com` on port 50336. Confirm no network POST is made, the button reads “Subscribing…” while disabled, then the form is replaced after roughly 600 ms by the same check-your-email confirmation used on the current website. Confirm the email address is not shown in the success UI. Inspect the component source to confirm the non-preview path posts `{email, group:"default"}` to `/api/newsletter` and requires a `201` response.

- [ ] **Step 4: Verify tablet and mobile layouts**

At 768x1024 and 390x844, confirm there is no horizontal overflow. At 390px, confirm the input and button stack and both fill the available form width.

- [ ] **Step 5: Verify keyboard and reduced motion**

Tab through the form to confirm visible focus treatment. Emulate `prefers-reduced-motion: reduce` and confirm CTA transition durations resolve to `0s` or transitions are absent.

- [ ] **Step 6: Preserve unrelated work**

Run `git status --short` and confirm no unrelated files were modified. Do not stage or commit the ignored prototype.
