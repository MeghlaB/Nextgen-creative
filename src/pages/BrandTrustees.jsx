import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import ValidCalient from "./ValidCalient";
const BrandTrustees = ({ brands = [] }) => {

    return brands.length > 0 && <section className="py-12">
        <div className="section-title mb-8">
                <ValidCalient/>
        </div>

        <Marquee pauseOnHover speed={100} gradient={false} className="bg-white p-4 rounded">
            {brands.map((brand, index) => (
                <Link
                    to={"https://www.google.com/search?q=" + brand.brand_name}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                    title={brand.description}
                    className="mx-4 flex flex-col items-center cursor-pointer min-w-[250px]"
                >
                    <img src={brand.brand_logo} alt={brand.brand_name} className="w-32 h-32 object-contain p-4 mx-auto" />
                    <div className="mt-2 text-sm text-center font-semibold">{brand.brand_name}</div>
                </Link>
            ))}
        </Marquee>
    </section>
};

export default BrandTrustees;
