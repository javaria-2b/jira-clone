import { AlertTriangle } from "lucide-react"

interface PageErrorProps {
    message: string;
}

export const PageError = ({
    message = "Something went wrong",
}: PageErrorProps) => {
    return (
        <div>
            <AlertTriangle className="size-6 text-muted-foreground mb-2" />
            <p className="text-sm font-medium text-muted-foreground">{message}</p>
        </div>
    )
}