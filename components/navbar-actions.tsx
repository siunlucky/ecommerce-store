"use client"

import Button from "@/components/ui/button";
import { useState, useEffect } from "react";

import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter()
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex items-center ml-auto gap-x-4">
            <Button onClick={() => router.push("/cart")} className="flex items-center px-4 py-2 bg-black rounded-full">
                <ShoppingBag
                    size={20}
                    color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}

export default NavbarActions;