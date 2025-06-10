import { Button } from "@heroui/react";

export default function PokerButton({ children, ...props }) {
    return (
        <Button {...props} className="flex items-center gap-2">
            <img src="/poker-chip-blue.svg" alt="Poker Chip" className="w-5 h-5" />
            {children}
        </Button>
    );
} 