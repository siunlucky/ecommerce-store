import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("d991dabd-3752-46de-96c5-2cf414c32ded");

    return (
        <Container>
            <div className="pb-10 space-y-10">
                <Billboard data={billboard} />
                <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
}

export default HomePage;