import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Social Nexus",
  description: "Read our terms and conditions for using Social Nexus services.",
};

export default function TermsPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-secondary/30 to-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Social Nexus website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Social Nexus provides digital marketing, branding, social media management, and related services. The specific scope of services will be defined in individual agreements or proposals provided to clients.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is the property of Social Nexus or its licensors and is protected by intellectual property laws. Upon full payment, clients receive ownership of final deliverables as specified in their agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms will be specified in individual project agreements. Generally, a deposit is required before work begins, with the balance due upon completion or according to the agreed payment schedule.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We respect the confidentiality of our clients&apos; information and will not disclose proprietary information to third parties without consent, except as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Social Nexus shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with written notice as specified in the service agreement. Upon termination, the client is responsible for payment for all work completed up to the termination date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms & Conditions, please contact us at:
                  <br /><br />
                  <strong className="text-foreground">Social Nexus</strong>
                  <br />
                  123 Digital Avenue, Tech Park
                  <br />
                  Bangalore, India 560001
                  <br />
                  Email: legal@socialnexus.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
