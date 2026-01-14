import projectData from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";

const HomeFourPortfolio = () => {
    // display portfolio data
    const displayPortfolioData = projectData.slice(20, 24);

    return (
        <div className="bf-portfolio-area bf-portfolio-sticky-area pt-140 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bf-portfolio-wrap text-center">
                            <h2 className="bf-portfolio-title bf-portfolio-text-sticky mb-0">
                                recent work
                            </h2>

                            <div className="bf-portfolio-wrapper">
                                <div className="d-grid">
                                    {displayPortfolioData.map((item) => (
                                        <div className="grid-item" key={item.id}>
                                            <div className="project-item project-style-3 hover-play">
                                                <div
                                                    className="project-item-inner"
                                                    data-cursor="View<br>Details"
                                                >
                                                    <div className="bf-portfolio-post-thumbnail">
                                                        <div className="video-container">
                                                            <Link className="cursor-hide" href={`/portfolio-details/${item.id}`}>
                                                                <Image
                                                                    width={1326}
                                                                    height={844}
                                                                    className="w-100"
                                                                    src={item.image}
                                                                    alt={item.title}
                                                                    priority
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="bf-portfolio-content">
                                                        <span className="bf-portfolio-vp-text-top">
                                                            <Link className="cursor-hide" href={`/portfolio-details/${item.id}`}>
                                                                {item.title}
                                                            </Link>
                                                        </span>
                                                        <span className="bf-portfolio-vp-text-middle">
                                                            {item.year}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFourPortfolio;
