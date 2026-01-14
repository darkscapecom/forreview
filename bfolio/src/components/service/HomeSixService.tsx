
import serviceData from "@/data/serviceData";
import { ServiceArrowIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const HomeSixService = () => {
    //display services data
    const displayServiceData = serviceData.slice(9, 13);

    return (
        <div
            className="bf-service-area bf-service-3-rounded pt-150 pb-160"
            style={{ backgroundColor: "#151515" }}
        >
            <div className="container container-1320">
                {/* Heading Section */}
                <div className="row">
                    <div className="col-lg-5">
                        <div className="bf-service-heading mb-60 tp_fade_anim" data-delay=".3">
                            <span className="tp-section-subtitle text-white">OUR SERVICES</span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bf-service-heading mb-60">
                            <h3
                                className="bf-section-title-3 text-white mb-20 tp_fade_anim"
                                data-delay=".3"
                            >
                                Service we’re <br /> always provides
                            </h3>
                            <div className="tp_text_anim">
                                <p className="bf-service-3-dec">
                                    Agntix power of our 8+ years of experience. We build excellence works. <br />
                                    That will help you to grow your business products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Items */}
                {displayServiceData.map((service) => (
                    <div className="bf-service-item-3 fix" key={service.id}>
                        <div className="row gx-0">
                            {/* Left Side - Image + Title */}
                            <div className="col-lg-6">
                                <div className="bf-service-item-3-wrap d-flex align-items-center">
                                    <div className="bf-service-item-3-thumb">
                                        <Link href="/service">
                                            <Image width={290} height={202} src={service.image} alt={service.title} />
                                        </Link>
                                    </div>
                                    <div className="bf-service-item-3-text">
                                        <h4 className="bf-service-item-3-title">
                                            <Link className="common-underline" href="/service">
                                                {service.title}
                                            </Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Arrow + Tags */}
                            <div className="col-lg-6">
                                <div className="bf-service-item-3-wrapper p-relative fix">
                                    <div className="bf-service-item-3-btn">
                                        <Link href="/service">
                                            <span>
                                                <ServiceArrowIcon />
                                            </span>
                                        </Link>
                                    </div>

                                    <div className="bf-service-item-3-slider">
                                        <div className="bf-service-item-3-tags">
                                            {Array(3)
                                                .fill(service.categories).flat()
                                                .map((tag, index) => (
                                                    <span key={index}>{tag}</span>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default HomeSixService;