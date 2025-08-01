import ContactForm from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-accent lg:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We'd love to hear from you. Get in touch with us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-headline text-accent">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">opposite to Rosa Mystica school, near Polali dwara, Kaikamba, Mangaluru, Karnataka 574151</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">0824 681 6604</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
                 <div className="mt-1">
                  <Mail className="h-6 w-6 text-primary" />
                 </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">contact@greenspoon.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-headline text-accent">Send us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
