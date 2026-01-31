import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Social Nexus",
  description: "Read our privacy policy to understand how Social Nexus collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-secondary/30 to-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
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
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our services and website</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect some functionality of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at privacy@socialnexus.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br /><br />
                  <strong className="text-foreground">Social Nexus</strong>
                  <br />
                  123 Digital Avenue, Tech Park
                  <br />
                  Bangalore, India 560001
                  <br />
                  Email: privacy@socialnexus.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
