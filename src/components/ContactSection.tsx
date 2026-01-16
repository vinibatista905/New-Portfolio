import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: t("toast.messageSent"),
        description: t("toast.thankYouForYourMessage"),
      });

      formRef.current?.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.getIn")}{" "}
          <span className="text-primary"> {t("contact.touch")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.contactDesc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.contactInformation")}
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium"> {t("contact.email")}</h4>
                  <a
                    href="mailto:vinicius-moura-batista@hotmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vinicius-moura-batista@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium"> {t("contact.phone")}</h4>
                  <a
                    href="tel:+5511984132569"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (11) 98413-2569
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium"> {t("contact.location")}</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    {t("contact.spBrazil")}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">{t("contact.connectWithMe")}</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/vinicius-batista-0120016a/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/vinibatista905"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Github />
                </a>
                <a
                  href="https://www.instagram.com/vinaobatista/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.sendMessage")}
            </h3>

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.yourName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-inputs bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.yourEmail")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-inputs bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.yourMessage")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-inputs bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",
                  isSubmitting &&
                    "opacity-50 cursor-not-allowed pointer-events-none"
                )}
              >
                {isSubmitting
                  ? t("contact.form.sending")
                  : t("contact.form.sendMessage")}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
