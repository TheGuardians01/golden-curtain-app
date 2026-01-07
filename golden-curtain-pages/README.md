# Golden Curtain Compliance Pages

This folder contains four React/Next.js-compatible pages that implement the compliance requirements for the Golden Curtain platform. These pages are written as functional components using TypeScript and JSX.

## Files

- `acceptable-use.tsx` – The Acceptable Use Policy. This page outlines prohibited content and conduct, enforcement measures, a repeat violator policy, reporting instructions, and contact information.
- `terms.tsx` – The Terms of Service. This page covers accounts and access, payments and subscriptions (emphasizing that payments go to Golden Curtain LLC and there is no tipping), content standards, repeat violator policy, reporting and takedowns, a disclaimer, and contact details.
- `privacy.tsx` – The Privacy Policy. This page explains what information is collected, how it is used, and provides a contact email for questions.
- `report.tsx` – The reporting/takedown page. This page describes how users or rights holders can report violating content and provides instructions for submitting reports and notes on repeat violators.

## Usage

These files are designed to be dropped into a Next.js project. Depending on the routing style of your project:

1. **App Router (Next.js 13+):** Create corresponding folders under the `app` directory, for example:

```
app/acceptable-use/page.tsx
app/terms/page.tsx
app/privacy/page.tsx
app/report/page.tsx
```

Then copy the contents of each file into its respective `page.tsx` file. Next.js will automatically route `/acceptable-use`, `/terms`, `/privacy`, and `/report` to these pages.

2. **Pages Router (Next.js < 13):** Place the files under the `pages` directory and rename them accordingly:

```
pages/acceptable-use.tsx
pages/terms.tsx
pages/privacy.tsx
pages/report.tsx
```

In both cases, ensure that you have a working React and TypeScript setup. These pages rely only on standard React functions and should not require any additional dependencies.

## Integration with Stripe Compliance

Once these pages are live on your domain, you can provide Stripe with their URLs to satisfy the requirements about having an Acceptable Use Policy, Terms of Service, Privacy Policy, and reporting functionality on your platform. The pages explicitly state that payments go to your company and that there is no tipping or direct payments to creators, aligning with the due diligence questionnaire responses.

Feel free to modify the text (especially the contact email addresses and company name) to match your actual business information.
