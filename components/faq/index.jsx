import style from "./index.module.scss";

const FAQ = () => {
  return (
    <div className={style.faq__wrapper} id="faq">
      <h2 className={style.faq__title}>Frequently Asked Questions</h2>
      <div className="container">
        <div className={style.faq__desc}>
          <p>
            Below you&apos;ll find answers to some common questions around
            creating a custom box. Every order is little different though, so
            don&apos;t hesitate to{" "}
            <a
              href="/"
              style={{ textDecoration: "underline", color: "#aa9488" }}
            >
              reach out
            </a>{" "}
            with anything else you might be wondering.
          </p>
        </div>
        <div className={style.faq}>
          <div className={style.faq__left}>
            <div className={style.qn}>
              <h3>How long do I need to wait for a quotation?</h3>
              <p>
                You can get your quotation within 24 hours, depending on the
                complexity of your order.
              </p>
            </div>
            <div className={style.qn}>
              <h3>
                What packaging products can I order from PT Petra Erka Perkasa?
              </h3>
              <p>
                Anything you can think of that is made of corrugated box, we can
                make them. However, if you think your design might get a little
                tricky or complex, do contact and consult with us.
              </p>
            </div>
            <div className={style.qn}>
              <h3>How do I know if my art is printable?</h3>
              <p>
                You can contact us directly to consult regarding your art. Our
                design team will help in reviewing your custom box design for
                any technical concerns (artwork resolution, blurriness, splits,
                thin lines, and bleeds) and if found, will note them for your
                attention in the proof. If you're unsure of how to fix any
                printing concerns that are noted, our team is happy to help you
                through the process. It's important to keep in mind that our
                team does not check for spelling or grammar errors, nor do they
                provide any subjective feedback on design content.
              </p>
            </div>
          </div>
          <div className={style.faq__right}>
            <div className={style.qn}>
              <h3>
                What happens after I place my order? Do I get a proof before
                printing?
              </h3>
              <p>
                Usually the flow of customer's order is as such: request of
                quotation, deal on quotation, artwork design submission, artwork
                design verified and accepted by customer, after which sample is
                then made and sent to the customer. If sample is verified and
                also accepted by customer, then production begins!
              </p>
            </div>
            <div className={style.qn}>
              <h3>Can you print inside the boxes?</h3>
              <p>
                Yes, we can. We are able to do both inside and outside of the
                boxes, with any color and will be printed according to the final
                design.
              </p>
            </div>
            <div className={style.qn}>
              <h3>What choices affect my pricing?</h3>
              <p>
                Pricing is generally a factor of five things: dimensions, box
                style, ink coverage on the box, box material, and quantity
                (higher quantities = bulk savings). If you have questions about
                pricing or choices that can affect your custom packaging order,
                our customer support team is happy to help!
              </p>
            </div>
          </div>
        </div>
        <div className={style.faq__cta}>
          <p>Can&apos;t find the answer you&apos;re looking for?</p>
          <a href="/">Consult us</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
