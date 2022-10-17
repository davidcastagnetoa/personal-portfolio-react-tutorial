import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
    // Embedded forms. from Audience in your mailchimp account
    const postUrl = `https://gmail.us8.list-manage.com/subscribe/post?u=801d74e75451700de636df2a6&amp;id=98657f85e9&amp;f_id=00f25fe0f0`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}