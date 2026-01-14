import ScrollSmoothProvider from "@/components/providers/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import HomeFourTextSlider from "@/components/text-slider/HomeFourTextSlider";
import ThemeCursorProvider from "@/components/providers/ThemeCursorProvider";
import HomeFourPortfolio from "@/components/portfolio/HomeFourPortfolio";
import HomeFourService from "@/components/service/HomeFourService";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import HomeFourFooter from "@/layouts/footers/HomeFourFooter";
import HomeFourAbout from "@/components/about/HomeFourAbout";
import HomeFourAward from "@/components/award/HomeFourAward";
import HomeFourBrand from "@/components/brand/HomeFourBrand";
import HomeFourBlog from "@/components/blog/HomeFourBlog";
import HeaderFour from "@/layouts/headers/HeaderFour";
import HeroFour from "@/components/hero/HeroFour";

const HomeFourMain = () => {
    return (
        <ScrollSmoothProvider>
            <ThemeCursorProvider>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-white-bg">
                        <div id="ball"></div>
                    </div>
                    {/* Global Components */}
                    <BackToTop />
                    <HeaderFour />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <HeroFour />
                                <HomeFourAbout />
                                <HomeFourBrand />
                                <HomeFourPortfolio />
                                <HomeFourService />
                                <HomeFourTextSlider />
                                <HomeFourAward />
                                <HomeFourBlog />
                            </main>
                            <HomeFourFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </ThemeCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default HomeFourMain;