import Link from 'next/link';

const HomeFiveFaqArea = () => {

    return (
        <div className="bf-faq-area pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="bf-faq-title-wrap mb-30">
                            <h2 className="tp-section-tittle bf-section-title-2 reveal-text text-uppercase mb-30">have any questions?</h2>
                            <Link href="/contact" className="tp-btn tp-btn-border d-inline-flex align-items-center">
                                <span>
                                    <span className="text-1">Get in Touch</span>
                                    <span className="text-2">Get in Touch</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tp-faq-wrap bf-faq-wrap mb-30">
                            <div className="tp-faq-accordion" id="general_faqaccordiontwo">
                                <div className="accordion-item mb-15">
                                    <h2 className="accordion-header p-relative" id="order_one-1">
                                        <button className="tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_one-1" aria-expanded="true" aria-controls="order__collapse_one-1">
                                            Do you design websites from scratch or work with templates?
                                            <span className="accordion-btn"></span>
                                        </button>
                                    </h2>
                                    <div id="order__collapse_one-1" className="accordion-collapse collapse show" aria-labelledby="order_one-1" data-bs-parent="#general_faqaccordiontwo">
                                        <div className="accordion-body tp-faq-details-para">
                                            <p>My pricing typically includes the full design deliverables, such as high-quality exports, source<br />
                                                files (e.g., Figma or PSD), and up to 2–3 rounds of revisions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-15">
                                    <h2 className="accordion-header p-relative" id="order_two-2">
                                        <button className="collapsed tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_two-2" aria-expanded="false" aria-controls="order__collapse_two-2">
                                            What’s included in the pricing (e.g., revisions, source files)?
                                            <span className="accordion-btn"></span>
                                        </button>
                                    </h2>
                                    <div id="order__collapse_two-2" className="accordion-collapse collapse" aria-labelledby="order_two-2" data-bs-parent="#general_faqaccordiontwo">
                                        <div className="accordion-body tp-faq-details-para">
                                            <p>My pricing typically includes the full design deliverables, such as high-quality exports, source<br />
                                                files (e.g., Figma or PSD), and up to 2–3 rounds of revisions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-15">
                                    <h2 className="accordion-header p-relative" id="order_three-3">
                                        <button className="collapsed tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_three-3" aria-expanded="false" aria-controls="order__collapse_three-3">
                                            How do you handle project timelines and deadlines?
                                            <span className="accordion-btn"></span>
                                        </button>
                                    </h2>
                                    <div id="order__collapse_three-3" className="accordion-collapse collapse" aria-labelledby="order_three-3" data-bs-parent="#general_faqaccordiontwo">
                                        <div className="accordion-body tp-faq-details-para">
                                            <p>My pricing typically includes the full design deliverables, such as high-quality exports, source<br />
                                                files (e.g., Figma or PSD), and up to 2–3 rounds of revisions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-15">
                                    <h2 className="accordion-header p-relative" id="order_four-4">
                                        <button className="collapsed tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_four-4" aria-expanded="false" aria-controls="order__collapse_four-4">
                                            Will I get updates or previews during the design process?
                                            <span className="accordion-btn"></span>
                                        </button>
                                    </h2>
                                    <div id="order__collapse_four-4" className="accordion-collapse collapse" aria-labelledby="order_four-4" data-bs-parent="#general_faqaccordiontwo">
                                        <div className="accordion-body tp-faq-details-para">
                                            <p>My pricing typically includes the full design deliverables, such as high-quality exports, source<br />
                                                files (e.g., Figma or PSD), and up to 2–3 rounds of revisions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-15">
                                    <h2 className="accordion-header p-relative" id="order_five-5">
                                        <button className="collapsed tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_five-5" aria-expanded="false" aria-controls="order__collapse_five-5">
                                            Have you worked with clients in my industry before?
                                            <span className="accordion-btn"></span>
                                        </button>
                                    </h2>
                                    <div id="order__collapse_five-5" className="accordion-collapse collapse" aria-labelledby="order_five-5" data-bs-parent="#general_faqaccordiontwo">
                                        <div className="accordion-body tp-faq-details-para">
                                            <p>My pricing typically includes the full design deliverables, such as high-quality exports, source<br />
                                                files (e.g., Figma or PSD), and up to 2–3 rounds of revisions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFiveFaqArea;