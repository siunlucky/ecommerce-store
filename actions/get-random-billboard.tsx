import { Billboard } from "@/types";

const getRandomBillboard = async (): Promise<Billboard> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billboards/random`)

    return res.json();
};

export default getRandomBillboard;